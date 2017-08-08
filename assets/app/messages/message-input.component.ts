import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    //Dependency Injection
    //providers: [MessageService] - one per component
})

export class MessageInputComponent {
    constructor(private messageService: MessageService){}

    onSubmit(form: NgForm){        
        const message = new Message(form.value.content, 'Amanda');
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        form.resetForm();
    }
}
