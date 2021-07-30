const express = require('express')
const routes = express.Router()

const Movie = require('./controllers/movies.controller')


routes.get('/', Movie.index)


routes.post('/movie/add', Movie.create)
routes.get('/movie/list', Movie.index)
routes.get('/movie/details/:_id', Movie.details)
routes.delete('/movie/delete/:_id', Movie.delete)
routes.put('/movie/update/', Movie.update)


module.exports = routes
