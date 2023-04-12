<template>
  <div class="navbar-container mb-3">
    <div class="navbar overflow-x-auto">
      <div class="navbar-start">
        <router-link class="btn btn-ghost p-2" to="/">
          <IconHome></IconHome>
        </router-link>
      </div>
      <div class="navbar-center">
        Merch 'n Dice
        <router-link :to="characterLink">
          <CurrentCharacterAvatar></CurrentCharacterAvatar>
        </router-link>
      </div>
      <div class="navbar-end">
        <CurrentCharacterStats></CurrentCharacterStats>
      </div>
    </div>
    <div class="divider mb-2 mt-0 pt-5">{{ router.currentRoute.value.name }}</div>
    <div class="navbar overflow-x-auto">
      <router-link class="mr-2 btn btn-accent btn-sm normal-case" to="/world">Worlds</router-link>
      <router-link class="mr-2 btn btn-accent btn-sm normal-case" to="/character">Characters</router-link>
      <router-link class="mr-2 btn btn-accent btn-sm normal-case" to="/location">Locations</router-link>
      <router-link class="mr-2 btn btn-accent btn-sm normal-case" to="/merchant-list">Merchants</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import IconHome from "./icons/IconHome.vue"
import {useMerchantStore} from "@/stores/merchant.store";
import CurrentCharacterAvatar from "./CurrentCharacterAvatar.vue"
import CurrentCharacterStats from "./CurrentCharacterStats.vue"

const merchantStore = useMerchantStore();
const router = useRouter();
const characterLink = merchantStore.currentCharacter ? `/character/${merchantStore.currentCharacter._id}` : '/character';
</script>

<style scoped>

</style>