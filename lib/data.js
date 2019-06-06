const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '../data');
const filePath = `${baseDir}/requests.json`;

module.exports = {
  storeRequest: (data) => {
    try {
      let fileContent = null;

      fs.readFile(filePath, (readError, readData) => {
        if (readError) throw readError;

        fileContent = JSON.parse(readData);
        fileContent.push(data);

        fs.writeFile(filePath, JSON.stringify(fileContent, null, 2), (writeError) => {
          if (writeError) throw writeError;
        });
      });

      return data;
    } catch (err) {
      return console.log(err);
    }
  },

  readRequests: (callback) => {
    try {
      fs.readFile(filePath, (readError, readData) => {
        if (readError) throw readError;
        callback(readData);
      });
      return null;
    } catch (err) {
      return console.log(err);
    }
  },
};
