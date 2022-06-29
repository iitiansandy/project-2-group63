const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const collegeName = mongoose.Schema.Types.String;
const internSchema = new mongoose.Schema(
  {
    name: { type: String, required: 'Intern name is required', trim: true },

    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: 'Email is required',
      validate: {
        validator: function(email){
          return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)
        }, message: 'Please enter a valid email address', isAsync: false
      }
    },

      mobile: {
        type: String,
        required: "Mobile number is required",
        unique: true,
      },

    collegeId: { type: ObjectId, ref: "college", trim: true },

    collegeName: { type: collegeName, ref: "college", trim: true },

    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('intern', internSchema)