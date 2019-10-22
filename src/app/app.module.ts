import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ListUsersComponent } from './components/list-users/list-users.component';



@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SearcherComponent, ListUsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsersService]
})
export class AppModule { }
