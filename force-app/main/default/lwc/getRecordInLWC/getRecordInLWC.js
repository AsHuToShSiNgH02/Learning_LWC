import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CASE_NUMBER_FIELD from '@salesforce/schema/Case.CaseNumber';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

export default class GetRecordInLWC extends LightningElement {
    @api recordId;
    fields = [CASE_NUMBER_FIELD, STATUS_FIELD, PRIORITY_FIELD];

    @wire(getRecord, {recordId: '$recordId', fields:'$fields'}) caseVar;

    get caseNumber(){
        return getFieldValue(this.caseVar.data, CASE_NUMBER_FIELD);
    }

    get caseStatus(){
        return getFieldValue(this.caseVar.data, STATUS_FIELD);
    }

    get casePriority(){
        return getFieldValue(this.caseVar.data, PRIORITY_FIELD);}

}