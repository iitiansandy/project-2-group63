const collegeModel = require("../models/collegeModel")

/*----------------------------------------Validation For InternModel-------------------------------------- */

const mid1 = async function (req, res, next) {
  let intern = req.body
  if (!intern.collegeId) return res.status(400).send({ status: false, msg: "Enter College Id" })

  //Validation For InternName

  let internName = req.body.name;
  let validateInternName = /^([a-zA-Z ]){2,30}$/
  if (!validateInternName.test(internName)) return res.status(404).send({ status: false, msg: 'Name Must be charactor' })
  if (!internName) return res.status(404).send({ status: false, msg: 'Intern name input is required' })

  //Validation For Mobile

  let internMobile = req.body.mobile;
  let validateInternMobile = /^\d{10}$/
  if (!validateInternMobile.test(internMobile)) return res.status(404).send({ status: false, msg: 'Input Must be in Number and must contain 10 Digit' })
  if (!internMobile) return res.status(404).send({ status: false, msg: 'Intern mobile input is required' })

  //Validation For Email   
    
  let internEmail = req.body.email;
  if (!internEmail) return res.status(404).send({ status: false, msg: 'Email input is required' })
  if (!intern.name) return res.status(400).send({ msg: "name is required" })
  if (!intern.mobile) return res.status(400).send({ msg: "mobile is required" })
  next();
}


/*----------------------------------------Validation For CollegeModel-------------------------------------- */

const mid2 = async function (req, res, next) {
  let college = req.body
  
  //Validation For anabbreviated college name

  let collegeName = req.body.name
  
  if (!collegeName) return res.status(400).send({ status: false, msg: 'College name input is required' })
  
  let validateCollegeName = /^([a-zA-Z ]){2,40}$/
  if (!validateCollegeName.test(collegeName)) return res.status(404).send({ status: false, msg: 'Name Must be charactor' })

  //Validation For College Full Name

  let fullName = req.body.fullName
  if (!fullName) return res.status(400).send({ status: false, msg: 'Full name input is required' })
  let validateCollFullName = /^([a-zA-Z ]){2,60}$/
  if (!validateCollFullName.test(fullName)) return res.status(404).send({ status: false, msg: 'FullName Must be charactor' })


  //Validation For College logoLink   

  let logoLink = req.body.logoLink
  if (!logoLink) return res.status(400).send({ status: false, msg: 'Logo link input is required' })

  if (!college.name) return res.status(404).send({ msg: "College name is required" })
  if (!college.fullName) return res.status(404).send({ msg: "College full name is required" })
  if (!college.logoLink) return res.status(404).send({ msg: " Logo link is required" })

        
  next();        
}  

/*----------------------------------------Validation For CollegeDetails-------------------------------------- */

const mid3 = async function (req, res, next) {
  const collegeName = req.query.name
  if (!collegeName || collegeName.trim() == "") {
    return res.status(400).send({ status: false, msg: "Anabbreviated College Name is missing" })
  }
  const collegeData = await collegeModel.findOne({ name: collegeName, isDeleted: false })

  if (!collegeData) {
    return res.status(404).send({ status: false, msg: `College name '${collegeName}' doesn't exist!` })
  }
  next()
}


module.exports = { mid1, mid2, mid3 }