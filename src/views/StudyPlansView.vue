<script>
export default {
  data() {
    return {
      plans: [
        {
          id: 1,
          name: 'Bio Final',
          description: 'Final exam for Biology',
          cardsets: [{
            id: 1,
            title: "Cellular Biology"
          }, {
            id: 2,
            title: "Heredity"
          }, {
            id: 3,
            title: "Molecular Genetics"
          }],
        }
      ],
    }
  },
  methods: {
    async fetchStudyplans() {
      const response = await fetch("https://greenboardflash-backend.herokuapp.com/studyplans/", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + '342676e92cbfffb7741ac1df499acc28cb27528a'
        }
      });
      this.plans = await response.json();
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="(plan, index) in plans">
      <div class="plan-header">
        <h3>{{ plan.name }}</h3>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div class="plan-body">
        <p>{{ plan.description }}</p>
      </div>
    </li>
  </ul>
  <RouterLink to="/study-plan-wizard">Create New Study Plan</RouterLink>
</template>