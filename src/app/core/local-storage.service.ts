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
      const subject = this._subjects.get(event.key);
      if (subject) {
        subject.next(JSON.parse(event.newValue));
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
      subject.next(JSON.parse(storedValue) as T);
    } else {
      this._storage.setItem(key, JSON.stringify(orDefault));
      subject.next(orDefault);
    }
    return subject;
  }

  public setItem<T>(key: string, newValue: T): Observable<T> {
    let subject = this._subjects.get(key);
    if (!subject) {
      subject = new ReplaySubject<T>(1);
      this._subjects.set(key, subject);
    }
    this._storage.setItem(key, JSON.stringify(newValue));
    subject.next(newValue);
    return subject;
  }
}

type Publisher = (newValue: string | null) => void;
