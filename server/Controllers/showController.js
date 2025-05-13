const User = require("../model/student");

const BBA = async (req, res) => {
  try {
    const students = await User.find({ course: "BBA" });

    // console.log("Students in MCA course:", students);

    if (students.length === 0) {
      return res
        .status(404)
        .json({ message: "No students found with course BBA" });
    }

    res.status(201).json(students);
  } catch (error) {
    console.error("Error fetching BBA students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const BCA = async (req, res) => {
  try {
    const students = await User.find({ course: "BCA" });

    // console.log("Students in BCA course:", students);

    if (students.length === 0) {
      return res
        .status(404)
        .json({ message: "No students found with couse BCA" });
    }

    res.status(201).json(students);
  } catch (error) {
    console.error("Error fetching BCA students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const MBA = async (req, res) => {
  try {
    const students = await User.find({ course: "MBA" });

    // console.log("Students in MCA course:", students);

    if (students.length === 0) {
      return res
        .status(404)
        .json({ message: "No students found with course MBA" });
    }

    res.status(201).json(students);
  } catch (error) {
    console.error("Error fetching MBA students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const MCA = async (req, res) => {
  try {
    const students = await User.find({ course: "MCA" });

    // console.log("Students in MCA course:", students);

    if (students.length === 0) {
      return res
        .status(404)
        .json({ message: "No students found with course MCA" });
    }

    res.status(201).json(students);
  } catch (error) {
    console.error("Error fetching MCA students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { MCA, MBA, BBA, BCA };
