import express from "express";
import router from "./routes/route.js";
import db from "./conf/dbConf.js";

const app = express();

db.authenticate()
     .then(() => {
          console.log("Database connected");
     })
     .catch((err) => {
          console.log("Error: " + err);
     });

const port = process.env.PORT || 8000;

app.set("view engine", "pug");

app.use((req, res, next) => {
     const year = new Date();
     res.locals.currentYear = year.getFullYear();
     res.locals.webName = "Travel Agency";
     next();
});

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", router);

app.listen(port, () => {
     console.log(`running on port ${port}`);
});
