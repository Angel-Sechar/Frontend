import { ConstantModel } from '@shared/models';

export interface AuthRegisterDto {
  documentType: ConstantModel;
  documentNumber: string;
  names: string;
  fatherLastName: string;
  motherLastName: string;
  birthDate: Date;
  email: string;
  password: string;
  acceptTerms: boolean;
}
