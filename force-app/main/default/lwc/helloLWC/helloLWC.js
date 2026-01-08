import { LightningElement, api } from 'lwc';

export default class HelloLWC extends LightningElement {
    @api message = 'Click on any button to see changes in UI';
    handleButtonOne(){
        this.message = 'Button 1 is clicked';
    }
    handleButtonTwo(){
        this.message = 'Button 2 is clicked';
    }
}