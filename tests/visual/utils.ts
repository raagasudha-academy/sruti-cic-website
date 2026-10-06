import { Page } from "@playwright/test";

/**
 * Navigates to a route and waits for the app to settle before a
 * screenshot is taken, so unrelated async content doesn't cause flaky diffs.
 */
export async function gotoPage(page: Page, path: string) {
  await page.goto(path || "/");
  await page.waitForLoadState("networkidle");
}
