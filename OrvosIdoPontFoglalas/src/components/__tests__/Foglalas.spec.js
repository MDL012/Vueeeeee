import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'
import IdőPontFoglalás from '../IdőPontFoglalás.vue'
import { useNaptarStore } from '@/stores/naptár'
import IdőPontFoglalás from '../IdőPontFoglalás.vue'

describe('naptár', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
      })

});