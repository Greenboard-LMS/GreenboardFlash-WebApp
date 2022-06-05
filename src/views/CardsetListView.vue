<script>
export default {
  data() {
    return {
      cardsets: [
        {
          title: "Cardset Title",
          topicId: 1
        }
      ],
      topics: [
        {
          id: 1,
          title: "Physics"
        },
        {
          id: 2,
          title: 'Math'
        }
      ]
    }
  },
  computed: {
    cardsets() {
      return this.$store.state.cardsets
    }
  }
}
</script>

<template>
  <main>
    <h1>My Flashcards</h1>
    <ul>
      <li v-for="topic in topics">
        <h2>{{ topic.title }}</h2>
        <ul>
          <li v-for="cardset in topic.cardsets">
            <router-link :to="'/cardset/' + cardset.id">{{ cardset.title }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </main>

</template>

<style>
</style>