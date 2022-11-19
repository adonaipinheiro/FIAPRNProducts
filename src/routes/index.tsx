import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import type {StackNavigationProp} from '@react-navigation/stack';
import type {DrawerNavigationProp} from '@react-navigation/drawer';

// Screens
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Products from '../screens/Products';
import Favorites from '../screens/Favorites';
import ProductDetail from '../screens/ProductDetail';

export type RouterStackProp = StackNavigationProp<RouterStackParamList>;
export type LoggedRouterProp = DrawerNavigationProp<LoggedRouterParamList>;
export type ProductsRouterProp = StackNavigationProp<ProductsRouterParamList>;

type RouterStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

type LoggedRouterParamList = {
  ProductsRouter: undefined;
  Favorites: undefined;
};

type ProductsRouterParamList = {
  Products: undefined;
  ProductDetail: undefined;
};

const Drawer = createDrawerNavigator<LoggedRouterParamList>();
const RouterStack = createStackNavigator<RouterStackParamList>();
const Stack = createStackNavigator<ProductsRouterParamList>();

function ProductsRouter() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function LoggedRouter() {
  return (
    <Drawer.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Drawer.Screen name="ProductsRouter" component={ProductsRouter} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
}

function Router() {
  return (
    <RouterStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <RouterStack.Screen name="SignIn" component={SignIn} />
      <RouterStack.Screen name="SignUp" component={SignUp} />
      <RouterStack.Screen name="Dashboard" component={LoggedRouter} />
    </RouterStack.Navigator>
  );
}

export default Router;
