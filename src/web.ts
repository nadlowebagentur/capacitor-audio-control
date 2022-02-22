import { WebPlugin } from '@capacitor/core';

import type { AudioControlPlugin } from './definitions';

export class AudioControlWeb extends WebPlugin implements AudioControlPlugin {
  async setVolume(options: { value: string }): Promise<{ value: string }> {
    console.warn('[AudioControlPlugin] not supported by web platform');

    return options;
  }
}
