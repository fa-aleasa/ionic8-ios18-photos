import { Injectable } from '@angular/core';
import { GetResult, Preferences } from '@capacitor/preferences';
import { AppSettings } from '../settings';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}') || {};
  }

  set(key: string, value: any): boolean {
    localStorage.setItem(key, JSON.stringify(value));

    return true;
  }

  has(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

export class MemoryStorageService {
  private store: { [k: string]: string } = {};

  get(key: string) {
    return JSON.parse(this.store[key] || '{}') || {};
  }

  set(key: string, value: any): boolean {
    this.store[key] = JSON.stringify(value);
    return true;
  }

  has(key: string): boolean {
    return !!this.store[key];
  }

  remove(key: string) {
    delete this.store[key];
  }

  clear() {
    this.store = {};
  }
}

export class CapacitorStorageService {
  async get(key: string): Promise<GetResult> {
    const { value } = await Preferences.get({ key: key });
    return JSON.parse(value || '{}') || {};
  }

  async set(key: string, value: AppSettings): Promise<boolean> {
    await Preferences.set({key:key, value:JSON.stringify(value)});
    return true;
  }

  async has(key: string): Promise<boolean> {
    return !!(await Preferences.get({ key: key }));
  }

  async remove(key: string) {
    await Preferences.remove({ key: key });
  }

  async clear() {
    await Preferences.clear();
  }
}
