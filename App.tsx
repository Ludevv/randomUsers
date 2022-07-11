import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {APP_ROUTES, RootAppParamList} from './lib/constants/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const RootStack = createNativeStackNavigator<RootAppParamList>();

type GlobalNavigationProps = NavigationProp<RootAppParamList>;

export type ScreenNavigationProps<T extends keyof RootAppParamList> =
  NativeStackScreenProps<RootAppParamList, T>;

export const useAppNavigation = () => useNavigation<GlobalNavigationProps>();

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Group>
          {APP_ROUTES.map(route => (
            <RootStack.Screen
              key={`${route.name}-screen`}
              {...(route as any)}
            />
          ))}
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
