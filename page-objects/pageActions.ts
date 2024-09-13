import { Locator, Page } from "@playwright/test";

export interface PageActions {

    page: Page;

    navigateTo(url: string): Promise<void>;

    clickElement(Locator: Locator): Promise<void>;
    
    fillInput(Locator: Locator, value: string): Promise<void>;
  }