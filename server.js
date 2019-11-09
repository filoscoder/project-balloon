const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');
const app = express();

// 세션 사용
app.use(session({
  secret: 'balloon',
  resave: false,
  saveUninitialized: true
}))

const cors = require('cors');
const corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));

// 세션 초기 설정
// app.post('/', function (req, res) {
//   sess = req.session;
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mysqlConnection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'balloon',
    password: 'balloon',
    database: 'balloonDB'

  }
);

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('DB connetion succeeded');
  } else {
    console.log('failed:', JSON.stringify(err, undefined, 2))
  }
})



//참고용 추후 지우거나 수정할 것
app.get('/members', (req, res) => {
  mysqlConnection.query('SELECT * FROM members', (err, rows, fields) => {
    if (!err) {
      console.log(rows)

      let members = rows
      let newState = [1, 2];
      let memberList = {};

      members.map(member => {
        memberList = {
          title: member.name,
          id: member.id,
          cards: [
            {
              id: `card-${member.id}`,
              birthday: member.birthday
            }
          ]
        }
        newState.push(memberList)

      })


      res.json(newState)
      console.log(newState)

    }
    else
      console.log(err)
  })
})

//DB에서 회원id가 포함된 Project List 가져오기
app.get('/projectList/:memberid', (req, res) => {
  mysqlConnection.query(`SELECT distinct 
  pm.project_id as id, p.name as name , p.image_id  as image
  from project_members as pm 
  JOIN projects as p
  on pm.project_id = p.id
  where pm.member_id = ?;`
    , [req.params.memberid], (err, rows, fields) => {

      if (!err) {
        const projects = rows
        let projectList = []


        projects.map(project => {
          projectList.push(
            { project_id: project.id, project_name: project.name, project_image: project.image })
        })

        res.json(projectList)
        console.log(projectList)

      }
    })

})


// DB 에서 kanbanList 가져오기. 
app.get('/kanbanList/:project_id', (req, res) => {
  mysqlConnection.query('SELECT * FROM kanbancards where project_id=?', [req.params.project_id], (err, rows, fields) => {
    if (!err) {
      let kanbans = rows
      let kanbanList = []
      let listID = 0
      let category = []

      // 가져온 kanbanList 원하는 JSon으로 재구성
      kanbans.map((kanban, index) => {
        // console.log(kanban)
        if (kanbanList.length === 0) {
          // console.log(index, "=>0일때 수행")
          kanbanList.push({
            category: kanban.category,
            id: `list-${listID}`,
            cards: [{
              title: kanban.title,
              id: `card-${kanban.id}`,
              content: kanban.content
            }]
          })
          listID += 1

          category.push(kanban.category)
        } else if (kanbanList.length !== 0) {

          for (const element of kanbanList) {
            //console.log(element)
            //새로운 Category인 경우, List 추가.
            if (!(category.includes(kanban.category))) {
              category.push(kanban.category)

              //console.log(index, "=>", element.category, kanban.ctegory, "=>새로운 category")
              kanbanList.push({
                category: kanban.category,
                id: `list-${listID}`,
                cards: [{
                  title: kanban.title,
                  id: `card-${kanban.id}`,
                  content: kanban.content
                }]
              })
              listID += 1
              break;
              // 기존 Category 하위 카드 cards에 card 추가하기.
            } else if ((category.includes(kanban.category)) && (element.category === kanban.category)) {
              //console.log(index, "=>같다 수행")
              element.cards.push({
                title: kanban.title,
                id: `card-${kanban.id}`,
                content: kanban.content
              })
            }


          }
          //console.log(category)
        }



      })
      res.json(kanbanList)
      // console.log(kanbanList)
    } else
      console.log(err)




  })

})

// 새로운 project 생성하기.
app.post("/newProject", (req, res) => {
  const body = req.body
  console.log("server newProject==> body", body)
  mysqlConnection.query("insert into projects(id,name,type,image_id) values (?,?,?,1) ", [body.id, body.name, body.type], (err, result) => {
    if (!err) {
      console.log("projects 입력 성공")
      //res.redirect('/')
    } else {
      console.log(err)
    }
  })
  mysqlConnection.query(" insert into project_members (member_id,project_id) values (1,?) ", [body.id], (err, result) => {
    if (!err) {
      console.log("project_members 입력 성공")
      //res.redirect('/')
    } else {
      console.log(err)
    }
  })




})

// 새로운 card 입력하기
app.post('/newCard', (req, res) => {
  const body = req.body
  console.log("server newCard==> body", body)
  mysqlConnection.query("insert into kanbancards(category, content, project_id) values (?,?,?)", [body.category, body.content, body.project_id], (err, result) => {
    if (!err) {
      console.log("new card 입력 성공")
      //res.redirect('/')
    } else {
      console.log(err)
    }
  })
})


// 회원가입
app.post('/customers', (req, res) => {
  const body = req.body

  mysqlConnection.query("insert into members(email, password, name) values (?, ?, ?)", [body.email, body.password, body.name], (err, result) => {
    if (!err) {
      console.log('회원가입성공')
    } else {
      console.log(err)
    }
  })
})

// 로그인
app.post('/login', (req, res) => {
  const body = req.body
  // 세션 사용
  sess = req.session;
  // 입력한 email이 DB의 members 테이블 있나 확인
  mysqlConnection.query("SELECT * FROM members WHERE email=?", [body.email], (err, rows, fields) => {

    if (!err) {
      let members = rows[0]

      // 고객정보가 있으면
      if (members) {

        // 고객정보 password와 입력한 password를 확인
        if (members.password === body.password) {
          console.log('로그인성공')

          // email 세션 저장
          sess.email = body.email;
          sess.save(() => {
            console.log("로그인", sess)
          })
          res.json(sess)



        } else {
          console.log('비밀번호가 일치하지 않습니다')

        }

      } else {
        console.log('회원이 아닙니다')
      }

    } else {
      console.log(err)
    }
  })


})

// 로그인 세션 확인
app.get('/comfirmSession', (req, res) => {
  sess = req.session;
  console.log("/comfirmSession=>", sess)
  res.json(sess)
})

// 로그 아웃
// app.post('/logout', (req, res) => {
//   sess = req.session;
//   if (sess.email) {
//     req.session.destroy(function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.redirect('/');
//       }
//     })
//   } else {
//     res.redirect('/');
//   }
// })
//});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);