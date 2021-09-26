import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import {
  MatInputModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatButtonModule,
  MatDialogModule,
  MatMenuModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule],
  declarations: [NavbarComponent, SidemenuComponent, Navbar2Component],
  exports: [
    EmojiModule,
    PickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NavbarComponent,
    Navbar2Component,
    SidemenuComponent,
  ],
})
export class CoreModule {}
