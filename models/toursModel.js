import Sequelize from "sequelize";
import db from "../conf/dbConf.js";

export const Tour = db.define("tours", {
     score: {
          type: Sequelize.FLOAT,
     },
     city: {
          type: Sequelize.STRING,
     },
     country: {
          type: Sequelize.STRING,
     },
     price: {
          type: Sequelize.INTEGER,
     },
     days: {
          type: Sequelize.INTEGER,
     },
     img: {
          type: Sequelize.STRING,
     },
     description: {
          type: Sequelize.STRING,
     },
     slug: {
          type: Sequelize.STRING,
     },
});
