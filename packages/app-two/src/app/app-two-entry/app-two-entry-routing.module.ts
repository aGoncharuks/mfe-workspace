import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTwoEntryComponent } from './app-two-entry.component';

const routes: Routes = [{ path: '', component: AppTwoEntryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppTwoEntryRoutingModule { }
