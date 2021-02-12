import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WeatherWeek from './components/WeatherWeek';
import WeatherWeekDetail from './components/WeatherWeekDetail';


const screens = {
    WeatherWeek:{
        screen:WeatherWeek
    },
    WeatherWeekDetail:{
        screen:WeatherWeekDetail
    },
}
const WeatherWeekStack = createStackNavigator(screens);
export default createAppContainer(WeatherWeekStack);