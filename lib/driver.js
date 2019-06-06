require('chromedriver');
const { Builder, By, until } = require('selenium-webdriver');

module.exports = {
  /**
   * Método para execução de comandos na URL informada.
   *
   * @param {string} url URL para execução dos comandos.
   * @param {Array} commands Lista de comandos a serem executados.
   * @param {function} callback Função de callback.
   */
  runCommands: async (url, commands) => {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver
        .manage()
        .window()
        .maximize();

      await driver.get(url);

      commands.forEach(async (command) => {
        switch (command.elementTag) {
          case 'input': {
            await driver.wait(until.elementLocated(By.id(command.elementId)));
            await driver.findElement(By.id(command.elementId)).sendKeys(command.value);
            break;
          }
          case 'button': {
            const element = await driver.findElement(By.id(command.elementId));
            await driver.wait(until.elementIsEnabled(element));
            await element.click();
            break;
          }
          default:
            return Promise.reject(new Error('Tag inválida'));
        }
        return Promise.resolve();
      });
      return driver;
    } catch (err) {
      return err;
    }
  },
};
