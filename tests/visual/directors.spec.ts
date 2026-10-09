import { test, expect } from "@playwright/test";
import { gotoPage } from "./utils";

test("Directors page visual snapshot", async ({ page }) => {
  await gotoPage(page, "/directors");
  await expect(page).toHaveScreenshot("directors.png", { fullPage: true });
});
