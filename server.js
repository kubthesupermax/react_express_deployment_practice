import express from "express";

const app = express();

app.use(express.static("dist"));

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
    res.send(users);
  }, 1000);
});

const port = 8080;
app.listen(port, () => console.log(` listening on port ${port}`));
