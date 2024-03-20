// InfoColumn.js
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity as MainTouchableOpacity,
} from 'react-native';
import {ModuleTextConfig} from '../../data/textModule';
import {TouchableOpacity as VisionTouchableOpacity} from '@callstack/react-native-visionos';
import styled from 'bomonti';
import {getOSName} from '../../helpers';

type Props = {
  data: ModuleTextConfig;
  navigation: any;
};

const OSName = getOSName();

const InfoBox = ({data, navigation}: Props) => {
  const onPress = () => {
    navigation.navigate('Details', {
      data: data,
    });
  };

  return (
    // @ts-ignore
    <BoxContainer visionos_hoverEffect="lift" onPress={onPress}>
      <Text style={styles.columnEyebrow}>{data.eyebrow}</Text>
      <Text style={styles.columnTitle}>{data.heading}</Text>
      <Text style={styles.columnText}>{data.abstract}</Text>
    </BoxContainer>
  );
};

const BoxContainer = styled(
  OSName === 'visionos' ? VisionTouchableOpacity : MainTouchableOpacity,
)(() => ({
  mobile: {
    width: '100%',
  },
  width: '30%',
  paddingHorizontal: 18,
  paddingVertical: 20,
  borderRadius: 8,
  overflow: 'hidden',
}));

const styles = StyleSheet.create({
  columnEyebrow: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    opacity: 0.5,
    marginBottom: 3,
  },
  columnTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  columnText: {
    fontSize: 18,
    color: 'white',
  },
});

export default InfoBox;
