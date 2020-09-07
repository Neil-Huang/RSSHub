# 启动和文档

rsshub 包含 两个服务，分别是rss订阅服务和doc服务

## rss订阅服务

### 安装

首先是下载 `RSSHub` 的源码

```bash
$ git clone https://github.com/DIYgod/RSSHub.git
$ cd RSSHub
```

下载完成后，需要安装依赖

使用 `npm`

```bash
$ npm install
```

或 `yarn`

```bash
$ yarn
```

由于众所周知的原因，在中国使用 `npm` 下载依赖十分缓慢，建议挂一个代理或者考虑使用 [NPM 镜像](https://npm.taobao.org/)

然后在 `RSSHub` 文件夹中运行下面的命令就可以启动

```bash
$ npm start
```

或

```bash
$ yarn start
```

或使用 [PM2](https://pm2.io/doc/zh/runtime/quick-start/)

```bash
$ pm2 start lib/index.js --name rsshub
```

在浏览器中打开 [http://127.0.0.1:1200/](http://127.0.0.1:1200/)，enjoy it! ✅

## doc服务
使用vuepress构建的

```bash
$ npm run docs:dev
```

在浏览器中打开 [http://127.0.0.1:8082/](http://127.0.0.1:8082/)，enjoy it!