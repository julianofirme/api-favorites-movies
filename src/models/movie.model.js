const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    movie_name: String,
    movie_description: String,
    movie_review: String,
    movie_rating: Number,
  },
  {
    timestamps: true,
  }
);

const moviesDatabase = mongoose.model("movies-database", DataSchema);
module.exports = moviesDatabase;
