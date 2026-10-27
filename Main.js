import React from 'react';
import {useTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import PostAuthNavigator from './src/navigation/PostAuthNavigator';
import Test from './src/screens/postAuth/products/Test';
import CarouselComponent from './src/components/postAuthComponents/Carousel';
import FilterProducts from './src/components/productComponents/Filter';
import Failure from './src/components/productComponents/Failure';
import Successful from './src/components/productComponents/Successful';

function Main() {
  const {colors} = useTheme();

  return (
    <SafeAreaProvider>
      <PostAuthNavigator />
       {/*<FilterProducts /> */}
    </SafeAreaProvider>
  );
}

export default Main;
