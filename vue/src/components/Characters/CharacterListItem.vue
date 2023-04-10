<template>
  <div v-if="props.character.active" class="hero" :style="'background-image: url(' + imageUrl + ');'">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">{{ props.character.name }}</h1>
        <p class="mb-5">{{ props.character.description }}</p>
        <div class="flex">
          <router-link :to="`/character/${props.character._id}`" class="btn btn-primary m-2">Details</router-link>
          <div @click="setCharacter(props.character._id)" class="btn btn-secondary m-2">Charakter auswählen</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMerchantStore} from "@/stores/merchant.store";
import Character from "@/types/character";

const props = defineProps({
  character: {
    type: Character,
    required: true
  }
})

const merchantStore = useMerchantStore();
const imageUrl = merchantStore.imageBuilder.getImageUrl(props.character.image)

function setCharacter(id: string) {
  merchantStore.setCurrentCharacter(id);
}
</script>

<style scoped>
.character {

}
</style>