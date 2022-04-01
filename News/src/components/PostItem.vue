<template>
  <div class="post">
    <div>
      <div><strong>Категория:</strong> {{ post.category }}</div>
      <div><strong>Дата:</strong> {{ post.date }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post_btns">
      <my-button @click="$router.push(`/${post.id}`)"> Прочитать </my-button>
      <my-button class="right-btn" @click="$emit('remove', post)">
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
