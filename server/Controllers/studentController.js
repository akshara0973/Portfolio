const User = require("../model/student");

exports.add = async (req, res) => {
  try {
    console.log(req.body);

    const {
      name,
      email,
      phone,
      address,
      course,
      c_year,
      section,
      school,
      stream,
      percentage,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !course ||
      !c_year ||
      !section ||
      !school ||
      !stream ||
      !percentage
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ error: "Phone number must be 10 digits" });
    }

    const existingStudent = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingStudent) {
      return res.status(400).json({
        error: "A student with this email or phone number already exists",
      });
    }

    const newStudent = new User({
      name,
      email,
      phone,
      address,
      course,
      c_year,
      section,
      school,
      stream,
      percentage,
    });
    await newStudent.save();

    res
      .status(201)
      .json({ message: "Student added successfully", user: newStudent });
  } catch (err) {
    console.error("Error adding student:", err);
    res
      .status(500)
      .json({ error: "Error inserting user", details: err.message });
  }
};
