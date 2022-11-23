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
import FavoriteProductDetail from '../screens/FavoriteProductDetail';
import ProductDetail from '../screens/ProductDetail';

// CustomDrawer
import CustomDrawer from '../components/CustomDrawer';

export type RouterStackProp = StackNavigationProp<RouterStackParamList>;
export type LoggedRouterProp = DrawerNavigationProp<LoggedRouterParamList>;
export type ProductsRouterProp = StackNavigationProp<ProductsRouterParamList>;
export type FavoriteProductsRouterProp =
  StackNavigationProp<FavoriteProductsRouterParamList>;

type RouterStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

type LoggedRouterParamList = {
  ProductsRouter: undefined;
  FavoritesStack: undefined;
};

export type ProductsRouterParamList = {
  Products: undefined;
  ProductDetail: {
    id: string;
  };
};

export type FavoriteProductsRouterParamList = {
  Favorites: undefined;
  FavoriteProductDetail: {
    id: string;
  };
};

const Drawer = createDrawerNavigator<LoggedRouterParamList>();
const RouterStack = createStackNavigator<RouterStackParamList>();
const Stack = createStackNavigator<ProductsRouterParamList>();
const StackFav = createStackNavigator<FavoriteProductsRouterParamList>();

function ProductsRouter() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: true,
        headerTintColor: '#2f9702',
      })}>
      <Stack.Screen
        options={{title: 'Lista de Produtos'}}
        name="Products"
        component={Products}
      />
      <Stack.Screen
        options={{title: 'Detalhes', headerBackTitle: 'Voltar'}}
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}

function FavoriteProductsRouter() {
  return (
    <StackFav.Navigator
      screenOptions={() => ({
        headerShown: true,
        headerTintColor: '#2f9702',
      })}>
      <StackFav.Screen
        options={{title: 'Lista de Favoritos'}}
        name="Favorites"
        component={Favorites}
      />
      <StackFav.Screen
        options={{title: 'Detalhes', headerBackTitle: 'Voltar'}}
        name="FavoriteProductDetail"
        component={FavoriteProductDetail}
      />
    </StackFav.Navigator>
  );
}

function LoggedRouter() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={() => ({
        headerShown: true,
        drawerType: 'front',
        headerStyle: {
          backgroundColor: '#2f9702',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#2f9702',
      })}>
      <Drawer.Screen
        options={{
          title: 'FIAP Market',
        }}
        name="ProductsRouter"
        component={ProductsRouter}
      />
      <Drawer.Screen
        options={{
          title: 'Favoritos',
        }}
        name="FavoritesStack"
        component={FavoriteProductsRouter}
      />
    </Drawer.Navigator>
  );
}

function Router() {
  return (
    <RouterStack.Navigator
      initialRouteName="SignIn"
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
