import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { IconsComponent } from './components/icons/icons.component';
import { DemoPageHeaderComponent } from './components/demo-page-header/demo-page-header.component';
import { BadgesComponent } from './components/badges/badges.component';

@NgModule({
  declarations: [FlexboxComponent, DashboardComponent, TypographyComponent, ButtonsComponent, ButtonToggleComponent, IconsComponent, DemoPageHeaderComponent, BadgesComponent],
  imports: [SharedModule, DemoRoutingModule],
})
export class DemoModule {}
