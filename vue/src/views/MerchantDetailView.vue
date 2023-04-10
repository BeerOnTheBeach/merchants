<template>
  <Loading></Loading>
  <MerchantBase v-if="merchantStore.currentMerchant" :location="merchantStore.currentMerchant"></MerchantBase>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {useMerchantStore} from "@/stores/merchant.store";
import {onMounted} from "vue";

import MerchantBase from "../components/Merchants/MerchantBase.vue"
import Loading from "../components/Loading.vue"


const router = useRouter();

const merchantStore = useMerchantStore();
const route = useRoute()

onMounted(async () => {
  await merchantStore.setCurrentMerchant(route.params.merchantId as string);
})
</script>

<style scoped>

</style>