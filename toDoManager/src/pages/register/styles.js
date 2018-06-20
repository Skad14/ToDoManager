import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  topo: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
  },

  image: {
    width: 50,
    height: 50,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  form: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
  },

  input: {
    marginHorizontal: metrics.baseMargin * 3,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderBottomColor: colors.button,
    borderBottomWidth: 0.5,
  },

  button: {
    marginHorizontal: metrics.baseMargin * 3,
    backgroundColor: colors.button,
    borderRadius: metrics.baseRadius,
    alignSelf: 'stretch',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },

  buttonText: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
  },
});

export default styles;
