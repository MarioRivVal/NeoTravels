import express from "express";
import {
     homePage,
     toursPage,
     aboutPage,
     testimonialsPage,
     TourDetailsPage,
} from "../controllers/pageController.js";
import { saveTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", homePage);
router.get("/about", aboutPage);
router.get("/tours", toursPage);
router.get("/tours/:slug", TourDetailsPage);
router.get("/testimonials", testimonialsPage);
router.post("/testimonials", saveTestimonial);

export default router;
