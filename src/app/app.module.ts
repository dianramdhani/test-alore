import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ProspectorState } from './app.state';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SegmentDialogComponent } from './shared/components/segment-dialog/segment-dialog.component';
import { BtnTableComponent } from './shared/components/btn-table/btn-table.component';
import { BtnPlusComponent } from './shared/components/btn-plus/btn-plus.component';
import { TableDialogComponent } from './shared/components/table-dialog/table-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    NgxsModule.forRoot([ProspectorState]),
    // NgxsReduxDevtoolsPluginModule.forRoot({ name: 'Test Alore' }),
    // NgxsLoggerPluginModule.forRoot(),
  ],
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
