import { test } from '@playwright/test';
import { HackatonPage } from '../pages/hackaton.page';

test('Transmission and information', async ({page}) => {
  const hackatonPage = new HackatonPage(page);
  await hackatonPage.actions.goto('/');
  await hackatonPage.actions.waitForAnimation(7000);
  await hackatonPage.validators.waitForTransmissionButtonToBeVisible();
  await hackatonPage.actions.clickTransmissionButton();
  await hackatonPage.actions.waitForAnimation(15000);
  await hackatonPage.actions.clickSomewhere();
  await hackatonPage.actions.waitForAnimation(15000);
  await hackatonPage.validators.waitForNameInputVisible();
  await hackatonPage.actions.fillInName('Terminator')
  await hackatonPage.actions.fillInAge('20');
  await hackatonPage.actions.selectDropdownAction();
  await hackatonPage.actions.fillInPlanet('Earth');
  await hackatonPage.actions.pressKey('Enter');
});

test('Collect-code', async ({ page }) => {
  const hackatonPage = new HackatonPage(page);
  await hackatonPage.actions.goto('/');
  await page.evaluate(() => localStorage.setItem('player', '{name: "Terminator", age: 20, species: "flood", planet: "earth"}'));
  await hackatonPage.actions.goto('/collect-code');

  await hackatonPage.validators.waitForYellowNote();
  await hackatonPage.actions.clickYellowNote();
  await hackatonPage.validators.waitForCode();

  let code: string = await page.locator('.murder').innerText();
  console.log(code);
  await hackatonPage.actions.clickOnTheCodeNote();
  await hackatonPage.validators.waitForSkiButton();
  await hackatonPage.actions.clickOnSkiButton();
  await hackatonPage.actions.clickContinueButton();
  await hackatonPage.actions.clickOnNumpad();
  await hackatonPage.actions.waitForAnimation(500);

  let codeArray: string[] = code.split('');
  console.log(codeArray);

  await hackatonPage.validators.waitForNumpadToBeOpen();

  for await (const codeNumber of codeArray) {
   await page.locator('id='+codeNumber).click();
   await hackatonPage.actions.waitForAnimation(500);
   //await page.getByRole('button', {name: codeNumber}).click();
  }

  await hackatonPage.actions.clickOnNumpadEnter();
  await hackatonPage.actions.waitForAnimation(2000);
  await hackatonPage.actions.pressKey('ArrowUp');
  await hackatonPage.actions.waitForAnimation(7000);
  await hackatonPage.actions.clickContinueButton();

});

test('Lady', async ({page}) => {
  const hackatonPage = new HackatonPage(page);
  await hackatonPage.actions.goto('/');
  await localStorage.setItem('player', '{name: "Terminator", age: 20, species: "flood", planet: "earth"}');
  await localStorage.setItem('code', '3333');
  await hackatonPage.actions.goto('/the-lady');

  await hackatonPage.actions.clickOnYesButton();
  await hackatonPage.actions.waitForAnimation(1000);
  await hackatonPage.actions.clickOnChivronRightButton();
  await hackatonPage.actions.waitForAnimation(3000);
  await hackatonPage.actions.clickContinueButton();
});

test('Scanner', async ({page}) => {
  const hackatonPage = new HackatonPage(page);
  await hackatonPage.actions.goto('/');
  await localStorage.setItem('player', '{name: "Terminator", age: 20, species: "flood", planet: "earth"}');
  await localStorage.setItem('code', '3333');
  await hackatonPage.actions.goto('/scanner');

  await hackatonPage.actions.clickOnFloatingCube();
  await hackatonPage.actions.clickOnPressToScanButton();
  await hackatonPage.actions.waitForAnimation(3000);
  await hackatonPage.actions.clickContinueButton();


  let wantedReading: string = await page.locator('id=wanted-reading').innerText();
  let currentReading: String = await page.locator('id=current-reading').innerText();
  let wantedreadingArray: string[] = wantedReading.split('');
  let currentReadingArray: string[] = currentReading.split('');
  for await (const wantedRead of wantedreadingArray){

  }
});

test('Experiment', async ({page}) => {
  const hackatonPage = new HackatonPage(page);
  await hackatonPage.actions.goto('/');
  await localStorage.setItem('player', '{name: "Terminator", age: 20, species: "flood", planet: "earth"}');
  await localStorage.setItem('code', '3333');
  await localStorage.setItem('cure', '9999');
await hackatonPage.actions.goto('/experiment');

   let wantedReading: string = await page.locator('id=wanted-reading').innerText();
  let currentReading: String = await page.locator('id=current-reading').innerText();
  let wantedreadingArray: string[] = wantedReading.split('');
  let currentReadingArray: string[] = currentReading.split('');
  for await (const wantedRead of wantedreadingArray){

  }
});
