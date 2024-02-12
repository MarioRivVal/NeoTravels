import { Testimonials } from "../models/testimonialsModel.js";

const saveTestimonial = async (req, res) => {
     const { name, country, message } = req.body;

     let alert;

     if (name.trim() === "" || country.trim() === "" || message.trim() === "") {
          alert = "All fields are required";

          const testimonials = await Testimonials.findAll();

          res.render("testimonials", {
               pagina: "testimonials",
               name,
               country,
               message,
               alert,
               testimonials,
          });
     } else {
          try {
               await Testimonials.create({
                    name,
                    country,
                    message,
               });
               res.redirect("/testimonials");
          } catch (err) {
               console.error(err);
          }
     }
};

export { saveTestimonial };
