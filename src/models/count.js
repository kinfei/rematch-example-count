const count = {
  state: 0, // initial state
  reducers: {
    add(count) {
      return count + 1;
    },
    minus(count) {
      return count - 1;
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async increment({ payload, callback }, rootState) {
      console.log({ rootState, payload });
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch.count.add();

      if (callback) callback();
    },

    async decrement(_, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch.count.minus();
    },
  }),
};

export default count;
