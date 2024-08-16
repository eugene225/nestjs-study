export class AuthLoginDto {
  accessToken: string;
  username: string;

  static create(accessToken: string, username: string): AuthLoginDto {
    const dto = new AuthLoginDto();
    dto.accessToken = accessToken;
    dto.username = username;

    return dto;
  }
}
