import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';

@NgModule({
  declarations: [FlexboxComponent, DashboardComponent, TypographyComponent, ButtonsComponent, ButtonToggleComponent],
  imports: [SharedModule, DemoRoutingModule],
})
export class DemoModule {}
