import { expect } from "@playwright/test";
import { test } from "../../fixtures/test-options";
import { faker } from "@faker-js/faker";

const builderForm = {
  emailAdress: 'random@random.random',
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  job: faker.person.jobTitle(),
  company: faker.company.name(),
  phone: faker.phone.number(),
  freeText: faker.commerce.productDescription(),
};

test.describe('Fill get started forms', ()=>{
  
  test("Fill AI Builders form", async ({ aiBuildersPage }) => {

    await aiBuildersPage.clickGetStarted();
    await aiBuildersPage.selectFormOption(aiBuildersPage.aiBuildersOption);
    await aiBuildersPage.fillAiBuildersForm(
      builderForm.emailAdress,
      builderForm.firstName,
      builderForm.lastName,
      builderForm.job,
      builderForm.company,
      builderForm.phone,
      builderForm.freeText
    );
    expect(aiBuildersPage.disabledSubmitButton).not.toBeVisible();
  });


  test("Fill Enterprise Solutions form", async ({ aiBuildersPage }) => {

    await aiBuildersPage.clickGetStarted();
    await aiBuildersPage.selectFormOption(aiBuildersPage.enterpriseSolutionOption);
    await aiBuildersPage.fillAiBuildersForm(
      builderForm.emailAdress,
      builderForm.firstName,
      builderForm.lastName,
      builderForm.job,
      builderForm.company,
      builderForm.phone,
      builderForm.freeText
    );
    expect(aiBuildersPage.disabledSubmitButton).not.toBeVisible();
  });


  test("Fill for R&D teams form", async ({ aiBuildersPage }) => {

    await aiBuildersPage.clickGetStarted();
    await aiBuildersPage.selectFormOption(aiBuildersPage.forRnDteamsOption);
    await aiBuildersPage.fillAiBuildersForm(
      builderForm.emailAdress,
      builderForm.firstName,
      builderForm.lastName,
      builderForm.job,
      builderForm.company,
      builderForm.phone,
      builderForm.freeText
    );
    expect(aiBuildersPage.disabledSubmitButton).not.toBeVisible();
  });
})


