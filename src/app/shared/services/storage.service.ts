import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class StorageLayerService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public save(key: string, value: any): void {
    this.storage.set(key, value);
  }

  public get(key: string): any {
    return this.storage.get(key);
  }

  public clear(): void {
    this.storage.clear();
  }
}
