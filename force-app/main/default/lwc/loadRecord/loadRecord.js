import { LightningElement, api } from 'lwc';

export default class LoadRecord extends LightningElement {
    fieldName = ['Subject', 'Status', 'Priority'];
    @api recordId;
    ObjectName = 'Case';
}