<template>
    <div>
        <h1>Who will win the Priemier League?</h1>
         <div class="sidebar">
            <!-- <button  v-for="option in options" :key="option" @click="vote(option)">{{ option }}</button> -->
            <button @click="vote(option1)"  :class="{ 'selected': selectedOption === option1 }">{{ option1 }}</button>
            <button @click="vote(option2)"  :class="{ 'selected': selectedOption === option2 }" >{{ option2 }}</button>
            <button @click="vote(option3)"  :class="{ 'selected': selectedOption === option3 }">{{ option3 }}</button>
            <button @click="sendVoteToServer()">Submit</button>
         </div>
    </div>
</template>

<script>
import axios from 'axios'; // Make sure to install axios with npm install axios

export default {
    name: "VotingPage",
    data() {
        return {
            votes: 0,
            selectedOption: null,
            option1: 'Liverpool',
            option2: 'Manchester City',
            option3: 'Arsenal',
            // options: ['Liverpool', 'Manchester City', 'Arsenal'] // Add or remove options as needed
        }
    },
    methods: {
         vote(option) {
             this.selectedOption = option;
        //     this.votes++;
        //     this.sendVoteToServer();
        },
        async sendVoteToServer() {
            try {
                const response = await axios.post('http://localhost:3000/vote', {
                   selectedOption: this.selectedOption,
                    // option1:this.selectedOption,
                    // option2:this.selectedOption,
                    // option3:this.selectedOption,
                    // option: this.selectedOption
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<style scoped>
button{
  width: 70%;
  height: 50px;
  /* display:block; */
  align-items: center;
  font-size: 100%;
  opacity: 50%;
  outline: 100%;
  outline-color: white;
}
.selected {
    background-color: white; /* Change this to the color you want for the selected button */
    opacity: 1;
    border-radius: 7px;
    box-sizing: border-box;
  font-weight: normal;
}

</style>
