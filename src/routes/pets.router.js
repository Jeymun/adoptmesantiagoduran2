import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';

const router = Router();

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: "Get all pets"
 *     description: "Retrieve a list of all pets"
 *     responses:
 *       200:
 *         description: "A list of pets"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 *       500:
 *         description: "Internal server error"
 */
router.get('/', petsController.getAllPets);

/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: "Create a new pet"
 *     description: "Add a new pet to the system"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       201:
 *         description: "Pet created successfully"
 *       400:
 *         description: "Bad request"
 *       500:
 *         description: "Internal server error"
 */
router.post('/', petsController.createPet);

/**
 * @swagger
 * /api/pets/withimage:
 *   post:
 *     summary: "Create a new pet with an image"
 *     description: "Add a new pet with an image to the system"
 *     responses:
 *       201:
 *         description: "Pet with image created successfully"
 *       400:
 *         description: "Bad request"
 *       500:
 *         description: "Internal server error"
 */
router.post('/withimage', uploader.single('image'), petsController.createPetWithImage);

/**
 * @swagger
 * /api/pets/{pid}:
 *   put:
 *     summary: "Update a pet by ID"
 *     description: "Update pet details using its unique ID"
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         description: "Pet ID"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Pet updated successfully"
 *       404:
 *         description: "Pet not found"
 *       500:
 *         description: "Internal server error"
 */
router.put('/:pid', petsController.updatePet);

/**
 * @swagger
 * /api/pets/{pid}:
 *   delete:
 *     summary: "Delete a pet by ID"
 *     description: "Delete a pet using its unique ID"
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         description: "Pet ID"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Pet deleted successfully"
 *       404:
 *         description: "Pet not found"
 *       500:
 *         description: "Internal server error"
 */
router.delete('/:pid', petsController.deletePet);

export default router;
