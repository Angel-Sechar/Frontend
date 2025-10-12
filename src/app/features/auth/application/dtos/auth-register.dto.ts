import { DocumentFormType } from '@shared/types/document-form.type';

export interface AuthRegisterDto {
  documentType: DocumentFormType;
  documentNumber: string;
  names: string;
  fatherLastName: string;
  motherLastName: string;
  birthDate: Date;
  email: string;
  password: string;
  acceptTerms: boolean;
}
