
import { expect, request } from '@playwright/test';
import { faker } from '@faker-js/faker';

export const submitRegistrationForm = async () => {

  const details = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    userType: "other",
    referralEmail: faker.internet.email()
  }

    const response = await (await request.newContext()).post(`https://rspace-api.iris.ai/users/`, {
      data: {
        "first_name": details.firstName,
        "last_name": details.lastName,
        "email": details.email,
        "user_type": details.userType,
        "referral_email":details.email,
        "accept_agreements":true,
        "send_updates_and_news":true,
        "subscription_package_id":null
      }
  });

  expect(response.status()).toBe(403);
  console.log(response)

  const responseText = await response.text();
  console.log(responseText)
  const expectedValidation = '"detail":"Authentication credentials were not provided."'
  expect(responseText).toContain(expectedValidation)
    
};




       
  