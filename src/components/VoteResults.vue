<template>
  <div>
    <h1>Vote Results</h1>
    <div v-for="option in options" :key="option">
      <p>{{ option }}: {{ voteCounts[option] || 0 }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "VoteResults",
  data() {
    return {
      options: ['Orange', 'Green', 'Blue', 'Yellow'],
     voteCounts: {}
    }
  },
  methods: {
    async getVoteCounts() {
      try {
        const response = await axios.get('http://localhost:3000/votes');
        this.voteCounts = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    this.getVoteCounts();
  }
}
</script>