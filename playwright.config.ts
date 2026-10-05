import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  reporter: [["html", { open: "never" }]],
  use: {
    baseURL: "http://localhost:4173/sruti-cic-website/",
  },
  // Keep snapshots stable across machines/CI.
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
      animations: "disabled",
    },
  },
  webServer: {
    command: "npm run build && npm run preview -- --port 4173",
    url: "http://localhost:4173/sruti-cic-website/",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chromium",
      use: { ...devices["iPhone 13"], defaultBrowserType: "chromium" },
    },
  ],
});
