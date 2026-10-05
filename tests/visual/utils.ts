import { Page } from "@playwright/test";

/**
 * Navigates to a hash route and waits for the app to settle before a
 * screenshot is taken, so unrelated async content doesn't cause flaky diffs.
 */
export async function gotoPage(page: Page, hash: string) {
  await page.goto(`/#${hash}`);
  await page.waitForLoadState("networkidle");
}
