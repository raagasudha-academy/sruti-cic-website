import { test, expect } from "@playwright/test";
import { gotoPage } from "./utils";

test("Teachers page visual snapshot", async ({ page }) => {
  await gotoPage(page, "/teachers");
  await expect(page).toHaveScreenshot("teachers.png", { fullPage: true });
});
