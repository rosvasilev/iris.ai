import {submitRegistrationForm} from '../../page-objects/api/register'
import { test } from "../../fixtures/test-options";

test.beforeAll(async () => {
	await submitRegistrationForm()
});

test(" Verify successful registration ", async ({rspaceRegistrationPage }) => {


  // the idea here was to assert the newly registered user including an API precondtion 
         
    
  });
