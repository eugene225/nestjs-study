export class AuthLoginDto {
  accessToken: string;

  static create(accessToken: string): AuthLoginDto {
    const dto = new AuthLoginDto();
    dto.accessToken = accessToken;

    return dto;
  }
}
