import { ForControlAuthenticating } from '../../ports';
import { AuthDetails, Permissions } from '../../app/schemas';

const authDetailsMock: AuthDetails = {
  token: 'token',
  refreshToken: 'refreshToken'
};

const permissionsMock: Permissions = {
  admin: true,
  user: true
};

//! STUB: its a mock of the real implementation
export class ControlAuthenticatorStub implements ForControlAuthenticating {
  getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
    return Promise.resolve(authDetailsMock);
  }

  getPermissions(_email: string, _password: string): Promise<Permissions> {
    return Promise.resolve(permissionsMock);
  }
}
