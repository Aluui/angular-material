import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
