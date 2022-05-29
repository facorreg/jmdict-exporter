import XmlStream from 'xml-stream';
import { createReadStream } from 'fs';
import xmlFields from './constants/xml-fields.mjs';
import buildEntryCountLogger from './utils/build-import-entry-count-loggers.mjs';
import unzipJmdict from './utils/unzip_jmdict.mjs';

import parseXMLEntry from './parsers/parse-XML-entry.mjs';
import sqliteInit from './sqlite/sqlite-init.mjs';

const { lastLogCount, logCount } = buildEntryCountLogger();

const BUNDLE_SIZE = 5000;

const importDictionary = async () => {
  let parsedEntities = [];
  let count = 0;

  await Promise.all([sqliteInit(), unzipJmdict()]);

  const fileStream = createReadStream('./public/JMdict/JMdict.xml');
  const xmlStream = new XmlStream(fileStream);

  return new Promise((resolve, reject) => {
    xmlStream.preserve('entry');
    xmlFields.forEach((itemName) => xmlStream.collect(itemName));
    xmlStream.on('endElement: entry', (entity) => {
      parsedEntities.push(parseXMLEntry(entity));
      count = logCount();

      if (!count % BUNDLE_SIZE) return;

      parsedEntities = [];
    });

    const onExit =
      (handler) =>
      (...args) => {
        lastLogCount();
        handler(...args);
      };

    xmlStream.on('end', onExit(resolve));
    xmlStream.on('error', onExit(reject));
  });
};

export default importDictionary;
