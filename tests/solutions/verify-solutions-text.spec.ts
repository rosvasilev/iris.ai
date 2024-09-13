
import { test } from "../../fixtures/test-options";

 test('Verify solutions options text', async ({solutionsPage})=>{
  
    await solutionsPage.clickHeaderOption("2");
    await solutionsPage.verifySolutionText("1", "Full privacy and security")
    await solutionsPage.verifySolutionText("2", "Powerful context understanding")
    await solutionsPage.verifySolutionText("3", "High levels of precision")
    await solutionsPage.verifySolutionText("4", "Comprehensive content")
    await solutionsPage.verifySolutionText("5", "Sustainable and efficient")
    await solutionsPage.verifySolutionText("6", "Configurable processes")
  })



