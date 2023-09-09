import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const Onboarding = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onboardingSlides = [
    {
      id: 1,
      imageSource: require('../assests/intro1.png'),
      heading: 'Task Management',
      text: (
        <>
          Let's create a{' '}
          <Text style={styles.span}>space</Text> for your workflows
        </>
      ),
    },
    {
      id: 2,
      imageSource: require('../assests/intro2.png'),
      heading: 'Task Management',
      text: (
        <>
          Work More{' '}
          <Text style={styles.span}>Structured</Text> and {' '}
          Organized
        </>
      ),
    },
    {
      id: 3,
      imageSource: require('../assests/intro3.png'),
      heading: 'Task Management',
      text: (
        <>
          Manage your{' '}
          <Text style={styles.span}>Tasks</Text> quickly for {' '}
          Results
        </>
      ),
    },
  ];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {onboardingSlides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <Image source={slide.imageSource} style={styles.image} />
            <View style={{padding: 20}}>
                <Text style={styles.heading}>{slide.heading}</Text>
                <Text style={styles.text}>{slide.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {onboardingSlides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
      <View style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', paddingHorizontal: 20, paddingVertical: 50}}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text style={{fontSize: 20}} >Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Icon name="arrow-forward" size={30} color="black" />
      </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: 400,
  },
  heading: {
    fontSize: 26,
    fontWeight: '400',
    color: '#6E6FF3'
  },
  text: {
    fontSize: 40,
    marginTop: 10,
    fontWeight: '400',
    color: 'rgb(0,32,85)'
  },
  span: {
    color: '#6E6FF3',
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 20
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgb(212,228,256)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#6E6FF3', 
    width: 20
  },
});

export default Onboarding;