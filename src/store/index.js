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
});

export default store;
