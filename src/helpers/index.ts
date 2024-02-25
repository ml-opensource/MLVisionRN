import {Platform} from '@callstack/react-native-visionos';

export function getOSName(): string {
  const platformName = Platform.OS;
  const platformVersion = parseInt(Platform.Version as string, 10);
  if (platformName === 'android') {
    return 'android';
  }

  if (platformVersion === 1) {
    return 'visionos';
  }

  return 'ios';
}
