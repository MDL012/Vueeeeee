import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useNaptarStore = defineStore('naptar', () => {
    const idoPontok = ref([])
    const loadIdoPontok = () => {
        axios.get('http://localhost:3000/idoPontok')
        .then(resp => idoPontok.value = resp.data)
      }
    return{idoPontok, loadIdoPontok}
})