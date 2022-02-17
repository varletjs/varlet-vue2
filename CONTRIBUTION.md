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

#### Todolist

- app-bar
- cell
- progress
- snackbar
- chip
- image
- badge
- skeleton