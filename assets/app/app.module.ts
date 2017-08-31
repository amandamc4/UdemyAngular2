import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component"
import { ErrorService } from "./errors/error.service";
import { MessageModule } from "./messages/message.module";

@NgModule({
    declarations: [
        AppComponent,        
        AuthenticationComponent, //can't remove to module because we use in the route 
        HeaderComponent,
        ErrorComponent
    ],
    providers: [AuthService, ErrorService],
    imports: [BrowserModule, routing, HttpModule, MessageModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}