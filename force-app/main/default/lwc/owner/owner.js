import { LightningElement, api} from 'lwc';

export default class Owner extends LightningElement {
    @api ownerVar = [
        { Name: 'John Doe', Role: 'Manager' },
        { Name: 'Jane Smith', Role: 'Developer' },
        { Name: 'Emily Johnson', Role: 'Designer' }
    ]
}