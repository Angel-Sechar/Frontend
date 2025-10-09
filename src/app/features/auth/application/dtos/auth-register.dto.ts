export interface AuthRegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: string;
  dni?: string;
  birthDate?: Date;
  gender?: string;
  address?: string;
  logoImg?: string;
  phoneNumber?: string;
}
