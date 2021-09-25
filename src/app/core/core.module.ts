import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, SidemenuComponent],
  exports: [NavbarComponent, SidemenuComponent, EmojiModule, PickerModule],
})
export class CoreModule {}
