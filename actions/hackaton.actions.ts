import { HackatonPage } from "../pages/hackaton.page";

export class HackatonActions {
    readonly hackatonPage: HackatonPage
    
    constructor(hackatonPage: HackatonPage) {
        this.hackatonPage=hackatonPage;
    }

    async goto(urlAppendix:string) {
       await this.hackatonPage.page.goto(urlAppendix);
    }

    async waitForAnimation(timeout:number) {
        await this.hackatonPage.page.waitForTimeout(timeout);
    }
 
    async clickTransmissionButton() {
        await this.hackatonPage.transmissionButton.click();
    }
    
    async clickContinueButton() {
        await this.hackatonPage.continueButton.click();
    }

    async fillInName(name:string) {
        await this.hackatonPage.nameInput.fill(name);
    }

    async fillInAge(age:string) {
       await this.hackatonPage.ageInputField.fill(age);
    }
    
    async selectDropdownAction() {
       await this.hackatonPage.dropdownSpecies.selectOption({label: 'Flood'});
    }

    async fillInPlanet(planet:string) {
       await this.hackatonPage.planetField.fill(planet);
    }

    async pressKey(key:string) {
        await this.hackatonPage.page.keyboard.press(key);
    }

    async clickSomewhere() {
        await this.hackatonPage.divElement.click();
    }

    async clickYellowNote() {
        await this.hackatonPage.yellowNote.click({position: {x:200, y:195}});
    }

    async clickOnTheCodeNote() {
        await this.hackatonPage.code.click();
    }

    async clickOnSkiButton() {
        await this.hackatonPage.skiButton.click();
    }

    async clickOnNumpad() {
        await this.hackatonPage.numpad.click();
    }

    async clickOnNumpadEnter() {
        await this.hackatonPage.numpadEnter.click();
    }
    
    async clickOnYesButton() {
        await this.hackatonPage.yesButton.click({ position: { x: 59, y: 10 } });
    }

    async clickOnChivronRightButton(){
        await this.hackatonPage.chevronRightButton.click({ position: { x: 61, y: 10 } });
    }

    async clickOnFloatingCube() {
        await this.hackatonPage.floatingCube.click();
    }

    async clickOnPressToScanButton() {
        await this.hackatonPage.pressToScanButton.click({ delay: 8000});
    }
}