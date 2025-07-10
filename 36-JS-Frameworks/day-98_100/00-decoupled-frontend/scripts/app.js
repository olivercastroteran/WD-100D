const TodosApp = {
  data() {
    return {
      isLoading: false,
      todos: [],
      enteredTodoText: '',
      editedTodoId: null,
    };
  },

  methods: {
    async saveTodo(e) {
      e.preventDefault();

      if (this.editedTodoId) {
        const todoId = this.editedTodoId;

        let response;

        try {
          response = await fetch('http://localhost:3000/todos/' + todoId, {
            method: 'PATCH',
            body: JSON.stringify({
              newText: this.enteredTodoText,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          alert('Something went wrong!');
          return;
        }

        if (!response.ok) {
          alert('Something went wrong!');
          return;
        }

        const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);

        const updatedTodo = {
          id: this.todos[todoIndex].id,
          text: this.enteredTodoText,
        };

        this.todos[todoIndex] = updatedTodo;
        this.editedTodoId = null;
      } else {
        let response;

        try {
          response = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            body: JSON.stringify({
              text: this.editedTodoId,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          alert('Something went wrong!');
          return;
        }

        if (!response.ok) {
          alert('Something went wrong!');
          return;
        }

        const responseData = await response.json();
        const todoId = responseData.createdTodo.id;

        this.newTodo = {
          text: this.enteredTodoText,
          id: todoId,
        };

        this.todos.push(newTodo);
      }

      this.enteredTodoText = '';
    },

    editTodo(todoId) {
      this.editedTodoId = todoId;
      const todo = this.todos.find((todo) => todo.id === todoId);
      this.enteredTodoText = todo.text;
    },

    async deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);

      let response;

      try {
        response = await fetch('http://localhost:3000/todos/' + todoId, {
          method: 'DELETE',
        });
      } catch (error) {
        alert('Something went wrong!');
        return;
      }

      if (!response.ok) {
        alert('Something went wrong!');
        return;
      }
    },
  },

  async created() {
    let response;
    this.isLoading = true;
    try {
      response = await fetch('http://localhost:3000/todos');
    } catch (error) {
      alert('Something went wrong!');
      this.isLoading = false;
      return;
    }

    this.isLoading = false;

    if (!response.ok) {
      alert('Something went wrong!');
      return;
    }

    const responseData = await response.json();
    this.todos = responseData.todos;
  },
};

Vue.createApp(TodosApp).mount('#todos-app');
