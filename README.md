# learning egg

## 建议使用国内淘宝镜像

```bash

# 配置命令

npm config set registry https://registry.npm.taobao.org

# 配置后可通过下面方式来验证是否成功

npm config get registry  或者 npm info express

```

## 运行项目

```bash

npm i

npm run dev

```

## 目录结果

```javascript

├── app
│   ├── controller
│   │   └── home.js
│   └── router.js
├── config
│   └── config.default.js
└── package.json

```
