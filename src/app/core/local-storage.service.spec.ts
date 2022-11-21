import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { LocalStorageService } from 'src/app/core/local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [LocalStorageService],
    });
    service = TestBed.inject(LocalStorageService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the orDefault value when nothing is found in localstorage', (done) => {
    service.getItem('test', 'the default value').subscribe((orDefault) => {
      expect(orDefault).toBe('the default value');
      done();
    });
  });

  it('should store the orDefault value when nothing is found in localstorage', (done) => {
    service.getItem('test', 'the default value').subscribe((orDefault) => {
      expect(orDefault).toBe('the default value');
      const stored = localStorage.getItem('test');
      expect(stored).toBe(JSON.stringify('the default value'));
      done();
    });
  });

  it('should return the stored value when is found in localstorage', (done) => {
    localStorage.setItem('test', JSON.stringify('the stored value'));
    service.getItem('test', 'the default value').subscribe((orDefault) => {
      expect(orDefault).toBe('the stored value');
      done();
    });
  });

  it('should return allways the same observable when the same key is provided', () => {
    let value = service.getItem('test', 'the default value');
    let value2 = service.getItem('test', 'the other default');
    expect(value).toEqual(value2);
  });

  it('should produce an event when key is set', (done) => {
    let value = service.getItem('test', 'the default value');
    service.setItem('test', 'the new value');

    value.subscribe((orDefault) => {
      expect(orDefault).toBe('the new value');
      done();
    });
  });

  it('should store value in localstorage when new key is set', (done) => {
    const value$ = service.setItem('the new key', 'the new value');

    value$.subscribe((value) => {
      expect(value).toBe('the new value');
      const stored = localStorage.getItem('the new key');
      expect(stored).toBe(JSON.stringify('the new value'));
      done();
    });
  });
});
