import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {} from '@angular/material';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { MatInputModule } from '@angular/material';
import {} from '@angular/material';
import { Navbar2Component } from './components/navbar2/navbar2.component';

@NgModule({
  imports: [CommonModule, MatInputModule],
  declarations: [NavbarComponent, SidemenuComponent, Navbar2Component],
  exports: [
    NavbarComponent,
    Navbar2Component,
    SidemenuComponent,
    EmojiModule,
    PickerModule,
  ],
})
export class CoreModule {}
