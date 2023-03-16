export interface Document {
    UID: string;
    internalNo: number;
    transactionType: string;
    documentType: string;
    requestedBy: string;
    requestedDate: Date;
    elaboratedBy: string;
  }
  
  export const DOCUMENTS: Document[] = [
    {  UID: 'TR-ZS-29LP8-4DF73-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Donación',
       requestedBy: 'Aide Karina Navarro Solís',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Daniel Ulises Sandoval López' },
    {  UID: 'TR-ZS-29LP8-4DF74-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Compra Venta',
       requestedBy: 'Aide Karina Navarro Solís',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Daniel Ulises Sandoval López' },
    {  UID: 'TR-ZS-29LP8-4DF73-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Crédito',
       requestedBy: 'Laura Garcia Ruiz',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Alejandro Silva Lopez' },
    {  UID: 'TR-ZS-29LP8-4DF73-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Donación',
       requestedBy: 'Aide Karina Navarro Solís',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Daniel Ulises Sandoval López' },
    {  UID: 'TR-ZS-29LP8-4DF74-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Compra Venta',
       requestedBy: 'Aide Karina Navarro Solís',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Daniel Ulises Sandoval López' },
    {  UID: 'TR-ZS-29LP8-4DF73-0',
       internalNo:  361,
       transactionType: 'Inscripción',
       documentType: 'Crédito',
       requestedBy: 'Laura Garcia Ruiz',
       requestedDate: new Date('23/Feb/2023'),
       elaboratedBy: 'Alejandro Silva Lopez' }
  ];
  