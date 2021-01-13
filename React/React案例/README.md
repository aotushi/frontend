```html
1.静态页面设置之前,需要重置css样式:reset.css
 1.1 github搜索reset, 推荐使用提交较小的minireset.css.
2.更改css样式:index.css
 1.2 更改antd-mobile样式,可能需要提高权重!import

3.手机号正则的获取 浏览器插件:FEhelp
4.跨域解决-服务器端: 
    //1.使用中间件cors
    import cors from 'cors';
    app.use(cors())
4.1 跨域解决-客户端:
	package中设置porxy或根目录下设置setProxy.js

5.state中codeTime和canClick相呼应,设置按钮失效和时间限制的思想

5.1 移动端disabled失效.

6.config文件夹的使用
  保存常量constant.js 
  保存正则reg.js   //正则生成工具 浏览器插件FEhelp
  保存路由route.js //用于专门统一管理路由

6.1 route.js
routes数组中存储着所有的路由配置,每个路由配置是一个对象
const routes=[
    {path:'/login', component:Login},
    {}
]

6.2 登录按钮的校验逻辑
6.3 获取验证码的校验逻辑

7.路由<Switch>中路由的简写形式 //jsx中批量传递
routes.map((routeObj)=>{ <Route key={routeObj.path} {...routeObj}/> })
                        
8.JSDOC注释
/**+回车

9.测试接口是否可用
 9.1使用axios.post发送请求
 9.2使用postman软件
 
10. 统一管理ajax请求
 - 发送请求,禁止在组件中立即使用axios.
 - 根目录下新建ajax文件夹,根据不同组件新建相关js文件.例如login.js verify.js
```

