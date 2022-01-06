<template>
  <div class="row my-3 align-items-center">
    <div class="col-1">
      <h5>#1</h5>
    </div>
    <div class="col-9">
      <h3 v-if="!editing">{{ todo.title }}</h3>
      <input
        type="text"
        class="form-control"
        v-else
        v-bind:value="todoText"
        @change="todoTextChange"
      />
    </div>

    <div class="col-2 p-1 d-flex justify-content-evenly">
      <button class="btn btn-primary" @click="updateTodoUI(todo)">
        {{ editing ? "Update" : "Edit" }}
      </button>
      <button @click="deleteTodo(todo.id)" class="btn btn-danger">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {},
  },
  data() {
    return {
      editing: false,
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    updateTodoUI(todo) {
      this.editing = !this.editing;
      if (!this.editing && this.todoText != "") {
        todo.title = this.todoText;
        this.updateTodo(todo);
      } else {
        this.todoText = todo.title;
      }
    },
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
  },
};
</script>

<style></style>
