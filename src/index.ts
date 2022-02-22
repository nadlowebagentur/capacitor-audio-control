import { registerPlugin } from '@capacitor/core';

import type { AudioControlPlugin } from './definitions';

const AudioControl = registerPlugin<AudioControlPlugin>('AudioControl', {
  web: () => import('./web').then(m => new m.AudioControlWeb()),
});

export * from './definitions';
export { AudioControl };
