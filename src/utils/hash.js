import crypto from 'crypto';

export function createHash(password) {  
  return crypto.createHash('sha256').update(password).digest('hex');
}

