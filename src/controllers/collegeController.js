// const jwt = require("jsonwebtoken");
const collegeModel = require("../models/collegeModel")




//.....................................................................create Author...............................................

const createCollege = async function (req, res) {

    let college = req.body;
    let collegeCreated = await collegeModel.create(college);
    res.status(201).send({ data: collegeCreated });

};

module.exports.createCollege = createCollege
