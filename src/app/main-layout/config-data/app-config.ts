/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { AppConfig } from '../common-models/common';


export const APP_CONFIG: AppConfig = {
  data: {
    name: 'Registro Público de la Propeidad',
    hint: 'Firma Electrónica',
    organization: 'Gobierno del Estado de Zacatecas',
    description: '',
  },
  layout: {
    enablePermissions: false,
    displayNavbarHeader: true,
    displayMenuUser: true,
    displayChangeLanguage: true,
    displayChangePassword: true,
    displayAsideLeft: false,
    displaySubMenu: false,
    displayHeader: true,
    displayFooter: true,
  }
};
