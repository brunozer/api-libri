import express from "express";
import livroRoutes from "./src/routes/livroRoutes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", livroRoutes);

app.listen(3000, () => {
  console.log(`servidor rodando.`);
});
