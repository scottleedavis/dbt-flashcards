import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public subject: BehaviorSubject<string>;

  constructor() { 
    this.subject = new BehaviorSubject(null);
  }

  update(action: string) {
    this.subject.next(action);
  }
}
