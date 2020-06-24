import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPieceComponent } from './select-piece/select-piece.component';
import { BoardViewComponent } from './board-view/board-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPieceComponent,
    BoardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
