import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, size} from '../../utilities';
import Icon from 'react-native-vector-icons/AntDesign';

interface HomeCardProps {
  onPress: any;
  title: string;
  text: string;
  color: string;
  onAddItem: any;
  purchased: boolean;
}
export const HomeCard = ({
  onPress,
  title,
  text,
  color,
  onAddItem,
  purchased,
}: HomeCardProps) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.appButton, {borderColor: color?.toLowerCase()}]}>
        <Text style={[styles.appButtonTitleText]}>{title}</Text>
        <Text style={[styles.appButtonText]}>{text}</Text>
      </TouchableOpacity>
      {!purchased ? (
        <TouchableOpacity style={styles.iconCon} onPress={onAddItem}>
          <Icon name={'plus'} size={20} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconCon}>
          <Text style={styles.appButtonText}>{'Purchased'}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonTitleText: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: size.normal,
    // textAlign: 'center',
    lineHeight: 21,
    color: colors.drakBlack,
  },
  appButtonText: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: size.small,
    // textAlign: 'center',
    lineHeight: 21,
    color: colors.drakBlack,
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
    width: '98%',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.theme_color,
    shadowColor: colors.theme_color,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  iconCon: {
    position: 'absolute',
    right: 20,
    top: 35,
  },
});
