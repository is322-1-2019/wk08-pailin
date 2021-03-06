import { getters } from "./getters";
import { actions } from "./actions-offline";
import { mutations } from "./mutations";

const state = {
  people: [],
  status: null,
};

const namespaced = true;

export const people = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
