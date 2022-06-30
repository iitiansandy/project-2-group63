const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const internSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
      validate: {
        validator: function(email){
          return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)
        }, message: 'Please enter a valid email address', isAsync: false
      }
    },

      mobile: {
        type: String,
        required: true,
        unique: true,
      },

    collegeId: { type: ObjectId, ref: "college", required: true, trim: true },


    isDeleted: { type: Boolean, default: false },  
  },
  { timestamps: true }
);

module.exports = mongoose.model('intern', internSchema)