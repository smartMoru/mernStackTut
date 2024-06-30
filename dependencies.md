

1. 项目部署

```sh
#backend
npm init -y
npm install express
npm install dotenv
npm install mongoose
npm install cors
npm install jsonwebtoken
npm install bcrypt

node server.js # 这样启动 每次更改都要重新ctrl-c
npm install --save-dev nodemon
npx nodemon
nodemon server.js # 这两种都可以 自动更新
npm run dev # 在package.json里面的scripts加"dev": "nodemon server.js" 然后直接启动也可以

npm install swagger-jsdoc swagger-ui-express #swagger-ui接口文档



# frontend
npx create-react-app frontend 
npm install react-router-dom
npm install date-fns #几天前的依赖
```



2. 要实现的功能
   1. user
      - 如果是假tutor 就直接delete用户
      - get user by username 
      - 注册 多一个name的字段
   2. tutor
      - Update个人信息
      - get student by id
      - get all student
      - manage group
   3. coordinator
      - 批准tutor
      - add student to group
      - 
   4. admin
      - 改变tutor和coord的role_type
      - 
   5. group
      - create a group
      - Update by id
      - update status
      - delete
      - Get a group
      - get All groups
      - 
   6. message数据库
      - create
      - get message





admin通过

