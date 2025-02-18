# 部署说明与todo list

## TODO LIST

- 爬公众号文章
  - https://wemp.app/accounts/d1db9356-e8be-4e6a-a969-7d272a6840f8?utm_source=similar-accounts
  

## 启动和文档

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

## 提交新的 RSS 内容

- 1.  在 [/lib/router.js](https://github.com/DIYgod/RSSHub/blob/master/lib/router.js) 里添加路由

- 2.  在 [/lib/routes/](https://github.com/DIYgod/RSSHub/tree/master/lib/routes) 中的路由对应路径添加获取 RSS 内容的脚本

- 3.  更新文档: [/docs/README.md](https://github.com/DIYgod/RSSHub/blob/master/docs/README.md)