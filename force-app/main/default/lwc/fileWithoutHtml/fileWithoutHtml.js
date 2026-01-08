import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { getRecordNotifyChange } from 'lightning/uiRecordApi';

export default class AutoOpportunityUpdater extends LightningElement {
    @api recordId;
    hasRun = false;

    renderedCallback() {
        if (this.hasRun || !this.recordId) return;
        this.hasRun = true;

        const fields = {
            Id: this.recordId,
            Description: 'Updated automatically on page load'
        };

        updateRecord({ fields })
            .then(() => {
                // 🔥 THIS is the missing piece
                getRecordNotifyChange([{ recordId: this.recordId }]);
            })
            .catch(error => {
                console.error(error);
            });
    }
}
