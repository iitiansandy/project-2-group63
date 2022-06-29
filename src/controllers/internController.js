const mongoose = require("mongoose");
const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")

// ....................................create Interns................................................................

const createInterns = async function (req, res) {
  try {
    let intern = req.body;
    
    let internCreated = await internModel.create(intern)
    return res.status(201).send({ data: internCreated })



  } catch (err) {
    console.log("This is the error:", err.message)
    res.status(500).send({ msg: "Error", error: err.message })

  }
}

/*........................................................Get College Details.......................................................................*/

const getCollegeDetails = async (req, res) => {

  try {

      // get college name from query params
      const collegeName = req.query.name
      const internDetail = internModel.interSchema
      const output = {}

      // find college data by using college name
      const collegeData = await collegeModel.findOne({ name: collegeName, isDeleted: false })

      const internsList = await internModel.find({ collegeId: collegeData.collegeName, isDeleted: false }).select({
          name: 1,
          email: 1,
          mobile: 1
      })

      output.name = collegeData.name
      output.fullName = collegeData.fullName
      output.logoLink = collegeData.logoLink
      output.interns = internsList

      return res.status(200).send({ status: true, data: output })

  }
  catch (err) {
      return res.status(500).send({ status: true, data: err.message })
  }
}

module.exports.createInterns = createInterns;
module.exports.getCollegeDetails = getCollegeDetails



