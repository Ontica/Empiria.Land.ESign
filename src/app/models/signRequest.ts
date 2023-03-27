export interface Document {
    UID: string;
    internalNo: number;
    transactionType: string;
    documentType: string;
    requestedBy: string;
    requestedDate: Date;
    elaboratedBy: string;
    uri: string;
  }

  export const EmptyDocument: Document = {
   UID: '',
   internalNo: -1,
   transactionType: '',
   documentType: '',
   requestedBy: '',
   requestedDate: new Date('01-01-1900'),
   elaboratedBy:'',
   uri: ''
 }
 
  
  export const DOCUMENTS: Document[] = [
    {  UID: 'TR-ZS-29LP8-5DF73-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Donación',
       requestedBy: 'Aide Karina Navarro Solís',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Daniel Ulises Sandoval López',
       uri: 'https://registropublico.zacatecas.gob.mx/pages/recording-stamps/recording.stamp.aspx?uid=RP-ZS-84NC-52EB32-LR97C6' 
   },
   {   UID: 'TR-ZS-29LP8-7DF74-0',
       internalNo:  345,
       transactionType: 'Inscripción',
       documentType: 'Compra Venta',
       requestedBy: 'Aide Karina Navarro Solís',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Daniel Ulises Sandoval López',
       uri: 'https://registropublico.zacatecas.gob.mx/pages/recording-stamps/recording.stamp.aspx?uid=RP-ZS-79EP-54ZB32-XK78J5' 
   },
   {   UID: 'TR-ZS-29LP8-4DF73-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Crédito',
       requestedBy: 'Laura Garcia Ruiz',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Alejandro Silva Lopez',
       uri: 'https://registropublico.zacatecas.gob.mx/pages/recording-stamps/recording.stamp.aspx?uid=RP-ZS-79LB-52AE48-QC34VR'
   },
   {   UID: 'TR-ZS-29LP8-9DF73-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Donación',
       requestedBy: 'Aide Karina Navarro Solís',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Daniel Ulises Sandoval López',
       uri: 'https://registropublico.zacatecas.gob.mx/pages/recording-stamps/recording.stamp.aspx?uid=RP-ZS-84NC-52EB32-LR97C6'
   },
   {   UID: 'TR-ZS-29LP8-4DF74-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Compra Venta',
       requestedBy: 'Aide Karina Navarro Solís',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Daniel Ulises Sandoval López',
       uri: 'https://registropublico.zacatecas.gob.mx/pages/recording-stamps/recording.stamp.aspx?uid=RP-ZS-74RJ-32CY89-FX54E5'
   },
   {   UID: 'TR-ZS-29L88-4DF73-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Crédito',
       requestedBy: 'Laura Garcia Ruiz',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Alejandro Silva Lopez',
       uri: 'https://registropublico.zacatecas.gob.mx/pages/recording-stamps/recording.stamp.aspx?uid=RP-ZS-79LB-52AE48-QC34VR'
   }

  ];
  