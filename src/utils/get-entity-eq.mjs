import entities from '../constants/entities.mjs';

const getEntityEq = (key) => entities[key] || key;

export default getEntityEq;
