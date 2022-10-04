import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

const USER_PREFERENCE_KEY = 'userPreference';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {

  private userPreferenceSubject: Subject<UserPreference> = new ReplaySubject(1);
  #userPreference: UserPreference;
  public userPreference$ = this.userPreferenceSubject.asObservable();

  constructor() {
    this.#userPreference = this.parseLocalStorage(localStorage.getItem(USER_PREFERENCE_KEY));
    this.userPreferenceSubject.next({ ...this.#userPreference });
    onstorage = (event) => {
      if (event.key === USER_PREFERENCE_KEY) {
        this.#userPreference = this.parseLocalStorage(event.newValue);
        this.userPreferenceSubject.next({ ... this.#userPreference });
      }
    };
  }

  private parseLocalStorage(userPreferenceRaw: string | null): UserPreference {
    if (userPreferenceRaw) {
      try {
        return JSON.parse(userPreferenceRaw);
      } catch (e) {
        console.log('Can\'t load user preference we restore default.');
      }
    }
    return {
      color: 'light_mode',
    };
  }

  public toggleColorMode(): void {
    this.save({...this.#userPreference, color: this.#userPreference.color === 'light_mode' ? 'dark_mode' : 'light_mode'})
  }

  private save(userPreference: UserPreference) {
    this.#userPreference = { ...userPreference };
    this.userPreferenceSubject.next({ ... this.#userPreference });
    localStorage.setItem(USER_PREFERENCE_KEY, JSON.stringify(this.#userPreference));
  }

}


export interface UserPreference {
  color: 'dark_mode' | 'light_mode'
}