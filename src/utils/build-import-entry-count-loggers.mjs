const buildImportEntryCounterLoggers = () => {
  let count = 0;

  const logCount = () => {
    if (!(count % 5000)) console.log(`Dictionary export: ${count} entities treated`);
    count += 1;

    return count;
  };

  const lastLogCount = () => {
    console.log(`Dictionary export: ${count} entities imported in total`);
  };

  return {
    lastLogCount,
    logCount,
  };
};

export default buildImportEntryCounterLoggers;
