const Movie = require("../models/movie.model");

module.exports = {
  async index(req, res) {
    const movie = await Movie.find();
    res.json(movie);
  },

  async create(req, res) {
    const { movie_name, movie_description, movie_review, movie_rating } =
      req.body;

    let data = {};
    let movie = await Movie.findOne({ movie_name });

    if (movie) {
      return res.status(500).json({ error: "This movie has been added." });
    }

    data = { movie_name, movie_description, movie_review, movie_rating };

    if (movie_rating > 10 || movie_rating < 0) {
      return res
        .status(500)
        .json({ error: "Invalid rate, the rate need a value from 0 to 10." });
    }
    movie = await Movie.create(data);
    return res.status(200).json(movie);
  },
  async details(req, res) {
    const { _id } = req.params;
    const movie = await Movie.findOne({ _id });
    res.json(movie);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const movie = await Movie.findByIdAndDelete({ _id });
    return res.json({ msg: movie.movie_name + " was deleted" });
  },
  async update(req, res) {
    const { _id, movie_name, movie_description, movie_review, movie_rating } =
      req.body;
    const data = { movie_name, movie_description, movie_review, movie_rating };

    const movie = await Movie.findByIdAndUpdate({ _id }, data, { new: true });

    res.json(movie);
  },
};
