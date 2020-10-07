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

const dark = document.getElementById('dark')

document.addEventListener("change", () => {
  if(Theme.isDark()) {
    document.getElementsByClassName('bg')[0].style.background = "#363946"
    document.getElementsByClassName('bg')[0].style.opacity = "1"
    document.getElementsByClassName('bg2')[0].style.display = "none"
    document.getElementsByClassName('bg3')[0].style.display = "none"
  }
  else {
    document.getElementsByClassName('bg')[0].style.backgroundImage = 'linear-gradient(-60deg, #153b3d 50%, #3c6e71 50%)'
    document.getElementsByClassName('bg')[0].style.opacity = "0.5"
    document.getElementsByClassName('bg2')[0].style.display = "block"
    document.getElementsByClassName('bg3')[0].style.display = "block"
  }
})

const Theme = {
  isDark: () => {
    return dark.checked
  }
}