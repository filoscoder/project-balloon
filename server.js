const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());

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

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);

});


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

// DB 에서 kanbanList 가져오기. 
app.get('/kanbanList', (req, res) => {
  mysqlConnection.query('SELECT * FROM kanbancards where project_id=?', [1], (err, rows, fields) => {
    if (!err) {
      let kanbans = rows
      let kanbanList = []
      let listID = 0
      let category = []

      // 가져온 kanbanList 원하는 JSon으로 재구성
      kanbans.map((kanban, index) => {
        // console.log(kanban)
        if (kanbanList.length === 0) {
          console.log(index, "=>0일때 수행")
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

              console.log(index, "=>", element.category, kanban.ctegory, "=>새로운 category")
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
      console.log(kanbanList)
    } else
      console.log(err)




  })

})


//});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);