import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Album from "../pages/album";
import Library from "../pages/library";

const appNavigator = createMaterialTopTabNavigator({
  Album,
  Library
});

export default createAppContainer(appNavigator);
