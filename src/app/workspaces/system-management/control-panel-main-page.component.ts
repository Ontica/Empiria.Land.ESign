/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Component } from '@angular/core';

import { MessageBoxService } from '@app/shared/containers/message-box';

import { ControlPanelOption, ControlPanelOptionList } from './control-panel-config';

import { Document, DOCUMENTS, EmptyDocument } from '../../models/signRequest';

@Component({
  selector: 'emp-ng-control-panel-main-page',
  templateUrl: './control-panel-main-page.component.html',
})
export class ControlPanelMainPageComponent {

  isDocumentViewerVisble = false;
  document = EmptyDocument;

  constructor(private messageBox: MessageBoxService) {}

  onSelectedDocumentEvent(document: Document) {    
    this.document = document;

    this.isDocumentViewerVisble = true;
  }

  onCloseDocumentViewer() {
    this.isDocumentViewerVisble = false;
  }

}
