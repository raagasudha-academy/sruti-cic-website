import { test, expect } from "@playwright/test";
import { gotoPage } from "./utils";

test("About page visual snapshot", async ({ page }) => {
  await gotoPage(page, "/about");
  await expect(page).toHaveScreenshot("about.png", { fullPage: true });
});
