import { test, expect } from '@playwright/test';
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
  await hackatonPage.actions.goto('/collect-code');
  await localStorage.setItem('player', '{name: "Terminator", age: 20, species: "flood", planet: "earth"}')

  await hackatonPage.validators.waitForYellowNote();
  await hackatonPage.actions.clickYellowNote();
  await hackatonPage.validators.waitForCode();

  let code: string = await page.locator('.murder').innerText();
  console.log(code);
  await page.locator('.murder').click();
  await expect(page.locator('button.ski-button')).toBeVisible();
  await page.locator('button.ski-button').click();
  await page.locator('#continue').click();
  await page.locator('#numpad').click();
  await page.waitForTimeout(500);
  let codeArray: string[] = code.split('');
  console.log(codeArray);
  await expect(page.locator('#enter')).toBeVisible();
  for await (const codeNumber of codeArray) {
   await page.locator('id='+codeNumber).click();
   await page.waitForTimeout(500);
   //await page.getByRole('button', {name: codeNumber}).click();
  }
  await page.locator('#enter').click();
  await page.waitForTimeout(2000);
  await page.keyboard.press('ArrowUp');
  await page.waitForTimeout(7000)
  await page.locator('#continue').click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', {name: 'Yes'}).click({ position: { x: 59, y: 10 } });
  await page.waitForTimeout(1000);
  await page.getByRole('button', {name: ' chevron_right '}).click({ position: { x: 61, y: 10 } });
  await page.getByRole('button', {name: ' chevron_right '}).click({ position: { x: 61, y: 10 } });
  await page.getByRole('button', {name: ' chevron_right '}).click({ position: { x: 61, y: 10 } });
  await page.waitForTimeout(3000)
  await page.locator('#continue').click();
  await page.locator('.floating-cube').click({ delay: 8000}); 
  await page.getByRole('button', {name: 'Continue >>'}).click();
  await page.waitForTimeout(3000)
  await page.locator('#continue').click();
  let wantedReading: string = await page.locator('id=wanted-reading').innerText();
  let currentReading: String = await page.locator('id=current-reading').innerText();
  let wantedreadingArray: string[] = wantedReading.split('');
  let currentReadingArray: string[] = currentReading.split('');
  for await (const wantedRead of wantedreadingArray){

  }
});
