// src/mocks/mockGenerator.js
import { faker } from '@faker-js/faker';
import { createHash } from '../utils/hash.js'; 

export function generateMockUsers(count = 1) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 80 }),
      password: createHash('coder123'),
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: []
    });
  }
  return users;
}

export function generateMockPets(count = 1) {
  const pets = [];
  for (let i = 0; i < count; i++) {
    pets.push({
      name: faker.animal.dog(),
      species: 'dog',
      birthDate: faker.date.past().toISOString(),
      adopted: faker.datatype.boolean(),
    });
  }
  return pets;
}
