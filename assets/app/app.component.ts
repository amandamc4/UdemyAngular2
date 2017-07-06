import { Component } from '@angular/core';
import { Message } from "./messages/message.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    //property
    // message = {
    //     content: 'A message',
    //     author: 'Amanda'
    // };

    message: Message = new Message('Some message', 'Amanda');
    //pass this message property as a argument to [message] in the app.component.html
}