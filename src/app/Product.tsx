import { View } from "react-native";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
//import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";
import { StackRoutesList } from "@/routes/StackRoutes";

//type RouteParams = StackRoutesProps<"product">;
type ProductProps = NativeStackScreenProps<StackRoutesList, "product">;

//export function Product({ navigation }: ProductProps) {
export function Product({ navigation, route }: StackRoutesProps<"product">) {
  //export function Product({ navigation }: StackRoutesProps<"product">) {
  //const { params } = useRoute<RouteParams["route"]>();
  //const navigation = useNavigation();

  return (
    <View style={{ flex: 1, paddingTop: 32 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product {route.params?.id}</Title>
        {/*<Title>Product {params?.id}</Title>*/}
      </Header>
    </View>
  );
}
