<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <figure>
      <img alt="Greenboard logo" src="@/assets/logo.png" height="100" />
      <h1>Greenboard Flash</h1>
    </figure>

    <nav>
      <RouterLink to="/study-plan-wizard"><img src="@/assets/studyplan.png" height="40" />Study Plan</RouterLink>
      <RouterLink to="/flashcards"><img src="@/assets/flash-cards.png" height="40" />My Flashcards</RouterLink>
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

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}

figure h1 {
  font-size: 20px;
  color: white;
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
}

nav a {
  display: flex;
  align-items: center;
  color: white;
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

  #app > * {
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

  figure {
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
