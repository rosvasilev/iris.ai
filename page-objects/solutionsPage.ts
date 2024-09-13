import { expect, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class SolutionsPage extends BasePage {

    optionIndex: string = ''

    get solutionOptions(){
        return this.page.locator(` div:nth-of-type(${this.optionIndex}) > .floating-label-item__inner`)
    }

    async verifySolutionText(index: string, solutionText: string){
        this.optionIndex = index
        await expect(this.solutionOptions).toHaveText(solutionText)
    }

}
