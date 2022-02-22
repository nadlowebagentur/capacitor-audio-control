import { WebPlugin } from '@capacitor/core';

import type { AudioControlPlugin } from './definitions';

export class AudioControlWeb extends WebPlugin implements AudioControlPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
