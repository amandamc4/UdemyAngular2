import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    //property
    message = {
        content: 'A message',
        author: 'Amanda'
    };
}