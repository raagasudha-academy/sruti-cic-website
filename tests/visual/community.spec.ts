import { test, expect } from "@playwright/test";
import { gotoPage } from "./utils";

test("Community page visual snapshot", async ({ page }) => {
  await gotoPage(page, "/community");
  await expect(page).toHaveScreenshot("community.png", { fullPage: true });
});
