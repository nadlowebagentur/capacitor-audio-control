export interface AudioControlPlugin {
  setVolume(options: { value: string }): Promise<{ value: string }>;
}
