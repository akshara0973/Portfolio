const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    course: {
      type: String,
      required: true,
      trim: true,
    },
    c_year: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    stream: {
      type: String,
      required: true,
    },
    percentage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Portfolio", studentSchema); //collection name
module.exports = User;
