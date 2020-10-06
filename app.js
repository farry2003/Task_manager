new Vue({
el: '#app',
data: {
  newTodo: '',
  todos: [],
},
methods: {
  addTodo() {
    this.todos.push({ text: this.newTodo, completed: false });
    this.newTodo = '';
  },
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
});

const clearLocalStorage = () => {
localStorage.clear()
location.reload()
}