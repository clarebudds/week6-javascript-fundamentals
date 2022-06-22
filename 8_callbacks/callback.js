var users = ["Clare", "Bex", "Rachel"];

function addUser(username, callback) {
  setTimeout(function () {
    users.push(username);
    callback();
  }, 200);
}

function getUsers() {
  setTimeout(function () {
    console.log(users);
  }, 100);
}

addUser("Anita", getUsers);
