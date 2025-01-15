const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


  // añadir usuario
  test('verificar user, add user to userController', () => {
    let user = new User(2435,"Andre", "andres@generation.org");
    // let user = new User(1234,"Santiago", "santiago@generation.org");

    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  });

// eliminar usuario
  test('verificar user, remove user to userController', () => {
    let user = new User(2435,"Andres", "andres@generation.org");
    // let user = new User(9689,"María", "maria@generation.org");

    expect(userController.getUsers()).not.toContain(user);
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);    // preguntar  esta parte

  });

 // Encontrar usuario por email



test('Find user byEmail from  userController', () => {
  let user = new User(9689,"María", "maria@generation.org");
  userController.add(user);
  expect(userController.findByEmail("maria@generation.org")).toEqual(user);
});

test('Find user byEmail from  userController', () => {
  let user = new User(9689,"Sofía", "sofia@generation.org");
  userController.add(user);
  expect(userController.findByEmail("sofia@generation.org")).toEqual(user);
});


// Encontrar usuario por id

test('Find user byId from  userController', () => {
  let user = new User(7898,"Carlos", "carlos@generation.org");
  userController.add(user);
  expect(userController.findById(7898)).toEqual(user);
});

test('Find user byId from  userController', () => {
  let user = new User(8123,"Alberto", "alberto@generation.org");
  userController.add(user);
  expect(userController.findById(8123)).toEqual(user);
});





