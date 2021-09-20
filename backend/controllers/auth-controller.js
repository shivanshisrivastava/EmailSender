const DUMMY = [
  {
    id: 1,
    name: "Shivanshi",
    email: "test1626@test.com",
    password: "test",
  },
  {
    id: 2,
    name: "Simmi",
    email: "test16@test.com",
    password: "test1",
  },
  {
    id: 3,
    name: "Riddhi",
    email: "test22@test.com",
    password: "test22",
  }
];

const login = (req, res) => {
 console.log(req.body);
//   const { email, password } = req.body;
//   const isValidUser = DUMMY.find(user => user.email === email )

//   if(!isValidUser && user.password !== password)
//   {
//       console.log('Incorrect Username/Password!');
//   }
//   res.json({message:'Logged In!'});
res.json(req.body);
};

const signUp = (req, res, next) => {};

exports.login = login;
