<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
      <TodoItem
        :todo="todo"
        @update-to-do="updateTodo"
        @delete-to-do="deleteTodo"
        @done-to-do="doneTodo"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    doneTodo(e) {
      this.updateTodo(e);
    },
  },
};
</script>

<style></style>
