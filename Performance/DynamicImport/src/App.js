import React, { Suspense, lazy } from 'react';
import './styles.css';

import { Card } from './components/Card';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
const Card3 = lazy(() =>
  import(/*webpackChunkName: "card3" */ './components/Card3')
);
const Card4 = lazy(() =>
  import(/*webpackChunkName: "card4" */ './components/Card4')
);

const App = () => {
  return (
    <div className="App">
      <Card1 />
      <Card2 />
      <DynamicCard component={Card3} name="Card3" />
      <DynamicCard component={Card4} name="Card4" />
    </div>
  );
};

function DynamicCard(props) {
  const [open, toggle] = React.useReducer((s) => !s, false);
  const Component = props.component;

  return (
    <Suspense fallback={<p id="loading">Loading...</p>}>
      {open ? (
        <Component />
      ) : (
        <Card rendered={false} onClick={toggle}>
          <p>
            Click here to dynamically import <code>{props.name}</code> component
          </p>
        </Card>
      )}
    </Suspense>
  );
}

export default App;
