import { Injectable } from '@angular/core';
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UUIDService {

  constructor() { }

  public v1(): string {
    return uuidv1();
  }

  public v4(): string {
    return uuidv4();
  }
}
