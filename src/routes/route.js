const express = require('express');
const router = express.Router();
const validation = require("../validation/validation")
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")



/*-------------------------------API To Create College------------------------ */
router.post("/functionup/colleges", validation.mid2, collegeController.createCollege);

/*-------------------------------API To Create Intern------------------------ */
router.post("/functionup/interns", validation.mid1, internController.createInterns);

/*-------------------------------API To Get Intern Detail With Perticular College------------------------ */
router.get("/functionup/collegeDetails", validation.mid3, internController.getCollegeDetails)

module.exports = router;