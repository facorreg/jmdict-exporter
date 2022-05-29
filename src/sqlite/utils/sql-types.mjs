/* eslint-disable sort-keys */
const withType = (type, schema = {}) => ({ type, ...schema });

export const sqlInteger = withType('INTEGER');
export const sqlID = withType('INTEGER', { notNull: true });

export const sqlPrimaryKey = withType('INTEGER', {
  notNull: true,
  primaryKey: true,
  autoInc: true,
});

export const sqlString = withType('STRING');
export const sqlBool = withType('BOOLEAN');

export const sqlForeignKey = (foreignKey, referenceTable, referenceKey) => ({
  foreignKey,
  references: {
    table: referenceTable,
    key: referenceKey,
  },
  ...sqlID,
});
