<template>
    <div class="nav">
        <h2 class="title">TryOut</h2>
        <div v-if="store.name" class="name">
            <img src="../assets/user.png" class="img-user">
            <p>Hello, {{ store.name }}</p>
        </div>
        <div class="signin" v-else>
            <button id="sign-up" class="signin-button" @click="signup">Sign Up</button>
            <button id="log-in" class="signin-button">Login</button>
        </div>
        
    </div>
</template>

<script setup>
import axiosRequest from '../../axios_api';
import { useStore } from '@/stores/index'; 
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const email = urlParams.get("email");
const store = useStore();

store.setName(name);
store.setEmail(email);
console.log("Name: ", store.name);
console.log("Email: ", store.email);
async function signup(){
    const response = await axiosRequest.get("/login/google");
    console.log(response.data.url);
    window.location.href = response.data.url
    // window.location.href = "/"
    console.log("Authentication completed")
    this.$router.push("/");
}


</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Pacifico&family=Playwrite+IN:wght@100..400&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
    
    .nav{
        display: flex;
        flex-direction: row;
        height: 4em;
        background-color: #EEEEEE;
        border-radius: 20px;
        background-image: linear-gradient(to right, #48A6A7, #EEEEEE);
    }

    .title{
        display: flex;
        flex-direction: row;
        margin-right: auto;
        margin-left: 1em;
        justify-content: center;
        align-items: center;
        font-family: "Playwrite IN", serif;
        font-optical-sizing: auto;
    }

    .signin{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin-left: auto;
        margin-right: 1em;
        height: 100%;
    }

    .img-user{
        height: 2em;
        width: 2em;
        display: flex;
        margin-left: auto;
        margin-right: 1em;
    }

    .name{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: 1em;
        justify-content: center;
        align-items: center;
    }

    .signin-button{
        background-color: #9ACBD0;
        color: #201E43;
        font-size: 1em;
        font-family: "Urbanist", serif;
        border: 1px solid #201E43;
        height: 2em;
        width: max-content;
        margin-left: 1em;
        padding: 0 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 15px;
    }
</style>