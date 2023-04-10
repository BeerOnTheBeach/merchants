<template>
  <Loading></Loading>
  <div v-if="!merchantStore.loading" class=" divide-y">
    <template :key="character" v-for="character in merchantStore.characters">
      <CharacterListItem v-if="character" :character="character"></CharacterListItem>
    </template>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useMerchantStore} from "@/stores/merchant.store";
import Loading from "../components/Loading.vue"
import CharacterListItem from "@/components/Characters/CharacterListItem.vue";

const merchantStore = useMerchantStore();

onMounted(() => {
  merchantStore.fetchCharacters();
})
</script>

<style scoped>

</style>