const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
    createFriend,
    deleteFriend
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getOneUser).delete(deleteUser).put(updateUser);
router.route('./:userId/friends').post(createFriend);
router.route('./userId/friends/friendId').delete(deleteFriend);

module.exports = router;