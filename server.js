import express from "express";

const app = express();

app.use(express.static("dist"));

// get a list of all users
app.get("/api/users", (req, res) => {
  setTimeout(() => {
    res.send([
      { id: 1, name: "John Doe", age: 32 },
      { id: 2, name: "Jane Doe", age: 30 },
      { id: 3, name: "Bob Smith", age: 28 },
    ]);
  }, 1000);
});

const port = 8080;
app.listen(port, () => console.log(` listening on port ${port}`));
