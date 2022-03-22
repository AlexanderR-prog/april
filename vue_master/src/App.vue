<template>
<div class="app">
<div>
    <form @submit.prevent>
        <h2>Настройки</h2>
    <input 
    v-bind:value="title" 
    @input="title = $event.target.value" 
    class="input" type="text" 
    placeholder="Заголовок"
    >
    <input v-bind:value="body" 
    @input="body = $event.target.value" 
    class="input" type="text" 
    placeholder="Текст"
    >
    <button class="btn" 
    @click="createPost">
    Добавить карточку
    </button>
    </form>
</div>
<h2>Карточки</h2>
<div class="container">
<div class="post" v-for="post in posts">
   <div class="post-main">{{ post.title }}</div>
    <div class="post-text">{{ post.body }}</div>
</div>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
posts: [],
title: '',
body: ''
        }
    },
    methods: {
       createPost() {
           const newPost = {
               id: Date.now(),
               title: this.title,
               body: this.body,
           }
           this.posts.push(newPost);
       }
    },
    mounted() {
        if (localStorage, title) {
            title = localStorage.title
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.container {
    width: 1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
h2 {
    margin-top: 30px;
}
.post {
    width: 300px;
    height: 150px;
    margin-top: 20px;
    margin-left: 30px;
    border: 1px solid black;
}
.post-main {
    padding-top: 20px;
    padding-left: 20px;
    font-size: 25px;
    font-weight: 500;
}
.post-text{
    padding-top: 15px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 300;
}
form {
    display: flex;
    flex-direction: column;
}
.btn{
    margin-top: 20px;
    padding: 10px 15px;
    font-size: 14px;
    background: none;
    color: black;
    align-self: flex-start;
}
.input {
    width: 100%;
    border: 1px solid black;
    padding: 10px 15px;
    margin-top: 15px;
    font-size: 14px;
}
.app {
    padding: 50px;
}
</style>