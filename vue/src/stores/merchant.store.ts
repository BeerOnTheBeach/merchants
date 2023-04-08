import { defineStore } from 'pinia'
import type {Merchant} from "@/types/merchant";
import {Client} from "@/api/client";

interface MerchantStore {
  apiBaseUrl: string;
  merchants: Array<Merchant>;
  loading: boolean;
}

export const useMerchantStore = defineStore( {
  id: "merchant-store",
  state: (): MerchantStore => ({
    apiBaseUrl: "",
    merchants: [],
    loading: false,
  }),
  actions: {
    async fetchMerchants() {
      this.loading = true;
      const client = new Client();
      const result = await client.requestWithRefs('merchant', ['items'])
      if(result.length > 0) {
        this.merchants = result;
      }
      this.loading = false;
    },
  },
  getters: {
    fullName(): String {
      return "";
    },
  },

})