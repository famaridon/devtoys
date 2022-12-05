import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _storage: Storage;

  private _subjects: Map<string, Subject<any>> = new Map();

  public constructor() {
    this._storage = localStorage;
    onstorage = (event): void => {
      if (!event.key || !event.newValue) {
        return;
      }
      if (this._subjects.has(event.key)) {
        this.publishChange(event.key, JSON.parse(event.newValue));
      }
    };
  }

  public getItem<T>(key: string, orDefault: T): Observable<T> {
    let subject = this._subjects.get(key);
    if (subject) {
      return subject as Subject<T>;
    }
    subject = new ReplaySubject<T>(1);
    this._subjects.set(key, subject);
    let storedValue = this._storage.getItem(key);
    if (storedValue) {
      this.publishChange(key, JSON.parse(storedValue));
    } else {
      this.setItem(key, orDefault);
    }
    return subject;
  }

  public setItem<T>(key: string, newValue: T): void {
    this._storage.setItem(key, JSON.stringify(newValue));
    this.publishChange(key, newValue);
  }

  private publishChange(key: string, value: any): void {
    let subject = this._subjects.get(key);
    if (!subject) {
      subject = new ReplaySubject<any>(1);
      this._subjects.set(key, subject);
    }
    subject.next(new Proxy(value, new AutoSaveChangeProxyHandler(this, key)));
  }
}

class AutoSaveChangeProxyHandler implements ProxyHandler<any> {
  public constructor(
    private _localStorageService: LocalStorageService,
    private _key: string
  ) {}

  public set?(
    target: any,
    p: string | symbol,
    newValue: any,
    receiver: any
  ): boolean {
    const updated = { ...target };
    updated[p] = newValue;
    this._localStorageService.setItem(this._key, updated);
    return true;
  }
}
