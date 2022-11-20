import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {HOME_VIEW,SUCCESS_VIEW, ERROR_VIEW, ADD_REWARD, COMPOST_DETAILS, COMPOST_LIST_VIEW, MANAGE_REWARDS_VIEW, EXECUTE_REWARDS_VIEW , REMOVE_REWARD_VIEW} from './paths'
import {Compost, Reward} from '../../types'

export const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    [HOME_VIEW]: undefined;
    [ADD_REWARD]: undefined;
    [COMPOST_LIST_VIEW]: { refresh: boolean };
    [COMPOST_DETAILS]: { item: Compost };
    [MANAGE_REWARDS_VIEW]: undefined;
    [ERROR_VIEW]: undefined;
    [SUCCESS_VIEW]: undefined;
    [EXECUTE_REWARDS_VIEW]: undefined;
    [REMOVE_REWARD_VIEW]: { item: Reward };
  };

  export type RouterProps = NativeStackScreenProps<RootStackParamList>;