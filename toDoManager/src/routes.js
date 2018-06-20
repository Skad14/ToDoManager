import { createStackNavigator } from 'react-navigation'
import Register from 'pages/register'

const RootStack = createStackNavigator({
  Register: {
    screen: Register,
  },
})

export default RootStack
