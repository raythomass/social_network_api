const { User, Thought, Reaction } = require('../models');

module.exports = {
    async getThoughts(req,res) {
        try{
            const thoughts = await Thought.find();
            res.json(thoughts);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async getOneThought(req,res) {
        try{
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            res.json(thought);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async createThought(req,res) {
        try{
            const thought = await Thought.create(req.body);
            res.json(thought);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async deleteThought(req,res) {
        try{
            const thought = await Thought.findOneAndRemove({_id: req.params.thoughtId});
            res.json(thought);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async updateThought(req,res) {
        try{
            const thought = await Thought.findOneAndUpdate({_id: req.params.thoughtId});
            res.json(thought);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async createReaction(req,res) {
        try{
            const reaction = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: { reactions: req.body }}
            );
            res.json(reaction);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async deleteReaction(req,res) {
        try{
            const reaction = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}}
            );
            res.json(reaction);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
}

