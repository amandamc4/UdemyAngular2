import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    //Dependency Injection
    //providers: [MessageService] - one per component
})

export class MessageInputComponent implements OnInit{
    message: Message;

    constructor(private messageService: MessageService){}

    onSubmit(form: NgForm){ 
        if(this.message){
            //Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
            this.message = null; //so the input gets cleared
        } 
        else{
            //Create
            const message = new Message(form.value.content, 'Amanda');
            this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        }           
        form.resetForm();
    }

    onClear(form: NgForm){
        this.message = null;
        form.resetForm();
    }

    ngOnInit(){
        //this component is "informed" whenever the user clicks the edit button
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }
}
