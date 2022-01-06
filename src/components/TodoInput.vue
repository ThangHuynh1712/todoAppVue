<template>
  <div class="todo-input row">
    <h3 class="col-2">Todo Input</h3>
    <div class="col-9">
      <input
        @change="todoTextChange"
        v-bind:value="todoText"
        type="text"
        class="form-control"
      />
    </div>
    <div class="col-1">
      <button @click="addTodoI" class="btn btn-primary pl-1">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    addTodoI() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
      });
      this.todoText = "";
    },
  },
};
</script>

<style></style>
