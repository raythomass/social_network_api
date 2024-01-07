const router = require('express').Router();

const {
    getThoughts,
    getOneThought,
    createThought,
    deleteThought,
    updateThought
} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought);
router.route('/userId').get(getOneThought).delete(deleteThought).put(updateThought);