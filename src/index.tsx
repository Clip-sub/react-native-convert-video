import { NativeModules } from 'react-native';

type ConvertVideoType = {
  convertToMp4(path: string): Promise<object>;
};

const { ConvertVideo } = NativeModules;

export default ConvertVideo as ConvertVideoType;
