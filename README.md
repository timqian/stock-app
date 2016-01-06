## steps to launch the App

1. 开启 mongodb: `mongod --dbpath ./data/db4`
2. 开启 rest server: `node serverLocalMongo2.js` (for remote: `node serverRemoteMongo.js`)
3. 开启 webpack server: `webpack-dev-server --progress --colors`
4. 打开网址: `http://localhost:8080/webpack-dev-server/`

## TODOs:

- [x] 设计 flipButton componet, 在此过程中 体会 react component 中 css 的最佳写法;
经验：需要 hover 什么的，或者库比较大 动态注入 style tag； link tag

- 用 props 来控制 style 来决定显示方式
  - [x] BigMoneys 中的表选择: 没有用state， 而是用了获取checkbox 的checked 属性用来设置图表显示
  - [ ] 正在加载图形
  - [ ] OneStock 中的 TreeView focus

- [ ] 用来表组件来呈现表, 而不是像现在这样!

- [x] (性能)应用中包含了 timeline3; chart.js; 可能还会用到其他的库.
如果用户一打开网页就加载所有库, 网站打开应该会很慢, 是否可以按照不同 route 来加载不同的库呢, **yes** 使用webpack 的 `getComponent`, `require.ensure`
react-router lazy loading(example): https://github.com/rackt/react-router/blob/master/examples/auth-with-shared-root/config/routes.js
参考: https://webpack.github.io/docs/code-splitting.html

- [ ] 为`express-restify-mongoose`增加用户验证

- [ ] 加 tag 功能

- [ ] 改进 action 方式：

  现在的方式(使用thunkMiddleware)：
    1. component dispatch fetch某某 event
    2. fetch某某 event 完成之后 dispatch receive某某 event
    3. reducer 监听 receive某某 event

  更好的方式?：
    - [ ] redux 的 promise 插件？ search and think！


- [ ] 用户中心
  - [ ] log in:
  - [ ] log out:
  - [ ] sign up 流程：

    1. [ ] 用户提交注册信息（mail ＋ pwd）
    2. [ ] 服务器收到信息， 给用户发送验证信息
    3. [ ] 用户点击验证信息， 完成注册

  - [ ] mongodb 设计：??


## Problems:

- [x] 使用 Link 改变 route 时, 把信息加在 URL 中, 然后跳到那个页面时, 获取 URL 中 params 来改变 state.
因为用户可能直接通过 URL 来访问某个页面, 像现在这种处理方式, 无法做到这一点!!!

- [ ] 为componet写 style 的模式那种好?
  - [ ] 写一个函数, 判断关于该 class 的 css 是否已经加载<style> 中, 如果没有, 就注入 [example:](https://github.com/mzabriskie/react-flipcard/blob/master/lib/helpers/injectStyle.js), 使用该函数: https://github.com/mzabriskie/react-flipcard/blob/master/lib/components/FlipCard.js


## What we are doing?

每个人都拥有从经济增长中获利的机会
