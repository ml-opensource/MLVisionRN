export interface ModuleTextConfig {
  name: string;
  eyebrow: string;
  heading: string;
  abstract: string;
  overview: string;
  callToAction: string;
  isRead?: boolean;
  rightImage?: string;
  backgroundImage?: void;
}

export class ModuleText {
  public isRead: boolean = false;
  public readonly name: string;
  public readonly rightImage?: string;
  public readonly backgroundImage?: void;
  public readonly eyebrow: string;
  public readonly heading: string;
  public readonly abstract: string;
  public readonly overview: string;
  public readonly callToAction: string;

  constructor(private config: ModuleTextConfig) {
    this.name = config.name;
    this.eyebrow = config.eyebrow;
    this.heading = config.heading;
    this.abstract = config.abstract;
    this.overview = config.overview;
    this.callToAction = config.callToAction;
    this.rightImage = config.rightImage;
    this.backgroundImage = config.backgroundImage;
  }

  markAsRead(): void {
    this.isRead = true;
  }
}

export function createModuleText(config: ModuleTextConfig): ModuleText {
  return new ModuleText(config);
}
