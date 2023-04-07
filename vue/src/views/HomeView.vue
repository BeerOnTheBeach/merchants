<template>
  <div>
    <Merchant :merchant="merchant" :key="merchant" v-for="merchant in merchants"></Merchant>
  </div>
</template>

<script setup lang="ts">
import {Client} from "@/api/client";
import Merchant from "../components/Merchants/Merchant.vue"
import {onMounted, ref} from "vue";

let merchants = ref([] as Array<Merchant>);
const client = new Client();

onMounted(async () => {
  merchants.value = await client.request('merchant');
})
</script>