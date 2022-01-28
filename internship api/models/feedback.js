const mongoose = require('mongoose');

const fbackSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pname: {
      type: String,
      required: false,
    },
    fback: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feedback', fbackSchema);

// _id
// createdAt
// updatedAt

