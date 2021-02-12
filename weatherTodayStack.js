import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WeatherToday from './components/WeatherToday';

const screens = {
    WeatherToday:{
        screen:WeatherToday
    },
}
const WeatherTodayStack = createStackNavigator(screens);
export default createAppContainer(WeatherTodayStack);