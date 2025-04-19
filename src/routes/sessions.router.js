import { Router } from 'express';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

/**
 * @swagger
 * /api/sessions/register:
 *   post:
 *     summary: "Register a new user"
 *     description: "Create a new user in the system"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: "User registered successfully"
 *       400:
 *         description: "Bad request"
 *       500:
 *         description: "Internal server error"
 */
router.post('/register', sessionsController.register);

/**
 * @swagger
 * /api/sessions/login:
 *   post:
 *     summary: "Login a user"
 *     description: "Authenticate a user and create a session"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: "User logged in successfully"
 *       400:
 *         description: "Invalid credentials"
 *       500:
 *         description: "Internal server error"
 */
router.post('/login', sessionsController.login);

/**
 * @swagger
 * /api/sessions/current:
 *   get:
 *     summary: "Get the current logged-in user"
 *     description: "Retrieve information about the currently logged-in user"
 *     responses:
 *       200:
 *         description: "Current user data"
 *       401:
 *         description: "User not authenticated"
 *       500:
 *         description: "Internal server error"
 */
router.get('/current', sessionsController.current);

/**
 * @swagger
 * /api/sessions/unprotectedLogin:
 *   get:
 *     summary: "Unprotected login route"
 *     description: "A non-authenticated route for testing purposes"
 *     responses:
 *       200:
 *         description: "Unprotected login successful"
 *       500:
 *         description: "Internal server error"
 */
router.get('/unprotectedLogin', sessionsController.unprotectedLogin);

/**
 * @swagger
 * /api/sessions/unprotectedCurrent:
 *   get:
 *     summary: "Unprotected current route"
 *     description: "Retrieve unprotected user data for testing purposes"
 *     responses:
 *       200:
 *         description: "Unprotected current data"
 *       500:
 *         description: "Internal server error"
 */
router.get('/unprotectedCurrent', sessionsController.unprotectedCurrent);

export default router;
