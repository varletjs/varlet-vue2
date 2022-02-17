import { buildCli, buildUI, runTask } from './build.mjs'
;(async () => {
  await runTask('cli', buildCli)
  await runTask('ui', buildUI)
})()
