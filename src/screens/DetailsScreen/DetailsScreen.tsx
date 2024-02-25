import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import styled from 'bomanti';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface DetailsScreenProps {
  route: any;
  navigation: any;
}

const DetailsScreen = ({route, navigation}: DetailsScreenProps) => {
  const {data} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.eyebrow,
    });
  }, [navigation, data.eyebrow]);

  return (
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
      </StyledContent>
      <StyledRightImageContainer>
        {data.rightImage && <StyledRightImage source={data.rightImage} />}
      </StyledRightImageContainer>
    </StyledContainer>
  );
};

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
  justifyContent: 'flex-start',
  width: '40%',
  height: '100%',
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  paddingHorizontal: 47,
  paddingVertical: 63,
  mobile: {
    width: '100%',
  },
}));

const StyledRightImageContainer = styled(View)(() => ({
  flex: 1,
  alignItems: 'center',
  position: 'relative',
  top: -50,
  mobile: {
    bottom: -400,
    alignItems: 'flex-start',
    position: 'absolute',
    right: 0,
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
    right: 0,
    bottom: '-70%',
    aspectRatio: 1,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  overview: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
    marginBottom: 30,
  },
});

export default DetailsScreen;
