const db = require('../config/mongo_client');
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({

    color: {
        type: String,
    },
    director_name: {
        type: String,
        required: true,
    },
    num_critic_for_reviews: {
        type: Integer,
        required: true
    },
    duration: {
        type: Integer,
        required: true
    },
    director_facebook_likes: {
        type: Integer,

    },
    actor_3_facebook_likes: {
        type: String,

    },
    actor_2_name: {
        type: String,

    },
    actor_1_facebook_likes: {
        type: Integer,

    },
    gross: {
        type: String,
        required: true,
    },
    genres: {
        type: String,
        required: true
    },
    actor_1_name: {
        type: String,
        required: true,
    },
    movie_title: {
        type: String,
        required: true,
    },
    num_voted_users: {
        type: Integer,
        required: true,
    },
    cast_total_facebook_likes: {
        type: String,
        required: true,
    },
    actor_3_name: {
        type: String,
    },
    facenumber_in_poster: {
        type: String,

    },
    plot_keywords: {
        type: String,
    },
    movie_imdb_link: {
        type: URL,
        required: true,
    },
    num_user_for_reviews: {
        type: String,
    },
    language: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    content_rating: {
        type: String,
        required: true,
    },
    budget: {
        type: Integer,
        required: true
    },
    title_year: {
        type: Integer,
        required: true,
    },
    actor_2_facebook_likes: {
        type: Intiger,

    },
    imdb_score: {
        type: Float,
        required: true,
    },
    aspect_ratio: {
        type: Float,
    },
    movie_facebook_likes: {
        type: Intiger,
    }

}, {
    timestamps: true,
}
);

const Data = mongoose.model('Data', DataSchema);
module.exports = Data;


