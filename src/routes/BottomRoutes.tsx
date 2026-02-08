import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type BottomRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type StackRoutesProps<T extends keyof BottomRoutesList> =
  BottomTabScreenProps<BottomRoutesList, T>;

const Tab = createBottomTabNavigator<BottomRoutesList>();

export function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2C46B1",
        tabBarInactiveTintColor: "#444444",
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
