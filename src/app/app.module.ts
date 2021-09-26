import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SegmentDialogComponent } from './shared/components/segment-dialog/segment-dialog.component';
import { BtnTableComponent } from './shared/components/btn-table/btn-table.component';
import { BtnPlusComponent } from './shared/components/btn-plus/btn-plus.component';
import { TableDialogComponent } from './shared/components/table-dialog/table-dialog.component';

@NgModule({
  imports: [BrowserModule, CoreModule],
  entryComponents: [SegmentDialogComponent, TableDialogComponent],
  declarations: [
    AppComponent,
    SegmentDialogComponent,
    TableDialogComponent,
    BtnTableComponent,
    BtnPlusComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
