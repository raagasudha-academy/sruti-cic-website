import { test, expect } from "@playwright/test";
import { gotoPage } from "./utils";

test("Events page visual snapshot", async ({ page }) => {
  await gotoPage(page, "/events");
  await expect(page).toHaveScreenshot("events.png", { fullPage: true });
});
