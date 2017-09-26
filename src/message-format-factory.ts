import { Injectable } from '@angular/core';
import * as mf from 'messageformat';

@Injectable()
export class MessageFormatFactory {
  public getInstance(): any {
    return new mf();
  }
}
