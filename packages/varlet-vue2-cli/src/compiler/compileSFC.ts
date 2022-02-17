import hash from 'hash-sum'
import * as compiler from 'vue-template-compiler'
import * as compileUtils from '@vue/component-compiler-utils'
import { readFile, writeFileSync } from 'fs-extra'
import { replaceExt } from '../shared/fsUtils'
import { compileScript } from './compileScript'
import { clearEmptyLine, compileLess, extractStyleDependencies, STYLE_IMPORT_RE } from './compileStyle'

const EXPORT_START_RE = /export\s+default\s+{/
const DEFINE_EXPORT_START_RE = /export\s+default\s+defineComponent\s*\(\s*{/

export function injectRender(script: string, render: string): string {
  if (DEFINE_EXPORT_START_RE.test(script.trim())) {
    return script.trim().replace(
      DEFINE_EXPORT_START_RE,
      `${render}\nexport default defineComponent({
  render,\
    `
    )
  }

  if (EXPORT_START_RE.test(script.trim())) {
    return script.trim().replace(
      EXPORT_START_RE,
      `${render}\nexport default {
  render,\
    `
    )
  }

  return script
}

export function injectScopeId(script: string, scopeId: string): string {
  if (EXPORT_START_RE.test(script.trim())) {
    return script.trim().replace(
      EXPORT_START_RE,
      `export default {
  _scopeId: '${scopeId}',\
    `
    )
  }

  return script
}

function compileTemplate(template: string) {
  const result = compileUtils.compileTemplate({
    compiler,
    source: template,
    isProduction: true,
  } as any)

  return result.code
}

export async function compileSFC(sfc: string) {
  const source: string = await readFile(sfc, 'utf-8')
  const descriptor = compileUtils.parse({ source, compiler, needMap: false } as any)
  const { script, template, styles } = descriptor
  // scoped
  const hasScope = styles.some((style) => style.scoped)
  const id = hash(source)
  const scopeId = hasScope ? `data-v-${id}` : ''

  if (script) {
    // template
    const render = template && compileTemplate(template.content)

    let { content } = script

    if (render) {
      content = injectRender(content, render)
    }

    if (scopeId) {
      content = injectScopeId(content, scopeId)
    }
    // script
    await compileScript(content, sfc)
    // // style
    for (let index = 0; index < styles.length; index++) {
      const style = styles[index]
      const lang = style.lang || 'css'
      const file = replaceExt(sfc, `Sfc${index || ''}.${lang}`)
      let code = style.content.trim()

      if (scopeId) {
        code = compileUtils.compileStyle({
          source: style.content,
          filename: file,
          id: scopeId,
          scoped: style.scoped,
          preprocessLang: lang,
        }).code
      }

      code = extractStyleDependencies(file, code, STYLE_IMPORT_RE, style.lang as 'css' | 'less', true)
      writeFileSync(file, clearEmptyLine(code), 'utf-8')
      style.lang === 'less' && (await compileLess(file))
    }
  }
}
