import { createReadStream, existsSync } from 'fs';
import unzipper from 'unzipper';

const onError = (reject) => (error) => {
  console.error(error);
  reject(error);
};

const unzipJmdict = () =>
  new Promise((resolve, reject) => {
    const folderPath = './public/JMdict';
    const filePath = `${folderPath}/JMdict.zip`;

    if (existsSync(filePath)) return resolve();
    createReadStream(filePath)
      .pipe(unzipper.Extract({ path: folderPath }))
      .on('error', onError(reject))
      .on('close', resolve);
  });

export default unzipJmdict;
