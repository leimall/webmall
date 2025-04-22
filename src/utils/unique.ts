import Sqids from 'sqids';

const version = 202502
const sqids = new Sqids({
  alphabet: 'abcdefghijklmnopqrstuvwxyz1234567890',
  minLength: 6
});

export const getUniqueId = (pid: string, size: string, name:string) => {
  const id = sqids.encode([Date.now()]); 
  return `${pid}_${size}_${name}_${version}`
}