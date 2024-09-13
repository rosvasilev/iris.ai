import { Locator, Page } from "@playwright/test";
import { PageActions } from "./pageActions";

export default class BasePage implements PageActions {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  formcontrolString: string = "";

  option: string = ""

  get formcontrolnameGet() {
    return this.page.locator(`[formcontrolname='${this.formcontrolString}']`);
  }

  get headerOptions(){
    return this.page.locator(`menu div:nth-of-type(${this.option}) a`)
  }

  async clickHeaderOption(optionInRow: string){
    this.option= optionInRow
    await this.clickElement(this.headerOptions)
  }

  async clickElement(Locator: Locator) {
    await Locator.click();
  }
  
  async forceClickElement(Locator: Locator) {
    await Locator.click({ force: true });
  }

  async fillInput(Locator: Locator, value: string) {
    await Locator.fill(value);
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async waitForRedirection(url: string) {
    await this.page.waitForURL(url);
  }

  async fillInputByFormcontrolName(
    formcontrolName: string,
    fieldInput: string
  ) {
    this.formcontrolString = formcontrolName;
    await this.fillInput(this.formcontrolnameGet, fieldInput);
  }
}
