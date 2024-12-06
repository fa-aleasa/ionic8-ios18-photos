import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StartupService {

  constructor() { }

  /**
   * Load the application only after get essential informations
   */
  load() {
    // return new Promise<void>((resolve, reject) => {
    //   this.auth
    //     .change()
    //     .pipe(
    //       switchMap(() => this.auth.getTenantProps()),
    //       tap(tenantProps => this.tenant.setTenantProps(tenantProps)),

    //       tap(x => this.setStyle())
    //     )
    //     .subscribe({
    //       next: () => resolve(),
    //       error: () => resolve(),
    //     });
    // });
  }
}
