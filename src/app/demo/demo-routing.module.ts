import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { IconsComponent } from './components/icons/icons.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenusComponent } from './components/menus/menus.component';
import { LayoutElementsComponent } from './components/layout-elements/layout-elements.component';
import { GridsComponent } from './components/grids/grids.component';
import { ExpansionPanelsComponent } from './components/expansion-panels/expansion-panels.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'flexbox',
    component: FlexboxComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'button-toggle',
    component: ButtonToggleComponent,
  },
  {
    path: 'icons',
    component: IconsComponent,
  },
  {
    path: 'badges',
    component: BadgesComponent,
  },
  {
    path: 'spinner',
    component: ProgressSpinnerComponent,
  },
  {
    path: 'toolbar',
    component: ToolbarComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
  },
  {
    path: 'menus',
    component: MenusComponent,
  },
  {
    path: 'layout-components',
    component: LayoutElementsComponent,
  },
  {
    path: 'grids',
    component: GridsComponent,
  },
  {
    path: 'expansion-panels',
    component: ExpansionPanelsComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
