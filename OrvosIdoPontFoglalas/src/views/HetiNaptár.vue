

<template>
    <h1>Naptár</h1>
    <div class="row">
        <div>
            <div v-for="n in naptar.idoPontok" :key="n.id">
                <div class="fogcard" v-if="n.Name == 'Hétfő' && !n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <button v-on:click="foglalasMetodus(n.DocID,n.Name,n.Time)">Foglalás</button>
                </div>
                <div class="fogcardred" v-if="n.Name == 'Hétfő' && n.foglalt">
                    {{ n.Name }}<br>
                    {{ n.Time }}
                    <input type="button" value="Foglalt!"> 
                </div>
            </div>
        </div>
        <div>
            <div v-for="n in naptar.idoPontok" :key="n.id">
                <div class="fogcard" v-if="n.Name == 'Kedd' && !n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <button v-on:click="foglalasMetodus(n.DocID,n.Name,n.Time)">Foglalás</button> 
                </div>
                <div class="fogcardred" v-if="n.Name == 'Kedd' && n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <input type="button" value="Foglalt!"> 
                </div>
            </div>
        </div>
        <div>
            <div v-for="n in naptar.idoPontok" :key="n.id">
                <div class="fogcard" v-if="n.Name == 'Szerda' && !n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <button v-on:click="foglalasMetodus(n.DocID,n.Name,n.Time)">Foglalás</button>
                </div>
                <div class="fogcardred" v-if="n.Name == 'Szerda' && n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <input type="button" value="Foglalt!"> 
                </div>
            </div>
        </div>
        <div>
            <div v-for="n in naptar.idoPontok" :key="n.id">
                <div class="fogcard" v-if="n.Name == 'Csütörtök' && !n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <button v-on:click="foglalasMetodus(n.DocID,n.Name,n.Time)">Foglalás</button>
                </div>
                <div class="fogcardred" v-if="n.Name == 'Csütörtök' && n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <input type="button" value="Foglalt!"> 
                </div>
            </div>
        </div>
        <div>
            <div v-for="n in naptar.idoPontok" :key="n.id">
                <div class="fogcard" v-if="n.Name == 'Péntek' && !n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <button v-on:click="foglalasMetodus(n.DocID,n.Name,n.Time)">Foglalás</button>
                </div>
                <div class="fogcardred" v-if="n.Name == 'Péntek' && n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <input type="button" value="Foglalt!">
                </div>
            </div>
        </div>
        <div>
            <div v-for="n in naptar.idoPontok" :key="n.id">
                <div class="fogcard" v-if="n.Name == 'Szombat' && !n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <button v-on:click="foglalasMetodus(n.DocID,n.Name,n.Time)">Foglalás</button>
                </div>
                <div class="fogcardred" v-if="n.Name == 'Szombat' && n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <input type="button" value="Foglalt!"> 
                </div>
            </div>
        </div>
        <div>
            <div v-for="n in naptar.idoPontok" :key="n.id">
                <div class="fogcard" v-if="n.Name == 'Vasárnap' && !n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <button v-on:click="foglalasMetodus(n.DocID,n.Name,n.Time)">Foglalás</button>
                </div>
                <div class="fogcardred" v-if="n.Name == 'Vasárnap' && n.foglalt">
                    {{ n.Name }} <br>
                    {{ n.Time }}
                    <button v-on:click="">Foglalt!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import  {ref, onMounted} from 'vue' ;
    import {useNaptarStore} from '@/stores/naptár.js';
import { useRouter } from 'vue-router';

    const naptar = useNaptarStore()
    onMounted(() => {
        naptar.loadIdoPontok()
    })

    const router = useRouter()
    const foglalasMetodus = (DocID,Name,Time) => {
        naptar.foglalasok = DocID
        naptar.foglalasokNap = Name
        naptar.foglalasokIdo = Time
        router.push("/idoPontFog")
    }
</script>

<style>
.row{
    display: flex;
    justify-content: center;
}
.fogcard{
    text-align: center;
    width: 80px;
    margin: 5px;
    border: 1px solid black;
}
.fogcardred{
    background-color: brown;
    text-align: center;
    width: 80px;
    margin: 5px;
    border: 1px solid black;
}
</style>