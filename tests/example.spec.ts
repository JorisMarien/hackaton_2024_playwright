import { test, expect } from '@playwright/test';

test('Hackaton', async ({ page }) => {
  await page.goto("");
  await expect(page.locator('#name')).toBeVisible();
  await page.locator('#name').fill('Terminator');
  await page.locator('#age').fill('20');
  await page.getByLabel('Species:').selectOption({label: 'Flood'});
  await page.locator('#planet').fill('Earth');
  await page.keyboard.press('Enter');
  await page.locator('#continue').click();
  await expect(page.locator('.victim>img')).toBeVisible();
  await page.locator('.victim>img').click({position: {x:200, y:195}});
  await expect(page.locator('.murder')).toBeVisible();
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
