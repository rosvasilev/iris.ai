import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./basePage";
import { Dialogs } from "../components/dialogs";

export default class AiBuildersPage extends BasePage {

  private get aiBuildersDialog() {
    return new Dialogs(this.page, "ici-hubspot-dialog");
  }

  private get getStartedButton() {
    return this.page.locator(".pulse-anim");
  }

   get aiBuildersOption() {
    return this.page.locator(
      ".ai-mat-form__container  [data-mat-icon-name='ai-infrastructure']"
    );
  }

   get enterpriseSolutionOption(){
    return this.page.locator(".qa-try-rspace-Enterprise > .min-w-full")
  }

   get forRnDteamsOption(){
    return this.page.locator(".qa-try-rspace-Core > .min-w-full")
  }

  private get moreInformationCheckbox() {
    return this.page
      .locator(".ai-mat-form__fields-half mat-checkbox input")
      .first();
  }

  private get agreeCheckbox() {
    return this.page
      .locator(".ai-mat-form__fields-half mat-checkbox input")
      .last();
  }

  get disabledSubmitButton() {
    return this.page.locator(".ai-mat-form__fields-half .disabled");
  }

  async clickGetStarted() {
    await this.clickElement(this.getStartedButton);
  }

  async selectFormOption(Locator: Locator){
    await this.clickElement(Locator)
  }

  async fillAiBuildersForm(
    email: string,
    firstName: string,
    lastName: string,
    jobTitle: string,
    companyName: string,
    phoneNumber: string,
    freeForm: string
  ) {
    await this.aiBuildersDialog.fillInputByFormcontrolName("email", email);
    await this.aiBuildersDialog.fillInputByFormcontrolName(
      "firstname",
      firstName
    );
    await this.aiBuildersDialog.fillInputByFormcontrolName(
      "lastname",
      lastName
    );
    await this.fillInputByFormcontrolName("jobtitle", jobTitle);
    await this.fillInputByFormcontrolName("company", companyName);
    await this.fillInputByFormcontrolName("phone", phoneNumber);
    await this.fillInputByFormcontrolName("other", freeForm);
    await this.clickElement(this.moreInformationCheckbox);
    await this.clickElement(this.agreeCheckbox);
  }
}
