<template>
  <Loading></Loading>
  <div v-if="!merchantStore.loading" class=" divide-y">
    <template :key="currency._id" v-for="currency in merchantStore.currencies">
      <div class="p-2">
        <div>Name: {{currency.name}}</div>
        <div>Faktor: {{currency.factor}}</div>
        <div>Übergeordnet: {{currency.currencyHigher}}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useMerchantStore} from "@/stores/merchant.store";
import Loading from "../components/Loading.vue"
import LocationListItem from "@/components/Locations/LocationListItem.vue";

const merchantStore = useMerchantStore();

onMounted(() => {
  merchantStore.fetchCurrencies();
})</script>

<style scoped>

</style>