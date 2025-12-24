import express from "express";

const app = express();

app.use(express.static("dist"));
app.use(express.json());

const users = [
  { id: 1, name: "John Doe", age: 32 },
  { id: 2, name: "Jane Doe", age: 30 },
  { id: 3, name: "Bob Smith", age: 28 },
];

// get a list of all users
app.get("/api/users", (req, res) => {
  if (req.query.search) {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(req.query.search.toLowerCase()) ||
        user.age.toString() === req.query.search
    );

    res.send(filteredUsers);
    return;
  }
  setTimeout(() => {
    res.send([...users].reverse());
  }, 1000);
});

app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.send(newUser);
});

const port = 8080;
app.listen(port, () => console.log(` listening on port ${port}`));
