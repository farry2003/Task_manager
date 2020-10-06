var added = new Vue({
    el: '#added',
    data: {
      todos: []
    }
  })

var insert = new Vue({
  el: '#insert',
  data: {
    message: document.getElementById('entry').value
  },
  methods: {
    reset: () => {
      insert.message = ""
    },
    add: () => {
      if(insert.message) {
        added.todos.push({text: insert.message})
        insert.reset()
      }
    }
  }
})

const entry = document.getElementById('entry')

entry.addEventListener('keypress', (event) => {
  let enter = event.key == 'Enter' ? true : false
  if(enter) {
    insert.add()
  }
})