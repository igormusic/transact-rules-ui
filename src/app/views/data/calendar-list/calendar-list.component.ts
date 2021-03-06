import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../../api/apiClientService'
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { Observable } from 'rxjs/Observable';
import { Calendar } from '../../../api/models';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
  animations: egretAnimations
})
export class CalendarListComponent implements OnInit {

  public items: any[];
  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private crudService: ApiClientService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService
  ) { }

  ngOnInit() {
    this.getItems()
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
  }
  
  getItems() {
    this.getItemSub= this.crudService.getCalendars()
     .subscribe(data => {
        this.items = data;
      });
  }
}
