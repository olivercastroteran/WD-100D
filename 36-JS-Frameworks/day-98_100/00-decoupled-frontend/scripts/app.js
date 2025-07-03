const TodosApp = {
  data() {
    return {
      newTodo: 'Learn Vue.js',
      enteredTodoText: '',
    };
  },

  methods: {
    saveTodo(e) {
      e.preventDefault();
      this.newTodo = this.enteredTodoText;
    },
  },
};

Vue.createApp(TodosApp).mount('#todos-app');
