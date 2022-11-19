import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {HOME_VIEW, ADD_REWARD, COMPOST_DETAILS, COMPOST_LIST_VIEW, MANAGE_REWARDS_VIEW } from './paths'

export const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    [HOME_VIEW]: undefined;
    [ADD_REWARD]: undefined;
    [COMPOST_LIST_VIEW]: undefined;
    [COMPOST_DETAILS]: undefined;
    [MANAGE_REWARDS_VIEW]: undefined;
  };

  export type RouterProps = NativeStackScreenProps<RootStackParamList>;