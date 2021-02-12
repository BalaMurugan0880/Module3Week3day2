import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import weatherWeekStack from './weatherWeekStack';
import weatherTodayStack from './weatherTodayStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const RootTabNavigator = createBottomTabNavigator({
    WeatherToday:{
        screen:weatherTodayStack,
    },
    WeatherWeek:{
        screen:weatherWeekStack
    },
})

export default createAppContainer(RootTabNavigator);