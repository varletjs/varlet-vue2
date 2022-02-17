### 安装pnpm

```shell
npm i pnpm -g
```

### 构建依赖

node版本v16+

```shell
pnpm bootstrap
```

### 启动开发服务器

```shell
cd packages/varlet-vue2-ui
pnpm dev
```

### 贡献组件目标

参考**button**组件

#### checklist

- 组件example效果和vue3版本一致
- 组件example暗黑模式正常
- 组件example国际化正常
- 组件单元测试所有case通过
- 组件types类型声明完成
- 组件文档适配Vue2写法

#### 单元测试

```shell
npm i -g yarn
```

```shell
yarn test -w -c skeleton
```

- props -> propsData
- unmount -> destroy
- slots -> scopedSlots（注意：参数default属性值直接为字符串）

#### 提交项目

```shell
git add .
```

```shell
git commit -m "feat: add component 这里写组件名称" or git commit -m "feat(ui/这里写组件名称): add component 这里写组件名称"
```

```shell
git push -u
```

#### Todolist

- app-bar
- cell
- progress
- snackbar
- chip
- image
- badge
- skeleton