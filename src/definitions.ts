export interface AudioControlPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
