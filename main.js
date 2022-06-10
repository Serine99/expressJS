import express from "express";
const app = express();
//console.log(app);
const port = 8000;

app.use(express.static("front"));
app.get("/hello", (req, res) => {
  res.send("hello");
});

// app.post("/post", (req, res) => {
//   res.send("Got a POST request");
// });

// app.put("/user", (req, res) => {
//   res.send("Got a PUT request at /user");
// });

// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
