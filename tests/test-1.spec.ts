import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.booking.com/?chal_t=1763808038042&force_referer=');
  await page.getByRole('button', { name: 'Dismiss sign-in info.' }).click();
  await page.getByTestId('header-sign-in-button').click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('f');
  await page.getByRole('textbox', { name: 'Email address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email address' }).fill('fR');
  await page.getByRole('textbox', { name: 'Email address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email address' }).fill('farah.gmail.com');
});