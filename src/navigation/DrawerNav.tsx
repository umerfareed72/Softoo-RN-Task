import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import {DrawerComponent} from '../components';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const initialRoute = 'HomeStack';
const DrawerNav: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerComponent {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName={initialRoute}>
      <Drawer.Screen name="Dashboard" component={HomeStack} />
    </Drawer.Navigator>
  );
};
export default DrawerNav;
export const styles = StyleSheet.create({});
