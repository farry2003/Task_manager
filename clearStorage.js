new Vue({
    el: '#btnClear',
    methods: {
      clearLocalStorage: () => {
        localStorage.clear()
        location.reload()
      }
    }
  })