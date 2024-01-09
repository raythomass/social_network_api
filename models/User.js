const { Schema, model, Types } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            type: String,
            unique: true,
            required: true,

        },
        // thoughts: [thoughtSchema],
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'thought',
            },
          ],
        // friends: [userSchema]
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'user',
            },
          ],
    },
    {
        toJSON: {
            getters:true
        }
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length ;
});

const User = model('user', userSchema);

module.exports = User;