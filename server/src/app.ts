import express from 'express'
import appRoot from 'app-root-path'
import { routers } from './routers'


const app = express()
const PORT = 10100


// Serve static files at `public` directory
app.use(express.static(appRoot.resolve('/src/public')))

app.use(routers)

export { app, PORT }






//public은 html에서 사용될 정적 파일(css와 js, 아이콘과 폰트 등) 을 가져온다. 
//routers는 get을 받아 html로 구성된 signin, signup 페이지를 사용하도록 한다. 











//####### routers의 session, TEST는 미구현