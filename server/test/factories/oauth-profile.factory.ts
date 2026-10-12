import { OAuthProfile } from 'src/dtos/auth.dto.js';
import { OAuthProfileLike } from 'test/factories/types.js';
import { newUuid } from 'test/small.factory.js';

export class OAuthProfileFactory {
  private constructor(private value: OAuthProfile) {}

  static create(dto: OAuthProfileLike = {}) {
    return OAuthProfileFactory.from(dto).build();
  }

  static from(dto: OAuthProfileLike = {}) {
    const sub = newUuid();
    return new OAuthProfileFactory({
      sub,
      name: 'Name',
      given_name: 'Given',
      family_name: 'Family',
      email: `oauth-${sub}@immich.cloud`,
      email_verified: true,
      defaults: { immich_quota_bytes: null },
      ...dto,
    });
  }

  build() {
    return { ...this.value };
  }
}
