<template>
    <h1>Foglalás</h1>
    <form action="/action_page.php">
        <input type="text" v-model="name" placeholder="Név"><br>
        <input type="text" v-model="tel" placeholder="Telefonszám"><br>
    </form>
</template>

<script setup>
import  {ref, onMounted} from 'vue' ;
import {useNaptarStore} from '@/stores/naptár.js';

const naptar = useNaptarStore()
const name = ref("")
const tel = ref("")

const saveFoglalas = () => {
    const teltemp = "";
    for(let i = 0; i< tel.value.length; i++){
        if(tel.value[i] != " "){
            teltemp += tel.value[i]
        }
    }
    if(name.value != "" && teltemp.length == 9){
        let p = {
            "DocID" : naptar.foglalasok,
            "Name" : naptar.foglalasokNap,
            "Time" : naptar.foglalasokIdo,
            "UserName" : name.value,
            "UserTel" : teltemp,
            "DocName" : "Dr. Temető József",
            "foglalt" : true
        }
        naptar.IdoPontFoglalas(p)
        toast("Mentés sikeres")
        name.value = tel.value = "";
    }
}
</script>

<style>
</style>
