
import BasePage from "./basePage";

export default class RspaceRegistrationPage extends BasePage {

   get validationError(){
    return this.page.locator("id-sign-up-form>div")
   }
}
