<template>
  <div class="navbar-container mb-3">
    <div class="navbar overflow-x-auto">
      <div class="navbar-start">
        <router-link class="btn btn-ghost" to="/"><IconHome></IconHome></router-link>
      </div>
      <div class="navbar-center">
        <div class="text-xl normal-case">Merchants App</div>
      </div>
      <div class="navbar-end">
        <div class="navbar-start">
          <router-link class="btn btn-ghost" to="/"><IconDatabase></IconDatabase></router-link>
        </div>
      </div>
    </div>
    <div class="divider mb-2 mt-0 pt-5">{{ router.currentRoute.value.name }}</div>
    <div class="navbar overflow-x-auto">
      <router-link class="mr-2 btn btn-accent btn-sm normal-case" to="/character">Characters</router-link>
      <router-link class="mr-2 btn btn-accent btn-sm normal-case" to="/location">Locations</router-link>
      <router-link class="mr-2 btn btn-accent btn-sm normal-case" to="/merchant-list">Merchants</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import IconHome from "./icons/IconHome.vue"
import IconDatabase from "./icons/IconDatabase.vue"
import {useMerchantStore} from "@/stores/merchant.store";

const merchantStore = useMerchantStore();
const router = useRouter();
</script>

<style scoped>

</style>