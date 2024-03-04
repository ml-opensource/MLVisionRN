import React from 'react';
import {StyleSheet, Image, Dimensions, View} from 'react-native';
import TypingText from '../../components/TypingText/TypingText';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {globe, orbit, solar} from '../../data/allTexts';
import InfoBox from '../../components/InfoBox/InfoBox';
import styled from 'bomonti';
import {ScrollView} from 'react-native-gesture-handler';
import {getOSName} from '../../helpers';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const OSName = getOSName();

const MainScreen = ({navigation}: {navigation: any}) => {
  const progress = useSharedValue(0);
  const opacityAnimation = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  });

  const onTypingAniDone = () => {
    progress.value = withDelay(
      500,
      withTiming(1, {
        duration: 2000,
        easing: Easing.linear,
        reduceMotion: ReduceMotion.System,
      }),
    );
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.scrollView]}
      scrollEnabled={OSName !== 'visionos'}>
      <StyledContainer>
        <Animated.View style={[styles.imgBgContainer, opacityAnimation]}>
          <Image
            source={require('./../../../assets/SunSliver.png')}
            style={[styles.imgBgSun]}
          />
          <Image
            source={require('./../../../assets/EarthHalf.png')}
            style={[styles.imgBgGlobe]}
          />
        </Animated.View>
        <StyledHeader>
          <TypingText
            text="Hello World"
            fontSize={50}
            onAnimationDone={onTypingAniDone}
          />
          <Animated.Text style={[styles.headerSubtitle, opacityAnimation]}>
            Discover a new way of looking at the world.
          </Animated.Text>
        </StyledHeader>
        <StyledContent style={[opacityAnimation]}>
          <InfoBox data={globe} navigation={navigation} />
          <InfoBox data={orbit} navigation={navigation} />
          <InfoBox data={solar} navigation={navigation} />
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

const StyledContainer = styled(View)(() => ({
  mobile: {
    backgroundColor: '#868783',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100%',
}));

const StyledContent = styled(Animated.View)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignSelf: 'flex-end',
  mobile: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  width: '100%',
  paddingHorizontal: 47,
  paddingVertical: 63,
}));

const StyledHeader = styled(Animated.View)(() => ({
  marginBottom: 20,
  alignItems: 'center',
  flexGrow: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  width: '100%',
  mobile: {
    position: 'relative',
    left: 'auto',
    right: 'auto',
    marginTop: windowHeight / 2 - 100,
  },
}));

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignSelf: 'flex-end',
    paddingHorizontal: 47,
    paddingVertical: 63,
  },
  imgBgContainer: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBgSun: {
    position: 'absolute',
    top: '-12%',
    aspectRatio: 1,
    resizeMode: 'contain',
    flex: 1,
    width: 2200,
  },
  imgBgGlobe: {
    position: 'absolute',
    top: '28%',
    aspectRatio: 1,
    resizeMode: 'contain',
    flex: 1,
    height: 1600,
  },
});

export default MainScreen;
