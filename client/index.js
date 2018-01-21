import 'aws-sdk/dist/aws-sdk';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/reducers';
import Container from './components/Container';

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function listener() {
  /* eslint-disable no-console */
  console.log(store.getState(), 'store state');
}

store.subscribe(listener);

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

ReactDOM.render(
  <Component />,
  document.getElementById('content')
);
