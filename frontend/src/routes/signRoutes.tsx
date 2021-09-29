import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/login";
import { Register } from "../screens/register";

const { Navigator, Screen } = createStackNavigator();

export function SignRoutes() {
    return (
        <Navigator>
            <Screen name="login" component={Login} />
            <Screen name="register" component={Register} />
        </Navigator>
    )
}