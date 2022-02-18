### 安装 pnpm

```shell
npm i pnpm -g
```

### 构建依赖

node 版本 v16+

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

- 组件 example 效果和 vue3 版本一致
- 组件 example 暗黑模式正常
- 组件 example 国际化正常
- 组件单元测试所有 case 通过
- 组件 types 类型声明完成
- 组件文档适配 Vue2 写法

#### Todolist

- app-bar
- cell
- progress
- snackbar
- chip
- image
- badge
- skeleton
