import schemas from '../schemas/index.mjs';

const parseColumn = (column, colName) => {
  const { autoInc, notNull, primaryKey, type } = column;

  return [
    colName,
    type,
    notNull ? 'NOT NULL' : '',
    primaryKey ? 'PRIMARY KEY' : '',
    autoInc ? 'AUTOINCREMENT' : '',
  ]
    .filter((e) => e)
    .join(' ');
};

const parseForeignKey = ({ references, foreignKey }) =>
  references ? `FOREIGN KEY (${foreignKey}) REFERENCES ${references.table}(${references.key})` : '';

const parseTable = (table) => {
  const colNames = Object.keys(table);
  const columns = [];
  const foreignKeys = [];

  colNames.forEach((colName) => {
    const { [colName]: currentColSchema } = table;
    const column = parseColumn(currentColSchema, colName);
    const foreignKey = parseForeignKey(currentColSchema);

    columns.push(column);
    if (foreignKey) foreignKeys.push(foreignKey);
  });

  return [...columns, ...foreignKeys].join(', ');
};

const parseSchemas = () => {
  const tableNames = Object.keys(schemas);

  const commands = tableNames.map((tableName) => {
    const table = parseTable(schemas[tableName]);
    const command = `CREATE TABLE if not exists ${tableName} (${table})`;
    return command;
  });

  return commands;
};

export default parseSchemas;
