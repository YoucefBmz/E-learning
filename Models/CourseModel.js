const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
    former: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    video: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Courses", schema);
/**

    title:
    userId: 
    category: 
    description: 
    price: 

 */
