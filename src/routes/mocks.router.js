// routes/mocks.router.js
import { Router } from 'express';
import { generateMockUsers, generateMockPets } from '../mocks/mockGenerator.js';
import { createHash } from '../utils/hash.js'; // Asegurate de tener esta utilidad
import UserModel from '../dao/models/User.js'; // Usa el modelo ORIGINAL
import PetModel from '../dao/models/Pet.js';    // Usa el modelo ORIGINAL

const router = Router();

// Endpoint original migrado
router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(100); // o la cantidad que desees
  res.json({ pets });
});

// Endpoint para generar usuarios en memoria
router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.json({ users });
});

// Endpoint para insertar users y pets en la base de datos
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
