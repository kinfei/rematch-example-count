import { init } from "@rematch/core";
import createLoading from "@rematch/loading";

import * as models from "../models";

const store = init({
  models,
  plugins: [
    createLoading({
      name: "loading", // this creates a model called 'loading'
    }),
  ],
  redux: {
    devtoolOptions: {
      // disabled: !(
      //   !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      // ),
      disabled: false,
    },
  },
});

export default store;
