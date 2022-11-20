import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/config/navigation'
import { HOME_VIEW,SUCCESS_VIEW, ERROR_VIEW, COMPOST_LIST_VIEW, MANAGE_REWARDS_VIEW, COMPOST_DETAILS, ADD_REWARD, REMOVE_REWARD_VIEW, EXECUTE_REWARDS_VIEW } from './src/config/paths'

import { HomeView } from './src/views/HomeView';
import { CompostListView } from './src/views/CompostListView';
import { ManageRewardsView } from './src/views/ManageRewardsView';
import { CompostAcceptView } from './src/views/CompostAcceptView';
import { AddRewardView } from './src/views/AddRewardView';
import { RemoveRewardView } from './src/views/RemoveRewardView';
import { ExecuteRewardView } from './src/views/ExecuteRewardView';
import { SuccessView } from './src/views/SuccessView';
import { ErrorView } from './src/views/ErrorView';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_VIEW}>
        <Stack.Screen name={HOME_VIEW} component={HomeView} options={{ headerShown: false }}/>
        <Stack.Screen name={COMPOST_LIST_VIEW} component={CompostListView} options={{ headerShown: false }} />
        <Stack.Screen name={COMPOST_DETAILS} component={CompostAcceptView} options={{ headerShown: false }} />
        <Stack.Screen name={MANAGE_REWARDS_VIEW} component={ManageRewardsView} options={{ headerShown: false }} />
        <Stack.Screen name={ADD_REWARD} component={AddRewardView} options={{ headerShown: false }} />
        <Stack.Screen name={REMOVE_REWARD_VIEW} component={RemoveRewardView} options={{ headerShown: false }} />
        <Stack.Screen name={EXECUTE_REWARDS_VIEW} component={ExecuteRewardView} options={{ headerShown: false }} />
        <Stack.Screen name={SUCCESS_VIEW} component={SuccessView} options={{ headerShown: false }} />
        <Stack.Screen name={ERROR_VIEW} component={ErrorView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


