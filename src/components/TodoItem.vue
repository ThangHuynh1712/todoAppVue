<template>
  <div class="row my-3 align-items-center">
    <div class="col-1">
      <h5>#{{ todo.index }}</h5>
    </div>
    <div class="col-8">
      <h3
        v-if="!editing"
        :style="
          todo.done
            ? { 'text-decoration-line': 'line-through' }
            : { 'text-decoration-line': 'none' }
        "
      >
        {{ todo.title }}
      </h3>
      <input
        type="text"
        class="form-control"
        v-else
        v-bind:value="todoText"
        @change="todoTextChange"
      />
    </div>

    <div class="col-3 p-1 d-flex justify-content-evenly">
      <button
        class="btn btn-success"
        @click="$emit('done-to-do', { ...todo, done: true })"
        v-if="!todo.done"
      >
        Done
      </button>
      <button class="btn btn-primary" @click="updateTodoUI(todo)">
        {{ editing ? "Update" : "Edit" }}
      </button>
      <button @click="$emit('delete-to-do', todo.id)" class="btn btn-danger">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
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
    updateTodoUI(todo) {
      this.editing = !this.editing;
      if (!this.editing && this.todoText != "") {
        todo.title = this.todoText;
        this.$emit("update-to-do", todo);
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
