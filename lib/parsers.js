module.exports = {
  /**
   * Método de parse para o corpo da requisição.
   *
   * @param {object} request Object da requisição.
   * @param {function} callback Callback do método.
   */
  parseBody: (request, callback) => {
    try {
      let body = '';

      request.on('data', (chunk) => {
        body += chunk.toString();
      });

      request.on('end', () => {
        body = JSON.parse(body);
        callback(body);
      });

      return body;
    } catch (err) {
      return err;
    }
  },
};
