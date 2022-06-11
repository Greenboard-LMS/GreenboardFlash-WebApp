<script>
export default {
  data() {
    return {
      submitted: false,
      planName: '',
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
    createPlan() {
      this.submitted = true;
    },
    async fetchCardsets() {
      this.cardsets = null;
      const response = await fetch("https://greenboardflash-backend.herokuapp.com/flash/cardsets/", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + '342676e92cbfffb7741ac1df499acc28cb27528a'
        }
      });
      this.cardsets = await response.json();
    }
  },
  mounted() {
    // this.fetchCardsets();
  }
}
</script>

<template>
  <form v-if="!submitted" @submit.prevent="createPlan">
    <h2>{{ planName }}</h2>
    <p>
      <input placeholder="Plan Name" v-model="planName" size="100" />
    </p>
    <p>
      <label>Select cardsets</label>
      <select v-model="selectedCardsets" multiple>
        <option v-for="cardset in cardsets" :value="cardset.title">{{ cardset.title }}</option>
      </select>
    </p>
    
    <p>
      <button>Create Plan</button>
    </p>
  </form>
  <div v-else>
    <h1>Study plan generated!</h1>
    <p>6/6/2022 - Heredity</p>
    <p>6/8/2022 - Trigonometric Integrals</p>
    <p>6/10/2022 - Exam Day</p>
  </div>

  
</template>

<style>
form,
form * {
  padding: 1em;
}

label {
  display: block;
}
</style>
