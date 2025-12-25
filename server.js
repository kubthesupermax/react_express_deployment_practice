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

app.delete("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const index = users.findIndex((user) => user.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.status(200).json({ message: "User deleted", id: userId });
});

app.put("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const { name, age } = req.body;

  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update only what was sent
  if (name !== undefined) user.name = name;
  if (age !== undefined) user.age = age;

  res.json({ message: "User updated", user });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server running on port", port);
});
