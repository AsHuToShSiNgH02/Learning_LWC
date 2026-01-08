import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api ownerName;
    @api ownerRole;
}