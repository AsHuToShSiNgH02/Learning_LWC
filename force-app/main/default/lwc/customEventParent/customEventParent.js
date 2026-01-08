import { LightningElement } from 'lwc';

export default class CustomEventParent extends LightningElement {

    parentVariable;

    showVariableOnParent(event){
        console.log('event received in parent' + event.detail);
        this.parentVariable = event.detail;
    }
}