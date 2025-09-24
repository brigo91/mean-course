import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { MatCard } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Header } from './header/header.component';
import { MatExpansionModule, MatExpansionPanelActionRow } from '@angular/material/expansion';

@NgModule({
  declarations: [
    App,
    PostCreateComponent,
    Header,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCard,
    MatButton,
    MatToolbar,
    MatExpansionModule,
    MatExpansionPanelActionRow
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
