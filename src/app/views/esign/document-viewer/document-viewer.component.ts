/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Document, DOCUMENTS, EmptyDocument } from '../../../models/signRequest';


@Component({
  selector: 'emp-esign-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})

export class DocumentViewerComponent implements OnChanges {

  @Input() request : Document;
  
  @Output () onCloseWindow = new EventEmitter();

  info = '';
  title = '';
  documentURI = '';


  ngOnChanges() {
    this.title = this.request.UID + " | " + this.request.internalNo;
    this.info = this.request.documentType + " | " + this.request.transactionType; 
    this.documentURI = this.request.uri;
  }

  onCloseDocumentViewer() {
    this.onCloseWindow.emit();
  }


}
