<template>
    <div>
        <h1 class="header">Who will win the Premier League?</h1>
        <div class="sidebar"> <!-- Sidebar containing voting options and submit button -->
            <div @click="vote(option1)" :class="{ 'selected': selectedOption === option1 }" id="option">{{ option1 }}</div>
            <div @click="vote(option2)" :class="{ 'selected': selectedOption === option2 }" id="option">{{ option2 }}</div>
            <div @click="vote(option3)" :class="{ 'selected': selectedOption === option3 }" id="option">{{ option3 }}</div>
            <button @click="sendVoteToServer()">Submit</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "VotingPage",
    data() {
        return {
            selectedOption: null,
            option1: 'Arsenal',
            option2: 'Manchester City',
            option3: 'Liverpool',
        }
    },
    methods: { 
        vote(option) { // Method to update the 'selectedOption' when a user clicks on an option.
            this.selectedOption = option;
        },
        async sendVoteToServer() { // Used to send the selected option to the server
            if (!this.selectedOption) {
                alert('Please select an option before submitting.');
                return;
            }
            try { // Send the selected option to the server
                const response = await axios.post('http://localhost:3000/vote', {
                    selectedOption: this.selectedOption,
                });
                console.log(response.data);
                // Redirect to the '/votes' route after successful submission
                this.$router.push({ path: '/votes' });
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.error('Request canceled:', error.message);
                } else {
                    console.error('AxiosError:', error.message);
                }
            }
        }
    }
}
</script>