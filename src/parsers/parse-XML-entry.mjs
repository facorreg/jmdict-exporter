import parseWrittings from './parse-writtings.mjs';
import parseReadings from './parse-readings.mjs';
import parseSenses from './parse-senses.mjs';

const parseXMLEntry = (entry) => {
  const {
    k_ele: kanjiElements = [],
    r_ele: readingElements = [],
    sense: senseElements = [],
  } = entry;

  const readings = readingElements.map(parseReadings);
  const senses = senseElements.map(parseSenses);
  const writtings = kanjiElements.map(parseWrittings);

  return {
    readings,
    senses,
    writtings,
  };
};

export default parseXMLEntry;
