import React, {useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity as MainTouchableOpacity,
  Alert,
} from 'react-native';
import {TouchableOpacity as VisionTouchableOpacity} from '@callstack/react-native-visionos';
import styled from 'bomonti';
import {getOSName} from '../../helpers';
import {ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const OSName = getOSName();

interface DetailsScreenProps {
  route: any;
  navigation: any;
}

const MixedView =
  OSName === 'visionos'
    ? ({children}: {children: React.ReactNode}) => <>{children}</>
    : ScrollView;
const DetailsScreen = ({route, navigation}: DetailsScreenProps) => {
  const {data} = route.params;

  const onButtonPress = () => {
    Alert.alert("It's not implemented yet.");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.eyebrow,
    });
  }, [navigation, data.eyebrow]);

  return (
    <MixedView contentContainerStyle={[styles.scrollView]}>
      <StyledContainer>
        <View style={[styles.imgBgContainer]}>
          {data.backgroundImage && (
            <Image
              source={data.backgroundImage}
              style={[styles.backgroundImage]}
            />
          )}
        </View>
        <StyledContent>
          <Text style={[styles.heading]}>{data.heading}</Text>
          <Text style={[styles.overview]}>{data.overview}</Text>
          <StyledButton onPress={onButtonPress}>
            <StyledButtonText>{data.callToAction}</StyledButtonText>
          </StyledButton>
        </StyledContent>
        <StyledRightImageContainer>
          {data.rightImage && <StyledRightImage source={data.rightImage} />}
        </StyledRightImageContainer>
      </StyledContainer>
    </MixedView>
  );
};

const StyledButton = styled(
  OSName === 'visionos' ? VisionTouchableOpacity : MainTouchableOpacity,
)(() => ({
  mobile: {
    width: '100%',
  },
  paddingHorizontal: 18,
  paddingVertical: 13,
  borderRadius: 30,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledButtonText = styled(Text)(() => ({
  fontSize: 18,
  color: 'white',
}));

const StyledContainer = styled(View)(() => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  mobile: {
    backgroundColor: '#868783',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
}));

const StyledContent = styled(View)(() => ({
  flexDirection: 'column',
  justifyContent: 'center',
  width: '45%',
  height: '90%',
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  paddingHorizontal: 47,
  paddingVertical: 0,
  mobile: {
    width: '100%',
    paddingVertical: 63,
    justifyContent: 'flex-start',
  },
}));

const StyledRightImageContainer = styled(View)(() => ({
  flex: 1,
  alignItems: 'center',
  position: 'relative',
  top: -50,
  mobile: {
    alignItems: 'flex-start',
    position: 'absolute',
    right: -50,
    zIndex: -1,
  },
}));

const StyledRightImage = styled(Image)(() => ({
  flex: 1,
  resizeMode: 'contain',
  aspectRatio: 1,
  mobile: {
    width: 250,
    height: 250,
    aspectRatio: undefined,
  },
}));

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
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
  backgroundImage: {
    position: 'absolute',
    right: -150,
    bottom: '-70%',
    aspectRatio: 1,
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  overview: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    marginBottom: 30,
  },
});

export default DetailsScreen;
