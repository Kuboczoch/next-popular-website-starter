import { test, expect } from '@playwright/test'

test('should have h1 text', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('next-popular-website-starter')
})
