## 🔝 ##

### 组件迁徙进度 ###

https://docs.qq.com/sheet/DZFVGeWx0dU9VemRq

选择想迁徙的组件
➡ 对应行D列填入群昵称
➡ E列进度改为进行中
➡ 根据指南完成迁徙
➡ 进度改为完成，若有依赖组件未迁徙则备注

### 提交项目前确认

- 组件 example  console无报错，效果和 vue3 版本一致,（注意测试暗黑模式、国际化功能

- 组件单元测试所有case 通过（有问题不要直接u，仔细对照确认代码✅

- package/varlet-vue2-ui/type中添加 `组件名.d.ts`

- 在 index.d.ts 中添加`export * from './组件名'`

- 组件文档内代码适配 Vue2

- .vue 文件中无空的style标签

  

## 具体流程 ##

### Fork项目 ###

https://github.com/varletjs/varlet-vue2 右上角Fork一个自己下面的仓库！

![](https://s3.bmp.ovh/imgs/2022/02/20bee14ecec27cb5.png)

### 拉取项目

注意网络质量。

```shell
git clone https://github.com/自己的/varlet-vue2.git
```

### 全局安装pnpm

```shell
npm i -g pnpm
```

### 构建依赖（确保 node 版本 16+）

在项目根目录运行：

```
pnpm bootstrap
```

### 修改组件

- 组件适配Vue2
- $slots.xxx 改为 hasSlots(‘xxx’)    //无需引入，直接使用！
- 表单组件：vue3的modelValue要改为value，同步更新props和types下面声明的文件类型！
- 表单组件：onUpdate:modelValue 事件改为 onInput（如果两个事件都存在，就留一个onInput

### 修改过程中预览组件、查看报错 ###

启动开发服务器：

```shell
cd packages/varlet-vue2-ui

pnpm dev
```

> http://localhost:8080/mobile.html#/组件路由名称
>
> 现在已经支持文档内http://localhost:8080直接查看组件

### 单元测试

全局安装yarn

```shell
npm i -g yarn
```

修改package/varlet-vue2-ui/src/组件名/\__tests__/index.spec.js：

> props ➡ propsData（注意：全篇搜索替换要开大小写或用正则，因为setProps方法不需要替换！）unmount ➡ destroy
> slots ➡ scopedSlots（注意：参数的 属性值 直接修改为字符串即可）
> const app = createApp({}).use ➡ Vue.use
> app.component ➡ Vue.component
> 其它参考 button 组件的测试文件

修改后运行```yarn test -w -c 组件名```进行测试

```shell
yarn test -w -c 组件名
```

### 确认项目

- 组件 example  console无报错，效果和 vue3 版本一致,（注意测试暗黑模式、国际化功能
- 组件单元测试所有case 通过（有问题不要直接u，仔细对照确认代码✅
- .vue 文件中无空的style标签
- 组件文档内代码适配 Vue2
- package/varlet-vue2-ui/type中添加 `组件名.d.ts`
- 在 index.d.ts 中添加`export * from './组件名'`（这步前可以先同步一下代码：fetch然后pull）

fetch:

![](https://s3.bmp.ovh/imgs/2022/02/7d2d05c110e27597.png)

pull

###  提交项目

```shell
git add .
```

```shell
git commit -m "feat(ui/组件名): add component 组件名"
```

然后在这里发起PR：

![](https://s3.bmp.ovh/imgs/2022/02/1ba48d6ef815a723.png)

##### scope：修改了ui就写把scope替换为ui，如果改动的范围比较广或者你不知道该写什么的时候，就直接采取第一种写法！

##### Commit Summary：

一般写：

```shell
feat(ui/组件名): add component 组件名
```

- feat：新功能	
- fix：修复
- docs：文档
- style：格式（如格式化代码，调整了代码顺序，简化变量之类的操作）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动
- perf：性能优化
- test：单元测试

```shell
git push -u
```

