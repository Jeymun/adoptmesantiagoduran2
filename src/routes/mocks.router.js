import { Router } from 'express';
import { generateMockUsers, generateMockPets } from '../mocks/mockGenerator.js';
import { createHash } from '../utils/hash.js'; // Asegúrate de tener esta utilidad
import UserModel from '../dao/models/User.js'; // Usa el modelo ORIGINAL
import PetModel from '../dao/models/Pet.js';    // Usa el modelo ORIGINAL

const router = Router();

/**
 * @swagger
 * /api/mocks/mockingpets:
 *   get:
 *     summary: "Generate mock pets"
 *     description: "Generate mock pets and return them"
 *     responses:
 *       200:
 *         description: "A list of mock pets"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 *       500:
 *         description: "Internal server error"
 */
router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(100); // o la cantidad que desees
  res.json({ pets });
});

/**
 * @swagger
 * /api/mocks/mockingusers:
 *   get:
 *     summary: "Generate mock users"
 *     description: "Generate mock users and return them"
 *     responses:
 *       200:
 *         description: "A list of mock users"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: "Internal server error"
 */
router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.json({ users });
});

/**
 * @swagger
 * /api/mocks/generateData:
 *   post:
 *     summary: "Generate and insert mock data into the database"
 *     description: "Generate mock users and pets and insert them into the database"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users:
 *                 type: integer
 *                 description: "Number of users to generate"
 *               pets:
 *                 type: integer
 *                 description: "Number of pets to generate"
 *             required:
 *               - users
 *               - pets
 *     responses:
 *       200:
 *         description: "Data generated and inserted successfully"
 *       400:
 *         description: "Bad request"
 *       500:
 *         description: "Internal server error"
 */
router.post('/generateData', async (req, res) => {
  const { users = 0, pets = 0 } = req.body;
  try {
    const mockUsers = generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    const usersToInsert = await UserModel.insertMany(mockUsers);
    const petsToInsert = await PetModel.insertMany(mockPets);

    res.json({
      message: 'Datos generados e insertados correctamente',
      users: usersToInsert.length,
      pets: petsToInsert.length
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
