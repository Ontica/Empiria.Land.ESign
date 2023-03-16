import { Component, OnInit } from '@angular/core';

import { Document, DOCUMENTS } from '../../models/signRequest';

@Component({
  selector: 'emp-esign-grid',
  templateUrl: './emp-esign-grid.component.html',
  styleUrls: ['./emp-esign-grid.component.scss']
})
export class EmpEsignGridComponent implements OnInit {

  displayedColumns: string[] = ['CheckItem','Transaction', 'TransactionType', 'RequestedBy', 'ElaboratedBy','Status'];
  transactionList : Document[] = DOCUMENTS;  

  constructor() { }

  ngOnInit(): void {
  }

}
