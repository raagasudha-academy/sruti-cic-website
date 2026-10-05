import { test, expect } from "@playwright/test";
import { gotoPage } from "./utils";

test("Home page visual snapshot", async ({ page }) => {
  await gotoPage(page, "/");
  await expect(page).toHaveScreenshot("home.png", { fullPage: true });
});
