const express = require('express') // 나는 epxress라는 모듈을 가져와서 express 변수에 할당하겠어.
const app = express() // 나는 할당 된 express 변수를 함수처럼 실행하여 app 객체를 만들겠어
const port = 8001 // 음 내 웹 서버의 포트 번호는 8001이야
const route = require('./backend/routes/index');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');


app.use('/apis', route);

app.use('/dist', express.static( __dirname + '/dist'));
//app.get('/', (req, res) => res.send('Hello World!'))
//app.get('/', (req, res) => res.render('index', { keyList: [0,1,2,3,4,5] } ));
app.get('/', (req, res) => res.render('index.html'));
// 만들어진 app 객체에 있는 get 메소드 이용하여 먼진 모르지만 res.send로 Hello world를 하겠어

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//app 객체는 port(8001)을 들을꺼야 그리고 text를 찍을꺼다