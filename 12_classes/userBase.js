class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count(users) {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => {
      return user.name;
    });
  }

  getIntroductions() {
    return this.users.map((user) => {
      return user.getIntroduction();
    });
  }
}

const users = [new User("Uma"), new User("Josh"), new User("Ollie")];

const userBase = new UserBase(users);

userBase.count();
userBase.getNames();
userBase.getIntroductions();
