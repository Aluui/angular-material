import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [WelcomeComponent, ToolbarComponent, MainContentComponent, SideNavComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
