const puppeteer = require('puppeteer');

const takeScreenshot = () => {
  const url = 'https://www.seminuevos.com/login';

  (async () => {
    try {
      const browser = await puppeteer.launch({ defaultViewport: null, headless: false });
      const page = await browser.newPage();
      await page.goto(url);

      await page.type('#email_login', 'josephluis777@gmail.com');
      await page.type('#password_login', '5u7E@abu&VV7#qt');
      await Promise.all([page.waitForNavigation(), page.click('.input__submit')]);
      await Promise.all([page.waitForNavigation(), page.click('.btn-primary')]);
      await page.screenshot({ path: './src/assets/screenshots/test.png' });

      // await browser.close();
    } catch (error) {
      throw new Error(error);
    }
  })();
};

module.exports = {
  takeScreenshot,
};
