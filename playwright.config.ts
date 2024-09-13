import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './fixtures/test-options';

require('dotenv').config();

module.exports = defineConfig<TestOptions>({
  timeout: 40000,
  globalTimeout: 60000,
  expect:{
    timeout: 10000
  },
  
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['allure-playwright']
  ],

  use: {
    baseURL: process.env.DEV === '1' ? 'https://rspace.iris.ai/' : 
    process.env.STAGE == '1' ? 'https://iris.ai/product' 
    : 'https://iris.ai/',

    trace: 'on-first-retry',
    actionTimeout: 50000,
    navigationTimeout: 40000,
    video: {
      mode: 'off',
      size: {width: 1920, height: 1080}
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless: false,
        viewport: {width:1920, height: 1080},
        video: {
          mode: 'on',
          size: {width: 1920, height: 1080}
        }
       },
       fullyParallel: false,
       testDir: './tests',
    },
  ],
});
