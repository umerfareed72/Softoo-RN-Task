import React, {useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appIcons, colors, commonstyles, size, WP} from '../../utilities';
import Icon from 'react-native-vector-icons/AntDesign';

interface CategoryItemCardProps {
  title: string;
  price: number;
  quantity: number;
  onPressDelCat: any;
  onPressAdd: any;
  onPressMinus: any;
  bgColor: string;
}
export const CategoryItemCard = ({
  title,
  price,
  onPressDelCat,
  onPressAdd,
  quantity = 1,
  onPressMinus,
  bgColor,
}: CategoryItemCardProps) => {
  return (
    <View style={[styles.appButton, {borderColor: bgColor?.toLowerCase()}]}>
      <View style={styles.itemCon}>
        <View style={{width: '70%'}}>
          <Text style={styles.h1}>{title}</Text>
          <Text style={styles.h1}>{price}</Text>
        </View>
        <View style={styles.rightCon}>
          <TouchableOpacity onPress={onPressAdd}>
            <Icon name={'plus'} size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressMinus}>
            <Icon name={'minus'} size={20} />
          </TouchableOpacity>
          <Text style={styles.h2}>{quantity}</Text>
          <TouchableOpacity onPress={onPressDelCat}>
            <Image source={appIcons.delete} style={[styles.icon24]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon24: {
    height: 24,
    width: 24,
  },

  appButton: {
    // justifyContent: 'center',
    // alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    padding: WP('4'),
    backgroundColor: colors.r1,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.theme_color,
    shadowColor: colors.theme_color,
    marginHorizontal: 5,
    marginVertical: 10,
    width: '100%',
  },
  h1: {
    fontSize: size.large,
    color: colors.black,
    marginBottom: 10,
  },
  h2: {
    fontSize: size.large,
    color: colors.black,
    padding: 5,
    borderWidth: 1,
  },
  itemCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  rightCon: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
