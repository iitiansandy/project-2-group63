// const jwt = require("jsonwebtoken")
const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")

// .................................................................Authentication........................................................................

const mid1 = async function(req, res, next){
  let intern = req.body
  let internName = req.body.name;
  if(internName.trim().length == 0) return res.status(404).send({status: false, msg: 'Intern name input is required'})

  let internMobile = req.body.mobile;
  if(internMobile.trim().length == 0) return res.status(404).send({status: false, msg: 'Intern mobile input is required'})

  let internEmail = req.body.email;
  if(internEmail.trim().length == 0) return res.status(404).send({status: false, msg: 'Intern  input is required'})

    if (!intern.name) return res.status(400).send({ msg: "name is required" })
    // if (!intern.email) return res.status(400).send({ msg: "email is required" })
    if (!intern.mobile) return res.status(400).send({ msg: "mobile is required" })
    // if (!intern.collegeId) return res.status(404).send({ msg: collegeId })
    next();
}

const mid2 = async function(req, res, next){
  let college = req.body
  let collegeName = req.body.name
  if(collegeName.trim().length == 0) return res.status(404).send({status: false, msg: 'College name input is required'})

  let fullName = req.body.fullName
  if(fullName.trim().length == 0) return res.status(404).send({status: false, msg: 'Full name input is required'})

  let logoLink = req.body.logoLink
  if(logoLink.trim().length == 0) return res.status(404).send({status: false, msg: 'Logo link input is required'})

    if (!college.name) return res.status(400).send({ msg: "College name is required" })
    // if (!intern.email) return res.status(400).send({ msg: "email is required" })
    if (!college.fullName) return res.status(400).send({ msg: "College full name is required" })
    if (!college.logoLink) return res.status(404).send({ msg: " Logo link is required" })
    

    next();
}

const mid3 = async function (req, res, next){
  const collegeName = req.query.name
      if (!collegeName || collegeName.trim() == "") {
          return res.status(400).send({ status: false, msg: "College name is missing" })
      }
  const collegeData = await collegeModel.findOne({ name: collegeName, isDeleted: false })

      if (!collegeData) {
          return res.status(404).send({ status: false, msg: `College name '${collegeName}' doesn't exist!` })
      }
next()
}


module.exports = { mid1, mid2, mid3 }
// 