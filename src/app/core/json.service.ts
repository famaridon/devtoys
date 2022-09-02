import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor() { }

  public formatte(raw: string): string {
    return JSON.stringify(this.parse(raw), null, 2);
  }

  public parse(data: string): object {
    return JSON.parse(data);
  }
}
