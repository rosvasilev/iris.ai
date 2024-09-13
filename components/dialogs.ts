import { Page } from "@playwright/test";
import BasePage from "../page-objects/basePage";

export class Dialogs extends BasePage {
  page: Page;
  componentName: string = "";
  formcontrolString: string = "";

  get formcontrolnameGet() {
    return this.page.locator(
      `${this.componentName} [formcontrolname=${this.formcontrolString}]`
    );
  }

  constructor(page: Page, component: string) {
    super(page);
    this.page = page;
    this.componentName = component;
  }

  async fillInputByFormcontrolName(
    formcontrolName: string,
    fieldInput: string
  ) {
    this.formcontrolString = formcontrolName;
    await this.fillInput(this.formcontrolnameGet, fieldInput);
  }
}
