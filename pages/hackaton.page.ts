import { type Locator, type Page } from '@playwright/test';
import { HackatonActions } from '../actions/hackaton.actions';
import { HackatonValidators } from '../validators/hackaton.validators';

export class HackatonPage {
    readonly page: Page;
    readonly transmissionButton: Locator;
    readonly continueButton: Locator;
    readonly nameInput: Locator;
    readonly ageInputField: Locator;
    readonly dropdownSpecies: Locator;
    readonly planetField: Locator;
    readonly divElement: Locator;
    readonly yellowNote: Locator;
    readonly code: Locator;
    
    readonly actions: HackatonActions;
    readonly validators: HackatonValidators

    constructor(page: Page){
        this.page=page;
        this.actions = new HackatonActions(this);
        this.validators = new HackatonValidators(this)
        this.transmissionButton = page.locator('#action-button');
        this.continueButton = page.locator('#continue');
        this.nameInput = page.locator('#name');
        this.ageInputField = page.locator('#age');
        this.dropdownSpecies = page.getByLabel('Species:');
        this.planetField = page.locator('#planet');
        this.divElement = page.locator('div').nth(1);
        this.yellowNote = page.locator('.victim>img');
        this.code = page.locator('.murder');
    }    
}