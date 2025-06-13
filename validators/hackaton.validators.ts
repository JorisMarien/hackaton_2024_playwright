
import { expect } from "@playwright/test";
import { HackatonPage } from "../pages/hackaton.page";

export class HackatonValidators {
    readonly hackatonPage:HackatonPage;

    constructor(hackatonPage:HackatonPage) {
        this.hackatonPage=hackatonPage;
    }

    async waitForNameInputVisible() {
         await expect(this.hackatonPage.nameInput).toBeVisible();
    }

    async waitForTransmissionButtonToBeVisible() {
        await expect(this.hackatonPage.transmissionButton).toBeVisible();
    }

    async waitForYellowNote() {
        await expect(this.hackatonPage.yellowNote).toBeVisible();
    }

    async waitForCode() {
        await expect(this.hackatonPage.code).toBeVisible();
    }
}