import {test as base} from '@playwright/test'
import  AiBuildersPage from '../page-objects/getStartedFormsPage'
import ProductsPage from '../page-objects/productsPage'
import SolutionsPage from '../page-objects/solutionsPage'
import RspaceRegistrationPage from '../page-objects/rspaceRegisterationPage'

export type TestOptions = {
    globalURL: string 
    openBrowser: string
    aiBuildersPage: AiBuildersPage
    productsPage: ProductsPage
    solutionsPage: SolutionsPage
    rspaceRegistrationPage: RspaceRegistrationPage
}

export const test = base.extend<TestOptions>({
    globalURL: ['',{auto: true}], 
    
    openBrowser: async({page},use)=>{
        await page.goto('/');
        await use('');
    },

    aiBuildersPage: async({page, openBrowser}, use) =>{
        const aiBuildersPage = new AiBuildersPage(page);
        await use(aiBuildersPage)
    },

    productsPage: async({page, openBrowser}, use) =>{
        const productsPage = new ProductsPage(page);
        await use(productsPage)
    },

    solutionsPage: async({page, openBrowser}, use) =>{
        const solutionsPage = new SolutionsPage(page);
        await use(solutionsPage)
    },

    rspaceRegistrationPage: async({page}, use) =>{
        const rspaceRegistrationPage = new RspaceRegistrationPage(page);
        await use(rspaceRegistrationPage)
    }
})
