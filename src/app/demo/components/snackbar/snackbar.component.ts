import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { GridsComponent } from '../grids/grids.component';
import { TabsComponent } from '../tabs/tabs.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  constructor(private snackbarService: MatSnackBar) {}

  ngOnInit() {}

  showSnackbar(message: string) {
    this.snackbarService.open(message);
  }

  showSnackbarWithAction(message: string, action: string) {
    const snackbarRef = this.snackbarService.open(message, action);

    snackbarRef.afterDismissed().subscribe(_ => {
      console.log('snackbar dismissed');
    });

    snackbarRef.onAction().subscribe(_ => {
      console.log('an action occurred on the snackbar');
    });
  }

  showSnackbarWithAutoDismiss(message: string, action: string) {
    this.snackbarService.open(message, action, { duration: 2000 });
  }

  showSnackbarCreateFromComponent() {
    this.snackbarService.openFromComponent(SidenavComponent, {
      duration: 5000,
    });
  }
}
