 
<template>
    <div id="app">
        <div class="logo">
            <img src="/Users/sahmed/Downloads/votingapp-main/src/assets/logo.png" alt="Dizplai logo">
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
   
}
</script>

<style>
/* global styles */
body {
    background-image: url('src/assets/background.jpg');
    color: white;
    text-align: center;
    font-family: Outfit, sans-serif;
}

button {
    margin-bottom: 3%;
    text-align: center;
    color: white;
    width: 59%;
    font-size: 100%;
    padding: 2%;
    border: 1px solid #8C8C8C;
    display: flex;
    justify-content: center;
    border-radius: 7px;
    background-color: transparent;
}

.result-box {
    margin-bottom: 2%;
    /* max-width: 75%; */
    margin-left: 10%;
    margin-right: 10%;
    padding: 2%;
    border: 1px solid #8C8C8C;
    display: flex;
    justify-content: center;
    border-radius: 7px;
    position: relative; /*  position: relative to make percentage-bar absolute positioning relative to result-box */
    overflow: hidden; /*  overflow: hidden to prevent percentage-bar from overflowing result-box */
}

img {
    display: inline-block;
    size: auto;
    margin-top: 3%;
}

.content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.percentage-bar {
    border-radius: 7px;
    height: 100%; 
    max-width: 50%;
    background-color: #996BF9;
    opacity: 50%;
    position: absolute;
    bottom: 0; /* Position the percentage-bar at the bottom of result-box */
    left: 0;
    width: 100%; /* Make percentage-bar span the entire width of result-box */
}

.percentage {
    margin-left: 70%;
    display: flex;
    justify-content: flex-end;
}


.header{
    text-align: center;
    text-size-adjust: 200%;
    font-family: Outfit,sans-serif;
}

.sidebar{
    display:flex;
    align-items: center;
    flex-direction: column;
    color: #FFFFFF;
    border: #8C8C8C;
    
}
#option {
  width: 55%;
  margin-bottom: 2%;
  padding: 2%;
  border: 1px solid #8C8C8C;
  display: flex;
  justify-content: center;
  border-radius: 7px;
  
}
.selected {
    background-color: #FFFFFF; 
    width: 50%;
    opacity: 1;
    border-radius: 7px;
    font-weight: normal;
    color: #996BF9;
}
</style>

