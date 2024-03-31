import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {colors, size, spacing} from '../../utilities';
import {MyStatusBar} from '../Bar/MyStatusBar';
import {AppHeading} from '../Headings/AppHaeding';

export const DrawerComponent = ({navigation}: any) => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.white} />
      <SafeAreaView style={styles.mainContainer}>
        <View style={[spacing.mt6, spacing.p2]}>
          <AppHeading title={'Softoo'} marginBottom={20} />

          <View>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('Home');
              }}
              style={[styles.card]}>
              <Text style={styles.text}>Dashboard</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.light_green,
  },
  text: {
    fontSize: size.normal,
    fontWeight: '500',
  },
  card: {
    marginHorizontal: 10,
  },
  lineStyle: {
    borderWidth: 0.4,
    borderColor: colors.g5,
    marginVertical: 10,

    // borderBottomColor: '#73C58D',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // margin: 20,
  },
});
