const { Schema, model, Types } = require('mongoose');
const userSchema = require('./User')
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,

        },
        username: [userSchema],
        reactions: [reactionSchema]
    }
)