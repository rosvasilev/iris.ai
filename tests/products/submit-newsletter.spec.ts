
import { test } from "../../fixtures/test-options";
import { faker } from "@faker-js/faker";

const builderForm = {
  emailAdress: 'random@random.random',
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName()
};

 test('Register for research newsletter', async ({productsPage})=>{
  
    await productsPage.clickHeaderOption("1");
    await productsPage.verifyPageElementsArePresent()
    await productsPage.fillNewsLetterForm(
      builderForm.emailAdress,
      builderForm.firstName,
      builderForm.lastName,
    )
    await productsPage.verifySuccessfulSubcription();
  })



