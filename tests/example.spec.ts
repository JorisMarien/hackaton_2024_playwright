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
  let codeArray: string[] = code.split('');
  console.log(codeArray);
  await expect(page.locator('#enter')).toBeVisible();
  for await (const codeNumber of codeArray) {
   //await page.locator('id='+codeNumber).click();
   await page.getByRole('button', {name: codeNumber}).click();
  }
  await page.locator('#enter').click();
  await page.keyboard.press('ArrowUp');
});
