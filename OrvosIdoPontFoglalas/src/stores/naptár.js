import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useNaptarStore = defineStore('naptar', () => {
    const idoPontok = ref([])
    const foglalasok = ref(1)
    const foglalasokNap = ref("")
    const foglalasokIdo = ref("")
    const loadIdoPontok = () => {
        axios.get('http://localhost:3000/idoPontok')
        .then(resp => idoPontok.value = resp.data)
      }

    const IdoPontFoglalas = (DocID) => {
      let pont = idoPontok.value.find((p) => DocID == p.DocID)
    }
    return{idoPontok, foglalasok, foglalasokNap, foglalasokIdo, loadIdoPontok, IdoPontFoglalas}
})