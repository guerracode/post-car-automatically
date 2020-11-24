const puppeteer = require('puppeteer');
const path = require('path');
const data = require('../../data/seminuevos');

const fillDropdown = async (page, name, content, time = true) => {
  // Function to fill all the dropdown of the form
  if (time) await page.waitForTimeout(1000);
  const find = await page.$x(`//a[@data-activates="dropdown_${name}"]`);
  await find[0].click();
  page.waitForSelector(`div#dropdown_${name}`);
  const select = await page.$x(`//div[@id="dropdown_${name}"]//li[@data-content="${content}"]/a`);
  await select[0].click();
};

const postCar = () => {
  const url = 'https://www.seminuevos.com/login';

  (async () => {
    try {
      // Open Browser
      const browser = await puppeteer.launch({ defaultViewport: null, headless: false });
      const page = await browser.newPage();
      await page.goto(url);
      // Login
      await page.type('#email_login', 'josephluis777@gmail.com');
      await page.type('#password_login', '5u7E@abu&VV7#qt');
      // Click on Login Button
      await Promise.all([page.waitForNavigation(), page.click('.input__submit')]);
      // Click on Sell your car Button
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        page.click('.btn-primary'),
      ]);
      // Fill all the forms data
      await fillDropdown(page, 'types', data.type, false);
      await fillDropdown(page, 'brands', data.brand);
      await fillDropdown(page, 'models', data.model);
      await fillDropdown(page, 'subtypes', data.subtype);
      await fillDropdown(page, 'years', data.year);
      await fillDropdown(page, 'provinces', data.state);
      await fillDropdown(page, 'cities', data.city);
      await page.type('#input_recorrido', data.travel);
      await fillDropdown(page, 'mileageType', data.mileageType);
      const phone = await page.$('#input_telefono');
      if (phone) await phone.type(data.phone);
      await page.type('#input_precio', data.price);
      await fillDropdown(page, 'negotiable', data.transaction);
      // Click next button
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        page.click('.next-button'),
      ]);
      await page.waitForTimeout(3000);
      // Fill description and images
      await page.waitForXPath('//textarea[@id="input_text_area_review"]', 5000);
      const description = await page.$x('//textarea[@id="input_text_area_review"]');
      await description[0].type(data.description);
      // await page.type('textarea#input_text_area_review', data.description);
      const inputUploadHandle = await page.$('input[type=file]');
      const image1 = path.resolve('src/assets/images', 'acura_1.jpeg');
      const image2 = path.resolve('src/assets/images', 'acura_2.jpg');
      const image3 = path.resolve('src/assets/images', 'acura_3.jpg');
      await inputUploadHandle.uploadFile(image1);
      await page.waitForTimeout(2000);
      await inputUploadHandle.uploadFile(image2);
      await page.waitForTimeout(2000);
      await inputUploadHandle.uploadFile(image3);
      await page.waitForTimeout(2000);
      // Click next button
      const buttonNext = await page.$x(
        '//div[contains(@class, "footer-button")]/button[contains(@class, "next-button")][2]'
      );
      await buttonNext[0].click();
      // Choose Package
      await page.waitForNavigation({ waitUntil: 'networkidle0' });
      await page.click('a#cancelButton');

      // Take screenshot of the new car post
      // await page.waitForNavigation();
      const screenshot = path.resolve('src/assets/screenshots', 'screenshot.png');
      await page.screenshot({ path: screenshot });
      // Close the browser
      await browser.close();
    } catch (error) {
      throw new Error(error);
    }
  })();
};

module.exports = {
  postCar,
};
