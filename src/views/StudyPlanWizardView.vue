<script>
export default {
  data() {
    return {
      planName: ''
    }
  },
  methods: {
    createPlan() {
      this.$store.dispatch('createPlan', this.planName)
    }
  }
}
</script>

<template>
  <form @submit.prevent="createPlan">
    <h2>{{ planName }}</h2>
    <input placeholder="Plan Name" v-model="planName" />
    <textarea placeholder="Enter topics" v-model="classData"></textarea>
    <button>Create Plan</button>
  </form>
</template>

<style>
form, form * {
  padding: 1em;
  border: 1px solid white;
  color: white;
  background: transparent;
}
</style>
