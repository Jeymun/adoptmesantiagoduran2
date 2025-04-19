import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: "Get all users"
 *     description: "Retrieve a list of all users"
 *     responses:
 *       200:
 *         description: "A list of users"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: "Internal server error"
 */
router.get('/', usersController.getAllUsers);

/**
 * @swagger
 * /api/users/{uid}:
 *   get:
 *     summary: "Get a user by ID"
 *     description: "Retrieve a specific user by their unique ID"
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: "User ID"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "User found"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: "User not found"
 *       500:
 *         description: "Internal server error"
 */
router.get('/:uid', usersController.getUser);

/**
 * @swagger
 * /api/users/{uid}:
 *   put:
 *     summary: "Update a user"
 *     description: "Update a specific user's details by their unique ID"
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: "User ID"
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: "User updated successfully"
 *       400:
 *         description: "Bad request"
 *       404:
 *         description: "User not found"
 *       500:
 *         description: "Internal server error"
 */
router.put('/:uid', usersController.updateUser);

/**
 * @swagger
 * /api/users/{uid}:
 *   delete:
 *     summary: "Delete a user"
 *     description: "Delete a specific user by their unique ID"
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: "User ID"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "User deleted successfully"
 *       404:
 *         description: "User not found"
 *       500:
 *         description: "Internal server error"
 */
router.delete('/:uid', usersController.deleteUser);

export default router;
