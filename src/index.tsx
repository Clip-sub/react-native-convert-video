import { NativeModules } from 'react-native';

type ConvertVideoType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ConvertVideo } = NativeModules;

export default ConvertVideo as ConvertVideoType;
