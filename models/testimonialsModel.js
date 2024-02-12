import Sequelize from "sequelize";
import db from "../conf/dbConf.js";

export const Testimonials = db.define("testimonials", {
     name: {
          type: Sequelize.STRING,
     },
     country: {
          type: Sequelize.STRING,
     },
     message: {
          type: Sequelize.STRING,
     },
});
