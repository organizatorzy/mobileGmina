import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/config/navigation'
import { HOME_VIEW, COMPOST_LIST_VIEW, MANAGE_REWARDS_VIEW } from './src/config/paths'

import { HomeView } from './src/views/HomeView';
import { CompostListView } from './src/views/CompostListView';
import { ManageRewardsView } from './src/views/ManageRewardsView';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_VIEW}>
        <Stack.Screen name={HOME_VIEW} component={HomeView} options={{ headerShown: false }}/>
        <Stack.Screen name={COMPOST_LIST_VIEW} component={CompostListView} options={{ headerShown: false }} />
        <Stack.Screen name={MANAGE_REWARDS_VIEW} component={ManageRewardsView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


