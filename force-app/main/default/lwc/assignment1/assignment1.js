import { LightningElement } from 'lwc';

export default class Assignment1 extends LightningElement {
    value = 'low';

    get options() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High Priority', value: 'highPriority' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}