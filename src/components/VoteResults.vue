
<template>
  <div>
    <h1>Thank you for your response</h1>

    <!-- Loop through sortedOptions to display result boxes for each option -->
    <div v-for="option in sortedOptions" :key="option">
      <div class="result-box">
        <div class="content">

          <p> {{ option }} </p>

          <div class="percentage-bar" :style="{ width: getPercentage(option) + '%' }"></div>

          <p class="percentage"> {{ getPercentage(option) }}% </p>

        </div>
      </div>
    </div>
    <router-link to="/">Home Page</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "VoteResults",
  data() {
    return {
      options: ['Arsenal', 'Manchester City', 'Liverpool'],
      voteCounts: {} // Object to store vote counts for each option
    }
  },
  methods: {
    // Fetch vote counts from the server
    async getVoteCounts() {
      try {
        const response = await axios.get('http://localhost:3000/votes');
        this.voteCounts = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    // Calculate the percentage of votes for a specific option
    getPercentage(option) {
      const totalVotes = Object.values(this.voteCounts).reduce((acc, count) => acc + count, 0);
      const votesForOption = this.voteCounts[option] || 0;
      return Math.round((votesForOption / totalVotes) * 100);
    }
  },
  computed: {
    // Sort options based on the number of votes in descending order
    sortedOptions() {
      return this.options.slice().sort((a, b) => (this.voteCounts[b] || 0) - (this.voteCounts[a] || 0) || 0);
    }
  },
  created() {
    // Fetch vote counts when the component is created
    this.getVoteCounts();
  }
}
</script>

