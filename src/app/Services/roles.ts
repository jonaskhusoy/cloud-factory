import {inject, Injectable} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {map} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleService {
  private auth = inject(AuthService);

  roles$ = this.auth.idTokenClaims$.pipe(
    map(claims => claims?.['http://localhost:4200/roles'] ?? [])
  );

  hasRole$(role: string) {
    return this.roles$.pipe(
      map(roles => roles.includes(role))
    );
  }
}
