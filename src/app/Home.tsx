import { View } from "react-native";
//import { StackRoutesProps } from "@/routes/StackRoutes";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";
//import { NativeStackScreenProps } from "@react-navigation/native-stack";
//import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";
import { StackRoutesList } from "@/routes/StackRoutes";

//type HomeProps = NativeStackScreenProps<StackRoutesList, "home">;

//export function Home({ navigation }: HomeProps) {
//export function Home({ navigation }: StackRoutesProps<"home">) {
export function Home({ navigation }: DrawerRoutesProps<"home">) {
  //const navigation = useNavigation();

  return (
    <View style={{ flex: 1, paddingTop: 32 }}>
      <Header>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "123" })}
        />
      </Header>
    </View>
  );
}
