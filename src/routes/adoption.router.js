import { Router } from 'express';
import adoptionsController from '../controllers/adoptions.controller.js';

const router = Router();

/**
 * @swagger
 * /api/adoptions:
 *   get:
 *     summary: "Get all adoptions"
 *     description: "Retrieve a list of all adoptions"
 *     responses:
 *       200:
 *         description: "A list of adoptions"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Adoption'
 *       500:
 *         description: "Internal server error"
 */
router.get('/', adoptionsController.getAllAdoptions);

/**
 * @swagger
 * /api/adoptions/{aid}:
 *   get:
 *     summary: "Get an adoption by ID"
 *     description: "Retrieve a specific adoption by its unique ID"
 *     parameters:
 *       - in: path
 *         name: aid
 *         required: true
 *         description: "Adoption ID"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Adoption found"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adoption'
 *       404:
 *         description: "Adoption not found"
 *       500:
 *         description: "Internal server error"
 */
router.get('/:aid', adoptionsController.getAdoption);

/**
 * @swagger
 * /api/adoptions/{uid}/{pid}:
 *   post:
 *     summary: "Create a new adoption"
 *     description: "Create an adoption between a user and a pet"
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: "User ID"
 *         schema:
 *           type: string
 *       - in: path
 *         name: pid
 *         required: true
 *         description: "Pet ID"
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: "Adoption created successfully"
 *       400:
 *         description: "Bad request"
 *       500:
 *         description: "Internal server error"
 */
router.post('/:uid/:pid', adoptionsController.createAdoption);

export default router;
