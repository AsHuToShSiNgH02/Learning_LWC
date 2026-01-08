import { LightningElement, api } from 'lwc';

export default class GrandChildComponent extends LightningElement {
    @api ownerRole;
    @api ownerName;
}