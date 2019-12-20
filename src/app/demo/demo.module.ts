import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FlexboxComponent, DashboardComponent],
  imports: [SharedModule, DemoRoutingModule],
})
export class DemoModule {}
