import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTwoEntryRoutingModule } from './app-two-entry-routing.module';
import { AppTwoEntryComponent } from './app-two-entry.component';


@NgModule({
  declarations: [
    AppTwoEntryComponent
  ],
  imports: [
    CommonModule,
    AppTwoEntryRoutingModule
  ]
})
export class AppTwoEntryModule { }
