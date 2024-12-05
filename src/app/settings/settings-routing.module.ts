import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsNavPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsNavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsNavPageRoutingModule {}
