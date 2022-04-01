<template>
  <div>
    <h1>Новости</h1>
    <my-input v-model="searchQuery" placeholder="Найти..." />
    <div class="app__btns">
      <my-button class="button" @click="showDialog">
        Добавить новость
      </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPost" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
export default {
  components: {
    PostList,
    PostForm,
    MyDialog,
    MyButton,
    MySelect,
  },
  data() {
    return {
      posts: [],

      dialogVisible: false,
      selectedSort: "",
      searchQuery: "",
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по тексту" },
        { value: "id", name: "по дате" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPost() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style></style>
