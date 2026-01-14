import { LightningElement } from 'lwc';

export default class CustomEventChild extends LightningElement {
    showVariable;

    showVariableMethod(){
        console.log('this is called in child');
        this.showVariable = 'Opportunit in child';

        //This is custom event creation and dispatching
        const event = new CustomEvent('showvariableparent',{
            detail : this.showVariable
        });
        console.log('event created in child' + event.detail);

        this.dispatchEvent(event);
    }
}