let entry = document.getElementById('entry')

entry.autofocus = true

var list = new Vue({
el: '#app',
data: {
  newTodo: '',
  todos: [],
  lastIndex: 0,
},
methods: {
  addTodo() {
    if(this.newTodo !== '') {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  },
  removeTodo(index) {
    this.todos.splice(index, 1);
  }
},
mounted() {
  if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
},
watch: {
  todos: {
    handler() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    deep: true,
  },
},
})

new Vue({
  el: '#btnClear',
  methods: {
    clearLocalStorage: () => {
      localStorage.clear()
      location.reload()
    }
  }
})