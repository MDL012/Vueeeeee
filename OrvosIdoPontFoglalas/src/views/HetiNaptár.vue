

<template>
    <h1>Naptár</h1>
    <div>
        <div class="row" v-for="n in naptar.idoPontok" :key="n.id">
            <div v-if="n.Name == 'Hétfő'">
                <p>{{ n.Name }}</p>
                <p>{{ n.Time }}</p>
            </div>
            <div v-if="n.Name == 'Kedd'">
                <p>{{ n.Name }}</p>
                <p>{{ n.Time }}</p>
            </div>
            <div v-if="n.Name == 'Szerda'">
                <p>{{ n.Name }}</p>
                <p>{{ n.Time }}</p>
            </div>
            <div v-if="n.Name == 'Csütörtök'">
                <p>{{ n.Name }}</p>
                <p>{{ n.Time }}</p>
            </div>
            <div v-if="n.Name == 'Péntek'">
                <p>{{ n.Name }}</p>
                <p>{{ n.Time }}</p>
            </div>
            <div v-if="n.Name == 'Szombat'">
                <p>{{ n.Name }}</p>
                <p>{{ n.Time }}</p>
            </div>
            <div v-if="n.Name == 'Vasárnap'">
                <p>{{ n.Name }}</p>
                <p>{{ n.Time }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import  {ref, onMounted} from 'vue' ;
    import {useNaptarStore} from '@/stores/naptár.js';

    const naptar = useNaptarStore()
    onMounted(() => {
        naptar.loadIdoPontok()
    })
</script>

<style>
.row{
    display: flex;
    justify-content: space-around;
}
</style>