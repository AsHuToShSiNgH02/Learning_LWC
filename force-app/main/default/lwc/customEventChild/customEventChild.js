import { LightningElement } from 'lwc';

export default class CustomEventChild extends LightningElement {
    showVariable;

    showVariableMethod(){
        this.showVariable = 'Opportunit in child';

        //This is custom event creation and dispatching
        const event = new CustomEvent('showvariableparent',{
            detail : this.showVariable
        })

        this.dispatchEvent(event);
    }
}