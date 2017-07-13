import { Component } from "@angular/core";
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

    onSave(value: string){
        const message = new Message(value, 'Amanda');
        this.messageService.addMessage(message);
    }
}
