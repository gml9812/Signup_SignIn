import express from 'express'
import appRoot from 'app-root-path'
import { routers } from './routers'
import session from 'express-session'

const app = express()
const PORT = 10100

app.set('trust proxy', 1) // trust first proxy
//session
app.use(
  session({
    secret: 'hamingod',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24000 * 60 * 60 },
  })
)

// Serve static files at `public` directory
app.use(express.static(appRoot.resolve('/src/public')))

app.use(routers)

app.use(function (req, res, next) {
    res.status(404).sendFile(appRoot.resolve('/src/views-html/404.html'))
})

export { app, PORT }




//public은 html에서 사용될 정적 파일(css와 js, 아이콘과 폰트 등) 을 가져온다. 
//routers는 get을 받아 html로 구성된 signin, signup 페이지를 사용하도록 한다. 

//404 추가
//session 추가, session이 유지되는 사이에는 웹페이지 나갔다 돌아와도 로그인 유지된다. **************



//####### routers의 session, TEST는 미구현