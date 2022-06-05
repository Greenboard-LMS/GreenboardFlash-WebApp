<script>
export default {
  data() {
    return {
      cardsets: [
        {
          id: 1,
          title: "Cellular Biology",
          topicId: 1,
          flashcards: [
            {
              term: 'Lysosomes',
              definition: 'Break down macromolecules and viruses that are in the cell',
            },
            {
              term: 'Mitochondria',
              definition: 'The powerhouse of the cell',
            }
          ],
          user: {
            id: 1,
            name: 'John Doe',
          }
        },
        {
          id: 2,
          title: "Heredity",
          topicId: 1,
          flashcards: [],
          user: {
            id: 1,
            name: 'John Doe'
          }
        },
        {
          id: 3,
          title: "Trigonometric Integrals",
          topicId: 2,
          flashcards: [
            {
              term: 'cos(x)',
              definition: 'sin(x)'
            },
            {
              term: '-sin(x)',
              definition: 'cos(x)'
            },
            {
              term: 'sec^2(x)',
              definition: 'tan(x)'
            }
          ],
          user: {
            id: 1,
            name: "John Doe"
          }
        },
        {
          id: 4,
          title: "The Gilded Age",
          topicId: 3,
          flashcards: [],
          user: {
            id: 1,
            name: "John Doe"
          }
        },
        {
          id: 5,
          title: "The Renaissance",
          topicId: 3,
          flashcards: [],
          user: {
            id: 1,
            name: "John Doe"
          }
        },
        {
          id: 6,
          title: "Julius Caesar",
          topicId: 4,
          flashcards: [],
          user: {
            id: 1,
            name: "John Doe"
          }
        },
        {
          id: 7,
          title: "One Flew Over the Cuckoo's Nest",
          topicId: 4,
          flashcards: [],
          user: {
            id: 1,
            name: "John Doe"
          }
        },
        {
          id: 8,
          title: "The Lord of the Flies",
          topicId: 4,
          flashcards: [],
          user: {
            id: 1,
            name: "John Doe"
          }
        },
        {
          id: 9,
          title: "The Catcher in the Rye",
          topicId: 4,
          flashcards: [],
          user: {
            id: 1,
            name: "John Doe"
          }
        },
        {
          id: 10,
          title: "Chapter 1 Volkabeln",
          topicId: 5,
          flashcards: [
            {
              term: "Guten Tag!",
              definition: "Hello - formal",
            },
            {
              term: "Hallo!",
              definition: "Hello - informal",
            },
            {
              term: "Wie geht es Ihnen?",
              definition: "How are you? - formal",
            },
            {
              term: "Wie geht's?",
              definition: "How are you? - informal",
            }
          ],
          user: {
            id: 1,
            name: "John Doe"
          }
        }
      ],
      topics: [
        {
          id: 1,
          title: "Science"
        },
        {
          id: 2,
          title: 'Math'
        },
        {
          id: 3,
          title: 'History'
        },
        {
          id: 4,
          title: 'Literature'
        },
        {
          id: 5,
          title: 'German'
        }
      ]
    }
  },
  methods: {
    cardsetsInTopic(id) {
      return this.cardsets.filter(cardset => cardset.topicId === id)
    }
  }
}
</script>

<template>
  <main>
    <h1>My Flashcards</h1>
    <ul class="flashcards-by-topic">
      <li :key="topic.id" v-for="topic in topics">
        <h2 class="topic-title">{{ topic.title }}</h2>
        <ul class="flashcards-of-topic">
          <li v-for="cardset in cardsetsInTopic(topic.id)">
            <router-link :to="'/cardset/' + cardset.id">
              <h3 class="cardset-title">{{ cardset.title }}</h3>
              <p>{{ cardset.flashcards.length }} flashcards</p>
              <p>@{{ cardset.user.name }}</p>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </main>

</template>

<style>
.flashcards-by-topic {
  list-style: none;
  padding: 0;
}

.flashcards-of-topic {
  display: flex;
  flex-wrap: wrap;
  margin: 1em 0;
  padding-inline-start: 0;
}

.flashcards-of-topic li {
  list-style: none;
  border: 3px solid grey;
  padding: 1em;
  border-radius: 10px;
  flex: 1 1 200px;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
}

.flashcards-of-topic li:hover {
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
}

.cardset-title {
  color: white;
  font-weight: bold;
}

.topic-title {
  text-transform: uppercase;
}

.flashcards-by-topic * {
  color: white;
}

@media screen and (min-width: 1024px) {
  .cardset-title {
    color: black;
  }

  .topic-title {
    color: grey;
  }

  .size-of-deck {
    color: lightgrey;
  }

  .flashcards-of-topic li>*>*:not(.cardset-title) {
    color: var(--vt-c-text-light-2);
  }
}
</style>