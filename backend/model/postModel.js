const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a text value"],
    },
    subtitle: {
      type: String,
      required: [true, "Please add a text value"],
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model("Post", postSchema)
