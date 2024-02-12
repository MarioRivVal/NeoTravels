import { Tour } from "../models/toursModel.js";
import { Testimonials } from "../models/testimonialsModel.js";

const homePage = async (req, res) => {
     const promisesDB = [
          Tour.findAll({
               limit: 3,
               order: [["score", "DESC"]],
          }),
          Testimonials.findAll({ limit: 3 }),
     ];

     const result = await Promise.all(promisesDB);

     try {
          res.render("home", {
               page: "Home",
               tours: result[0],
               testimonials: result[1],
          });
     } catch (err) {
          console.error(err);
     }
};

const toursPage = async (req, res) => {
     try {
          const tours = await Tour.findAll();

          res.render("tours", {
               page: "All Tours",
               tours,
          });
     } catch (err) {
          console.error(err);
     }
};

const aboutPage = (req, res) => {
     res.render("about", {
          page: "About Us",
     });
};

const testimonialsPage = async (req, res) => {
     try {
          const testimonials = await Testimonials.findAll();

          res.render("testimonials", {
               page: "Testimonials",
               testimonials,
          });
     } catch (err) {
          console.error(err);
     }
};

const TourDetailsPage = async (req, res) => {
     try {
          const { slug } = req.params;

          const tour = await Tour.findOne({ where: { slug } });

          console.log(slug);
          res.render("tour", {
               page: "Tour Details",
               tour,
          });
     } catch (err) {
          console.error(err);
     }
};
export { homePage, toursPage, aboutPage, testimonialsPage, TourDetailsPage };
