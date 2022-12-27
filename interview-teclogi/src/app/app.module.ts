import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { GlobalService } from './services/global.service';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './components/material/material.module';
import { ScrollBtnDirective } from './directives/scrollbtn.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrollBtnDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
