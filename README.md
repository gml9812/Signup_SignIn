# Signup_SignIn
signup and signin implemented with javascript on server side(Node.js) and client side(vanilla)

# Start(~07-27)
https://github.com/woowa-techcamp-2020/market-6 
의 동작 방식을 이해했다. 
client에는 웹 페이지에서 사용될 js 파일이 존재하며, build 시 webpack를 이용해 server의 dist 폴더에 하나의 파일로 저장된다. 
server에는 api들과 웹 페이지에서 사용될 html(or pug), css, image 등이 존재한다. 

# 07-28
로그인 방식에 대한 고찰:
http는 기본적으로 connectionless, stateless하다. 때문에 사용자를 식별할 방법이 없어, 웹사이트에서 어떠한 동작을 실행할 때마다 로그인 인증을 다시 해야만 한다. 
session과 cookie 를 사용하면 이러한 문제를 해결할 수 있다(https://cjh5414.github.io/cookie-and-session/).
재인증 없이 로그인이 필요한 기능들을 쓸 수 있을 뿐만 아니라, 사이트를 닫았다 다시 들어가도 로그인이 유지된다. 
이 프로젝트에서는 session과 session cookie를 사용하여 로그인을 구현하고 있다. 
그런데 session 은 서버 자원을 사용해야 한다는 단점이 있다. 

이 문제를 해결하기 위해 사용할 수 있는 것이 JWT다
http://www.opennaru.com/opennaru-blog/jwt-json-web-token/




rest api
