import { test, expect } from "@playwright/test";
import { gotoPage } from "./utils";

test("Classes page visual snapshot", async ({ page }) => {
  await gotoPage(page, "/classes");
  await expect(page).toHaveScreenshot("classes.png", { fullPage: true });
});
