<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
      type="text"
      v-model="post.category"
      placeholder="Категория новости"
    />
    <my-input type="date" v-model="post.date" />
    <my-input type="text" v-model="post.title" placeholder="Название поста" />
    <my-input type="text" v-model="post.body" placeholder="Описание поста" />
    <my-button class="btn form_btn" @click="createPost"> Создать </my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        date: "",
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped></style>
