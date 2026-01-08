import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api message = 'Message from Child Component';
    @api newYear = '2026';

    demo;
    getVar = 50;

    funcs(event){
        console.log('Event received from detail', event.detail.value);
        console.log('Event received from target', event.target.value);
        console.log(event.target.value === event.detail.value );
        this.demo = event.detail.value;
    }

    get getVar1(){
        return this.getVar * 10;
    }

    taskList = [
        {taskId : '1', taskName :'work on LWC', taskStatus : 'In Progress'},
        {taskId : '2', taskName :'work on Aura', taskStatus : 'Completed'},
        {taskId : '3', taskName :'work on Apex', taskStatus : 'Not Started'}
    ];
}