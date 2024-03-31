import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerActions, ParamListBase} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader, AppHeading, HomeCard} from '../../../components';
import {
  addProductAction,
  getAllProductAction,
  shopProductAction,
} from '../../../redux/actions';
import {appIcons} from '../../../utilities';
import styles from './styles';

interface HomeProps {
  navigation: DrawerNavigationProp<ParamListBase>; // Replace `any` with your specific navigation type
}
const Home: React.FC<HomeProps> = ({navigation}) => {
  const {products, shopped_products} = useSelector(
    (state: any) => state.products,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    const body = {
      onSuccess: (res: any) => {},
      onFailure: () => {},
    };
    dispatch(getAllProductAction(body));
  };

  const onAddItem = (item: any, index: number) => {
    const itemWithQuantity = {
      ...item,
      quantity: 1,
      product_index: index,
    };

    const data = {
      item: itemWithQuantity,
      index: index,
    };
    dispatch(shopProductAction(data));
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.content}>
        <AppHeader
          title={'Home'}
          leftIcon={appIcons.menu}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
          rightText={`Cart (${shopped_products?.length})`}
          onPressRightText={() => {
            navigation?.navigate('Cart');
          }}
        />

        <View>
          <AppHeading title={'List of All Products'} />
          <FlatList
            data={products}
            renderItem={({item, index}) => {
              return (
                <View>
                  <HomeCard
                    color={item?.colour}
                    title={`Title: ${item?.name || ''}`}
                    text={`Price: ${item?.price}`}
                    onPress={() => {}}
                    onAddItem={() => {
                      onAddItem(item, index);
                    }}
                    purchased={item?.purchased}
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

export default Home;
