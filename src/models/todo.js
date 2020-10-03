const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  tasks: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
    },
  ],
});

module.exports = Todo;
