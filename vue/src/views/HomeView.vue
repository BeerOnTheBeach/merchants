<template>
  <div>
    <template :key="merchant" v-for="merchant in merchants">
      <MerchantBase v-if="merchant" :merchant="merchant"></MerchantBase>
    </template>
  </div>
</template>

<script setup lang="ts">
import {Client} from "@/api/client";
import MerchantBase from "../components/Merchants/MerchantBase.vue"
import {Merchant} from "@/types/merchant";

import {onMounted, ref} from "vue";
import type { Ref } from 'vue'


let merchants:Ref<Array<Merchant>> = ref([]);
const client = new Client();

onMounted(async () => {
  merchants.value = await client.request('merchant');
})
</script>