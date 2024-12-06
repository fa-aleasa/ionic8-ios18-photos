import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SettingsNavPage } from './settings.page';
import { SettingsNavPageRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsNavPageRoutingModule
  ],
  declarations: [
    SettingsNavPage,
    SettingsHomeComponent,
    ProfileComponent,
  ]
})
export class SettingsNavPageModule {}
