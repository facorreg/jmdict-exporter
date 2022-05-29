import sqlite3 from 'sqlite3';
import parseSchemas from './parsers/parse-schemas.mjs';

const sql = sqlite3.verbose();

const db = new sql.Database('jisho');
const onError = (err) => {
  if (err === null) return;

  console.error(err);
};

const sqliteInit = () =>
  new Promise((resolve) => {
    db.serialize(() => {
      parseSchemas().forEach((command) => db.run(command, onError));

      resolve(db);
    });
  });

export default sqliteInit;
