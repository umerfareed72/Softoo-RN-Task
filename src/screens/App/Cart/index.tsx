import {NavigationProp} from '@react-navigation/core';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {AppHeader, CategoryItemCard} from '../../../components';
import {
  addProductAction,
  delProductAction,
  removeProductAction,
} from '../../../redux/actions';
import {appIcons} from '../../../utilities';
import styles from './styles';

interface CartProps {
  navigation: NavigationProp<any>; // Replace `any` with your specific navigation type
}
const Cart: React.FC<CartProps> = ({navigation}) => {
  const {shopped_products} = useSelector((state: any) => state.products);
  const dispatch: Dispatch<any> = useDispatch();

  const onRemoveItem = (item: any, index: number) => {
    const data = {
      item: item,
      index: index,
    };
    dispatch(removeProductAction(data));
  };

  const onAddItem = (item: any, index: number) => {
    const data = {
      item: item,
      index: index,
    };
    dispatch(addProductAction(data));
  };

  const onDelItem = (item: any, index: number) => {
    const body = {
      item: item,
      index: index,
    };
    dispatch(delProductAction(body));
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.content}>
        <AppHeader
          title={'Shopping'}
          leftIcon={appIcons.backIcon}
          onPress={() => {
            navigation?.goBack();
          }}
        />

        <View style={styles.categoryCon}>
          <FlatList
            data={shopped_products}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={styles.categoryItem}>
                  <CategoryItemCard
                    bgColor={item?.colour}
                    title={item?.name}
                    price={item?.price}
                    quantity={item?.quantity}
                    onPressAdd={() => {
                      onAddItem(item, index);
                    }}
                    onPressDelCat={() => {
                      onDelItem(item, index);
                    }}
                    onPressMinus={() => {
                      if (item?.quantity > 1) {
                        onRemoveItem(item, index);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
