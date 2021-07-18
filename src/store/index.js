import { createStore } from "vuex";

const tickets = [
  { price: 100.00, airline: 'KLM', stopover: 3, duration: 3 },
  { price: 230.34, airline: 'Delta', stopover: 1, duration: 5 },
  { price: 150.12, airline: 'American Airlines', stopover: 2, duration: 4 },
  { price: 400.00, airline: 'United Airlines', stopover: 1, duration: 8 },
  { price: 375.34, airline: 'Virgin America', stopover: 3, duration: 7 },
  { price: 150.65, airline: 'AirTran Holdings', stopover: 1, duration: 4 },
  { price: 120.56, airline: 'Southwest Airlines', stopover: 2, duration: 4 },
  { price: 310.05, airline: 'IAN', stopover: 3, duration: 7 }
]

export default createStore({
  state: {
    tickets
  },
  mutations: {},
  actions: {},
  modules: {},
});
