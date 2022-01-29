# vue_learn

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
#vue cli脚手架
需预先安装npm node

npm install -g @vue/cli-service-global  ---安装全局的扩展
vue create hello-world  ----创建一个新项目
vue ui  ---vue ui 命令以图形化界面创建和管理项目
npm run serve  ---cli服务

在一个 Vue CLI 项目中，@vue/cli-service 安装了一个名为 vue-cli-service 的命令
在 npm scripts 中以 vue-cli-service、或者从终端中以 ./node_modules/.bin/vue-cli-service 访问这个命令。

vue-cli-service serve 命令会启动一个开发服务器 (基于 webpack-dev-server) 并附带开箱即用的模块热重载 (Hot-Module-Replacement)。

vue-cli-service build 会在 dist/ 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 vendor chunk splitting。它的 chunk manifest 会内联在 HTML 里

#vuex 资料
https://www.jianshu.com/p/2e5973fe1223
https://zhuanlan.zhihu.com/p/24357762
https://vuex.vuejs.org/zh/guide/


查看webpack的所有版本  若vue脚手架中使用4版本的webpack一般安装6,7版本的less-loader
npm view webpack versions
<!-- 查看less-loader的所有版本 -->
npm view less-loader versions
<!-- 安装7指定版本的less-loader  -->
npm i less-loader@7
