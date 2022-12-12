// _mock.js
// 对应的rurl会被中间件拦截，并返回mock数据
//具体的实例可以看http://mockjs.com/examples.html#Number
// ANY localhost:9999/
Mock.mock('/', {
  data: [],
  msg: "hello mock",
  "code|1-4": 1,
});

// 登录mp
Mock.mock('/mp/v1_0/authorizations', 'POST', {
  message: "OK",
  data: {
    token: "eyJ0eXAi",
    refresh_token: "eyJ0eXAi",
    id: "19933333333",
    name: "19933333333",
    photo: "https://github.githubassets.com/images/modules/dashboard/onboarding/gh-desktop.png"
  }
});

// 发布文章mp
Mock.mock('/mp/v1_0/articles', 'POST', {
message: "OK",
data: {
  id: 123
}
});

// 登录mis
Mock.mock('/mis/v1_0/authorizations', 'POST', {
message: "OK",
data: {
  token: "eyJ0eXAi"
}
});

// 查询文章mis
Mock.mock('/mis/v1_0/articles', 'GET', {
message: "OK",
data: {
articles:[{
  article_id: 123,
  title: "x"
}]
}
});

// 审核文章mis
Mock.mock('/mis/v1_0/articles', 'PUT', {
message: "OK"
})

// 登录app
Mock.mock('/app/v1_0/authorizations', 'POST', {
message: "OK",
data: {
  token: "eyJ0eXAi"
}
});

// 查询频道文章app
Mock.mock('/app/v1_0/articles', 'GET', {
message: "OK",
data: {
results:[{
  article_id: 123,
  title: "x"
}]
}
});


// locust登录bms
Mock.mock('/bms/login', 'POST', {
  login: 1,
  code: 1000,
  message: "操作成功",
  data: "hello"
  });

// locust首页bms
Mock.mock('/bms/index', 'GET', {
  index: 1,
  data: [],
  msg: "hello index",
  "code|1-4": 1,
});

// locust获取用户信息bms
Mock.mock('/bms/profile', 'GET', {
  profile: 1,
  code: 1000,
  message: "操作成功",
  data: {
  age: 20,
  username: "test01",
  userId: "1"
  }
  });

// locust退出bms
Mock.mock('/bms/logout', 'POST', {
  logout: 1,
  code: 1000,
  message: "操作成功",
  data: "logout"
  });



// 扩展rtype，支持jsonp形式，使用param传入对应的回调名
// GET JSONP localhost:9999/test
Mock.mock('/test', {
  type: 'jsonp',
  param: 'callbackName'
},{
  code: 0,
  msg: 'hello from mock jsonp',
  data: {
      "id|1000-9999": 1,
  }
});

// 默认回调名称 callback
Mock.mock("/test2", "jsonp", {
  code: 0,
  msg: "hello from mock jsonp2",
  data: {
      "id|1000-9999": 1,
  }
});

// 默认回调名称 callback
Mock.mock("/test3", "jsonp", {
  code: 0,
  msg: "hello from mock jsonp2",
  data: {
      "object|2": {
"310000": "上海市",
    "320000": "江苏省",
    "330000": "浙江省",
    "340000": "安徽省"
        },
  }
});

// 默认回调名称 callback
Mock.mock("/test4", "jsonp", {
code: 0,
msg: "hello from mock jsonp2",
data: {
    "object|2": {
"310000": "上海市",
  "320000": "江苏省",
  "330000": "浙江省",
  "340000": "安徽省"
      },
}
});