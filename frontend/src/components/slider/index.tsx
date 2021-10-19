import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  ViewProps,
} from 'react-native';
import { ImageType } from '../../types/image';

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#FFF',
    fontSize: 50,
  },
});

type Props = ViewProps & {
  images: Array<ImageType>;
}

export default function ImageSwipe({ images, ...rest }: Props) {
  const width = useWindowDimensions().width;

  let sources: Array<string> = [];
  images.map((image: ImageType) => {
    sources.push(image.url);
  })

  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }: any) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View {...rest}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        style={{ width, height: 300 }}>
        {sources.map((image: any, index: any) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width, height: 300, resizeMode: 'cover' }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {sources.map((i: any, k: any) => (
          <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
    </View>
  );
}