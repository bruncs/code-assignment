const { until } = require('selenium-webdriver');
const { runCommands } = require('../lib/driver.js');

jest.setTimeout(20000);

it('should load Itau auth page', async () => {
  const sample = {
    url: 'http://www.itau.com.br',
    commands: [
      {
        elementTag: 'input',
        elementId: 'agencia',
        value: '6831',
      },
      {
        elementTag: 'input',
        elementId: 'conta',
        value: '006967',
      },
      {
        elementTag: 'button',
        elementId: 'btnLoginSubmit',
      },
    ],
  };

  const driver = await runCommands(sample.url, sample.commands);
  await driver.wait(until.titleContains('Olá'), 10000);
  const pageTitle = await driver.getTitle();

  expect(pageTitle).toBe('Olá, Bruno - Banco Itaú');
});
