import bcrypt from 'bcrypt';

async function encript(val: string) {
  const out = await bcrypt.hash(val, 10);
  return out;
}

export { encript };
