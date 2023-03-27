import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { Alert } from 'selenium-webdriver';

import { Document, DOCUMENTS, EmptyDocument } from '../../models/signRequest';

@Component({
  selector: 'emp-esign-grid',
  templateUrl: './emp-esign-grid.component.html',
  styleUrls: ['./emp-esign-grid.component.scss']
})
export class EmpEsignGridComponent implements OnInit {

  displayedColumns: string[] = ['CheckItem','Transaction', 'TransactionType', 'RequestedBy', 'ElaboratedBy','Status'];
  transactionList : Document[] = DOCUMENTS;  

  @Output() documentSelectedEvent = new EventEmitter();

  selectedRow =  EmptyDocument;
  constructor() { }

  ngOnInit(): void {
  }

  onClicIktem(row: Document) {
    this.selectedRow = row;
   this.documentSelectedEvent.emit(row);
  }

  

}
