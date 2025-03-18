<template>
    <h1>Foglalás</h1>
    <form @submit.prevent="saveFoglalas()">
        <input type="text" v-model="name" placeholder="Név"><br>
        <input type="text" v-model="tel" placeholder="Telefonszám"><br>
        <input type="submit" value="Foglalás!">
    </form>
</template>

<script setup>
import  {ref, onMounted} from 'vue' ;
import {useNaptarStore} from '@/stores/naptár.js';

const naptar = useNaptarStore()
const name = ref("")
const tel = ref("")

const saveFoglalas = () => {
    let teltemp = "";
    console.log("Hallo!!!")
    for(let i = 0; i< tel.length; i++){
        console.log("Hallo!!!" + i)
        if(tel[i] != " "){
            teltemp += tel[i]
            
        }
    }
    console.log(teltemp + " gg")
    if(name != "" && teltemp.length == 9){
        let p = {
            "DocID" : naptar.foglalasok,
            "Name" : naptar.foglalasokNap,
            "Time" : naptar.foglalasokIdo,
            "UserName" : name.value,
            "UserTel" : teltemp,
            "DocName" : "Dr. Temető József",
            "foglalt" : true
        }
        console.log("Hallo!!!")
        naptar.IdoPontFoglalas(p)
        toast("Mentés sikeres")
        name.value = tel.value = "";
    }
}
</script>

<style>
</style>
