export class AuthUser {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly role: string,
    public readonly dni: string | null,
    public readonly birthDate: Date | null,
    public readonly gender: string | null,
    public readonly address: string | null,
    public readonly logoImg: string | null,
    public readonly phoneNumber: string | null,
    public readonly isActive: boolean,
  ) {}
}
