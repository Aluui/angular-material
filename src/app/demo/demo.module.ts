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
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenusComponent } from './components/menus/menus.component';
import { LayoutElementsComponent } from './components/layout-elements/layout-elements.component';
import { GridsComponent } from './components/grids/grids.component';
import { ExpansionPanelsComponent } from './components/expansion-panels/expansion-panels.component';
import { CardsComponent } from './components/cards/cards.component';
import { DemoMaterialReferenceComponent } from './components/demo-material-reference/demo-material-reference.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { FormFieldsComponent } from './components/form-fields/form-fields.component';
import { InputFieldsComponent } from './components/input-fields/input-fields.component';
import { MaterialSelectComponent } from './components/material-select/material-select.component';

@NgModule({
  declarations: [FlexboxComponent, DashboardComponent, TypographyComponent, ButtonsComponent, ButtonToggleComponent, IconsComponent, DemoPageHeaderComponent, BadgesComponent, ProgressSpinnerComponent, ToolbarComponent, SidenavComponent, MenusComponent, LayoutElementsComponent, GridsComponent, ExpansionPanelsComponent, CardsComponent, DemoMaterialReferenceComponent, TabsComponent, StepperComponent, FormFieldsComponent, InputFieldsComponent, MaterialSelectComponent],
  imports: [SharedModule, DemoRoutingModule],
})
export class DemoModule {}
