<template>
    <h1>Foglalás</h1>
    <form @submit.prevent="saveFoglalas()">
        <input type="text" v-model="name" placeholder="Név"><br>
        <input type="text" v-model="tel" placeholder="Telefonszám"><br>
        <input type="submit" value="Foglalás"><input type="button" v-on:click="visszaANaptárba" value="Vissza">
    </form>
</template>

<script setup>
import  {ref, onMounted} from 'vue' ;
import {useNaptarStore} from '@/stores/naptár.js';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const naptar = useNaptarStore()
const name = ref("")
const tel = ref("")

const toast = useToast()

const saveFoglalas = () => {
    let teltemp = "";
    console.log("for ciklus eleje!" + tel.value);
    for(let i = 0; i < tel.value.length; i++){
        console.log("For ciklus " + i)
        if(tel.value[i] != " "){
            teltemp += tel.value[i]
        }
    }
    console.log("for ciklus vége!");
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
        console.log("IdoPontFoglalas előt")
        naptar.IdoPontFoglalas(p)
        name.value = tel.value = "";
        toast("Foglalás Sikeres")
        visszaANaptárba()
    }
}
const router = useRouter()
const visszaANaptárba = () => {
        router.push("/")
}

</script>

<style>
</style>
