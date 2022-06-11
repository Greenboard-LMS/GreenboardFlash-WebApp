<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    navItemActive(to) {
      return this.$route.path.includes(to);
    }
  },
  computed: {
    darkMode() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }
}
</script>

<template>
  <header>
    <figure>
      <RouterLink to="/">
        <img alt="Greenboard logo" src="@/assets/logo.png" height="100" />
        <h1>Greenboard Flash</h1>
      </RouterLink>
    </figure>

    <nav>
      <RouterLink to="/study-plan">
        <img v-show="darkMode || navItemActive('study-plan')" src="@/assets/studyplan.png" height="40" />
        <img v-show="!darkMode && !navItemActive('study-plan')" src="@/assets/studyplan-dark.png" height="40" />
        Study Plan
      </RouterLink>
      <RouterLink to="/flashcards">
        <img v-show="darkMode || navItemActive('flashcards')" src="@/assets/flashcards.png" height="40" />
        <img v-show="!darkMode && !navItemActive('flashcards')" src="@/assets/flashcards-dark.png" height="40" />
        My Flashcards
      </RouterLink>
      <RouterLink to="/explore">
        <img v-show="darkMode || navItemActive('explore')" src="@/assets/explore.png" height="40" />
        <img v-show="!darkMode && !navItemActive('explore')" src="@/assets/explore-dark.png" height="40" />
        Explore
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  padding: 2rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
}

figure>* {
  display: flex;
  flex-direction: column;
  align-items: center;
}

figure h1 {
  font-size: 20px;
  color: var(--color-heading);
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

nav a.router-link-exact-active {
  background-color: green;
  color: white;
}

nav a {
  display: flex;
  align-items: center;
  color: var(--color-heading);
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  margin: 1em;
  padding: 1em;
  font-size: 1em;
  border: none;
  border-radius: 10px;
}

nav a img {
  margin-right: 1rem;
}

@media (min-width: 1024px) {
  #app {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 0;
  }

  #app>* {
    padding: 2em;
  }

  header {
    display: flex;
    place-items: flex-start;
    flex-direction: column;
    padding-right: calc(var(--section-gap) / 2);
    position: fixed;
    left: 0;
    z-index: 5;
  }

  figure>* {
    flex-direction: row;
  }

  main {
    background-color: white;
    color: black;
    grid-column: 2;
    min-height: 100vh;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  nav a {
    margin: 5px 0;
  }
}
</style>
