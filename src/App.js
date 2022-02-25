import { connect } from "react-redux";

import { Button } from "antd";

import "./App.css";

function App({ count, dispatch, incrementLoading, decrementLoading }) {
  return (
    <div className="wrapper">
      Current count is {count}
      <div className="btnWrapper">
        <Button
          type="primary"
          loading={incrementLoading}
          onClick={() =>
            dispatch.count.increment({
              payload: { hehe: 1 },
              callback: () => console.log(`in callback`),
            })
          }
        >
          Increment
        </Button>

        <Button
          danger
          loading={decrementLoading}
          onClick={() => dispatch.count.decrement()}
        >
          Minus
        </Button>
      </div>
    </div>
  );
}

export default connect(({ count, loading }) => ({
  count,
  incrementLoading: loading.effects.count.increment,
  decrementLoading: loading.effects.count.decrement,
}))(App);
