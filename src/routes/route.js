const express = require('express');
const router = express.Router();
const validation = require("../validation/validation")

const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")


router.post("/functionup/colleges", validation.mid2, collegeController.createCollege);

router.post("/functionup/interns", validation.mid1, internController.createInterns);

router.get("/functionup/collegeDetails", internController.getCollegeDetails)

// router.get("/blogs", mid1, blogController.getBlog)

// router.put("/blogs/:blogId", mid1, mid2, blogController.updatedBlog)

// router.delete("/blogs/:blogId", mid1, mid2,blogController.deletedBlog)

// router.delete("/blogs", mid1, blogController.deletebyquery)

module.exports = router;