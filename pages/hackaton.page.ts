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
    readonly skiButton: Locator;
    readonly numpad: Locator;
    readonly numpadEnter: Locator;
    readonly yesButton: Locator;
    readonly chevronRightButton: Locator;
    readonly floatingCube: Locator;
    readonly pressToScanButton: Locator;
    
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
        this.skiButton = page.locator('button.ski-button');
        this.numpad = page.locator('#numpad');
        this.numpad = page.locator('#enter');
        this.yesButton = page.getByRole('button', {name: 'Yes'});
        this.chevronRightButton = page.getByRole('button', {name: ' chevron_right '});
        this.floatingCube = page.locator('.floating-cube');
        this.pressToScanButton = page.getByRole('button', {name: ' Press to scan '});
    }    
}