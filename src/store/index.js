import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[
      {
        id:1,
        title: "One",
        index:1,
        done:true,
      },
      {
        id:2,
        title: "Two",
        index:2,
        done:false,
      },
      {
        id:3,
        title: "Three",
        index:3,
        done:false,
      },
    ]
  },
  getters:{
    allTodos:(state)=>state.todos,
  },
  mutations: {
    add_todo(state,todo){
      state.todos.push({...todo,index:state.todos.length+1});
    },
    delete_todo(state,id){
      state.todos = state.todos.filter(todo=>todo.id != id)
    },
    update_todo(state,todo){
      console.log(todo)
      let index = state.todos.findIndex(td=>td.id == todo.id)
      if(index != -1){
        state.todos[index] = todo
      }
    }
  },
  actions: {
    addTodo({commit},todo){
      commit("add_todo",todo)
    },
    deleteTodo({commit},id){
      commit("delete_todo",id)
    },
    updateTodo({commit},todo){
      commit("update_todo",todo)
    }
  },
  modules: {
  }
})
