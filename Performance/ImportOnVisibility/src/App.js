import React, { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
import "./styles.css";

import { Card } from "./components/Card";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
const Card3 = lazy(() =>
  import(
    /* webpackChunkName: "card3", webpackPrefetch: true */ "./components/Card3"
  )
);
const Card4 = lazy(() =>
  import(/*webpackChunkName: "card4" */ "./components/Card4")
);

const App = () => {
  return (
    <div className="App">
      <h1>Scroll down</h1>
      <Card1 />
      <Card2 />
      <Card>
        <div style={{ height: "900px", color: "white", fontFamily: "Inter" }}>
          ↓↓ Scroll down to dynamically load <code>Card3</code> and{" "}
          <code>Card 4</code> when they're visible in the viewport ↓↓
        </div>
      </Card>
      <DynamicCard component={Card3} name="Card3" />
      <DynamicCard component={Card4} name="Card4" />
    </div>
  );
};

function DynamicCard(props) {
  const Component = props.component;
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <Suspense fallback={<p id="loading">Loading...</p>}>
        {inView ? (
          <Component />
        ) : (
          <Card rendered={false}>
            <p>
              Click here to dynamically import <code>{props.name}</code>{" "}
              component
            </p>
          </Card>
        )}
      </Suspense>
    </div>
  );
}

export default App;
