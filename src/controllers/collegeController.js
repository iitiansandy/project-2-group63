const collegeModel = require("../models/collegeModel")


//.....................................................................create College...............................................

const createCollege = async function (req, res) {

try{
    let college = req.body;
    let collegeCreated = await collegeModel.create(college);
    res.status(201).send({ data: collegeCreated });
    
}catch(error){
    console.log(error);
    return res.status(500).send({status:false, Msg:"Server Error: " + error.message})
}

};

module.exports.createCollege = createCollege;
