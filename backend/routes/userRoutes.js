import express from 'express'
const router = express.Router();

import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
  } from '../controllers/userController.js';

  //base path is /api/users
router.route('/').post(registerUser).get(getUsers);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

export default router