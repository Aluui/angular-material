import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        component: MainContentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
