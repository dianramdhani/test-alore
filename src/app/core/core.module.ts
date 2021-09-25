import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {} from '@angular/material';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatInputModule],
  declarations: [NavbarComponent, SidemenuComponent],
  exports: [NavbarComponent, SidemenuComponent, EmojiModule, PickerModule],
})
export class CoreModule {}
