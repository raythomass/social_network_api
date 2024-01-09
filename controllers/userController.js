const { User, Thought, Reaction } = require('../models');

// GET, CREATE, DELETE, UPDATE
module.exports = {
    async getUsers(req,res) {
        try{
            const users = await User.find();
            res.json(users);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async getOneUser(req,res) {
        try{
            // HOW DO I FIND ONE USER USING ID WHEN I HAVENT DCELARED ONE IN THE MODEL
            const user = await User.findOne()
            res.json(users);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async createUser(req,res) {
        try{
            const user = await User.create(req.body);
            res.json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async deleteUser(req,res) {
        try{
            const user = await User.findOneAndRemove();
            res.json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async updateUser(req,res) {
        try{
            const user = await User.findOneAndUpdate();
            res.json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async createFriend(req,res) {
        try{
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: { friends: req.body }}
            );
            res.json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async deleteFriend(req,res) {
        try{
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {friends: {friendId: req.params.friendId}}}
            );
            res.json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
}