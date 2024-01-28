import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue"; 
import VotingPage from "./components/VotingPage.vue";
import VoteResults from "./components/VoteResults.vue";

const routes = [
  {
    path: "/",
    component: VotingPage,
  },
  {
    path: "/votes",
    component: VoteResults,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
