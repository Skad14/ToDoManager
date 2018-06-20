import { createStackNavigator } from 'react-navigation'
import Register from 'pages/register'
import Login from 'pages/login'

const RootStack = createStackNavigator({
  Register: {
    screen: Register,
  },
  Login: {
    screen: Login,
  },
}, {
  initialRouteName: 'Login',
})

export default RootStack
