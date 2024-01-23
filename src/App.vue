<template>
    <div id="app">
        <link href="https://fonts.googleapis.com/css?family=Outfit&display=swap" rel="stylesheet">
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
body{
    background-image: url('src/assets/background.jpg');
    color: white;
    text-align: center;
    text-size-adjust: 200%;
    font-family: Outfit,sans-serif;

}
button {
  display:inline-block;
  margin-bottom: 10px;
  text-align: center;
}

img{
display: inline-block;
size:auto;
margin-top: 2%;
}
</style>
