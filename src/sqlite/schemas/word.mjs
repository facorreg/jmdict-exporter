/* eslint-disable sort-keys */
import { sqlBool, sqlString } from '../utils/sql-types.mjs';
import { withForeignKeys, withIds } from '../utils/with-common-schemas.mjs';

/*
  foreignkey => senses._id
*/

const senseSchemas = {
  antonyms: {
    word: sqlString,
  },
  glossaries: {
    glossaryType: sqlString,
    lang: sqlString,
    meaning: sqlString,
  },
  language_sources: {
    lang: sqlString,
    word: sqlString,
  },
};

/*
  foreignkey => words._id
*/

const wordSchemas = {
  readings: {
    frequencies: sqlString,
    not_true_kanji_reading: sqlBool,
    reading: sqlString,
    reading_information: sqlString,
    reading_restricted: sqlString,
  },
  senses: {
    antonyms: sqlString,
    crossReferences: sqlString,
    dialect: sqlString,
    fields: sqlString,
    kanji_restricted: sqlString,
    misc: sqlString,
    part_of_speech: sqlString,
    reading_restricted: sqlString,
    sense_infomration: sqlString,
  },
  writtings: {
    frequencies: sqlString,
    orthography_information: sqlString,
    writting: sqlString,
  },
};

const schemas = {
  words: {},
  ...withForeignKeys(wordSchemas, ['words']),
  ...withForeignKeys(senseSchemas, ['senses']),
};

export default withIds(schemas);
