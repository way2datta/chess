import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPieceComponent } from './select-piece/select-piece.component';
import { BoardViewComponent } from './board-view/board-view.component';
import { GlobalErrorHandler } from "./GlobalErrorHandler"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SelectPieceComponent,
    BoardViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
   }),
    AppRoutingModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
