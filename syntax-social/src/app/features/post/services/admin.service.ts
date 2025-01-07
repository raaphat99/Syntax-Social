import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isAdminMode: WritableSignal<boolean> = signal(false);

  toggleAdminMode() {
    this.isAdminMode.update((currentMode) => !currentMode);
  }
}
