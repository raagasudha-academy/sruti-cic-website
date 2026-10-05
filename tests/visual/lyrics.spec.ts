import { test, expect } from "@playwright/test";
import { gotoPage } from "./utils";

test("Lyrics page visual snapshot", async ({ page }) => {
  await gotoPage(page, "/lyrics");
  await expect(page).toHaveScreenshot("lyrics.png", { fullPage: true });
});
