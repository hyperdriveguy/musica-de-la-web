import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import ComponentsScreen  from "./ComponentScreen";
import ListScreen from "./ListScreen";
import ImageScreen from "./ImageScreen";
import CounterScreen from "./CounterScreen";
import ColorScreen from "./ColorScreen";
import SquareScreen from "./SquareScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
