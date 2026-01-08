import { LightningElement, api } from 'lwc';

export default class ContactWithFileUpload extends LightningElement {
    @api recordId;

    contactId;

    handleSuccess(event) {
        this.contactId = event.detail.id;
    }
}
