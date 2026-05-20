const express = require("express");
const { add, subtract, multiply, divide } = require("./calc");

const app = express();
app.use(express.json());

app.post("/calc/:op", (req, res) => {
  const { a, b } = req.body;
  const ops = { add, subtract, multiply, divide };
  const fn = ops[req.params.op];
  if (!fn) return res.status(400).json({ error: "unknown op" });
  try {
    return res.json({ result: fn(Number(a), Number(b)) });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`backend on :${port}`));
}

module.exports = app;
