import pick from 'lodash.pick';
import { sqlForeignKey, sqlPrimaryKey } from './sql-types.mjs';

const foreignKeys = {
  sense: sqlForeignKey('sense', 'senses', '_id'),
  word: sqlForeignKey('word', 'words', '_id'),
};

const withCommonSchemas = (schemas, commonSchema) =>
  Object.keys(schemas).reduce(
    (acc, tableName) => ({
      ...acc,
      [tableName]: {
        ...commonSchema,
        ...schemas[tableName],
      },
    }),
    {},
  );

export const withForeignKeys = (schemas, keys) =>
  withCommonSchemas(schemas, pick(foreignKeys, keys));

export const withIds = (schemas) =>
  withCommonSchemas(schemas, {
    _id: sqlPrimaryKey,
  });
