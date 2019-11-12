const users = [];

// 새로운 user 추가
const addUser = ({ id, name, room }) => {
  console.log("server addUser", id, name, room)
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);
  let user = {}


  if (users.length > 0) {
    users.map(list => {
      if (list.room === room && list.name === name) {
        user = { id: list.id, name, room }

      } else {
        user = { id, name, room };
        users.push(user);

      }

    })
  } else {
    user = { id, name, room };
    users.push(user);
  }


  if (!name || !room) return { error: 'Username and room are required.' };


  //user = { id, name, room };

  //users.push(currentuser);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };