import {Component} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {BookTableComponent} from "./components/book-table/book-table/book-table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pc-frontend';
  ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {
    }
  showDialog() {
    this.ref = this.dialogService.open(BookTableComponent, {
      header: 'Books',
      width: '70%'
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
