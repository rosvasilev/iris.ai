import { expect, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class ProductsPage extends BasePage {

  private get legalTermsCheckbox() {
    return this.page.locator(".mdc-checkbox__native-control");
  }

  private get signUpButton() {
    return this.page.locator(
      ".ai-mat-form__fields-full > .ai-btn > div mat-icon"
    );
  }

  private get subscriptionSuccessMessage() {
    return this.page.locator(".news-cta");
  }

  private get homePageHeader() {
    return this.page.locator(".super-head > div:nth-of-type(1)");
  }

  async fillNewsLetterForm(email: string, firstName: string, lastName: string) {
    await this.fillInputByFormcontrolName("email", email);
    await this.fillInputByFormcontrolName("firstname", firstName);
    await this.fillInputByFormcontrolName("lastname", lastName);
    await this.clickElement(this.legalTermsCheckbox);
    if (await this.legalTermsCheckbox.isChecked()) {
    } else {
      await this.clickElement(this.legalTermsCheckbox);
    }
    await this.forceClickElement(this.signUpButton);
  }

  async verifySuccessfulSubcription() {
    await expect(this.subscriptionSuccessMessage).toContainText(
      "IGNITE your research and innovation with the latest news in the AI space"
    );
  }

  async verifyPageElementsArePresent() {
    await expect(this.homePageHeader).toBeVisible();
  }
}
