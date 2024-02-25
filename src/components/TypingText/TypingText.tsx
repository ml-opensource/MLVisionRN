import {atom, useAtom} from 'jotai';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  ReduceMotion,
  runOnJS,
} from 'react-native-reanimated';

const letterWidthAtom = atom(0);

type TypingTextProps = {
  text?: string;
  fontSize?: number;
  onAnimationDone?: () => void;
};

const TypingText = ({
  text = 'hello world',
  fontSize = 32,
  onAnimationDone,
}: TypingTextProps) => {
  const progress = useSharedValue(0);
  const cursorOpacity = useSharedValue(1);
  const textLength = text.length;
  let [letterWidth, setLetterWidth] = useAtom(letterWidthAtom);
  const typingAnimation = useAnimatedStyle(() => {
    return {
      width: progress.value * letterWidth,
    };
  });

  const cursorAnimation = useAnimatedStyle(() => {
    return {
      opacity: cursorOpacity.value,
    };
  });

  const onTypingAniDone = (isFinished: boolean | undefined) => {
    if (isFinished) {
      onAnimationDone && onAnimationDone();
    }
  };

  const onTextLayout = (event: any) => {
    const {width} = event.nativeEvent.layout;
    if (progress.value !== 0) {
      return;
    }

    const _letterWidth = width / textLength;
    setLetterWidth(parseFloat(_letterWidth.toFixed(2)));

    progress.value = withTiming(
      textLength,
      {
        duration: 3000,
        easing: Easing.steps(textLength, false),
        reduceMotion: ReduceMotion.System,
      },
      isFinished => {
        runOnJS(onTypingAniDone)(isFinished);
      },
    );
  };

  useEffect(() => {
    cursorOpacity.value = withRepeat(
      withTiming(0, {duration: 400, easing: Easing.linear}),
      textLength,
      true,
    );
  }, [cursorOpacity, progress, textLength]);

  const textProps: TextProps = {
    style: {
      ...styles.text,
      fontSize,
    },
    numberOfLines: 1,
    ellipsizeMode: 'clip' as const,
  };

  return (
    <View>
      <Text
        {...textProps}
        style={[textProps.style, styles.invisibleText]}
        onLayout={onTextLayout}>
        {text}
      </Text>
      <View style={styles.textContainer}>
        <Animated.Text
          {...textProps}
          style={[typingAnimation, textProps.style]}>
          {text}
        </Animated.Text>
        <Animated.Text
          style={[cursorAnimation, textProps.style, styles.cursor]}>
          |
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  invisibleText: {
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: -1,
  },
  textContainer: {flexDirection: 'row', position: 'relative'},
  text: {
    fontFamily: 'Menlo-Regular',
    fontVariant: ['tabular-nums'],
    fontWeight: 'bold',
    color: 'white',
  },
  cursor: {
    bottom: 3,
    color: 'gray',
    position: 'absolute',
    right: -20,
  },
});

export default TypingText;
