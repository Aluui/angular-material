import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { SideNavComponent } from 'src/app/home/components/side-nav/side-nav.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss'],
})
export class DialogsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(SidenavComponent);
  }

  openDialogExample() {
    // we want to find out what button was clicked
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe(d => {
      console.log(d);
    });
  }

  openDialogExampleWithData() {
    const data = { name: 'Sam' };
    this.dialog.open(DialogExampleComponent, { data });
  }
}
