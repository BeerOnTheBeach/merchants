import { defineStore } from 'pinia'
import type {Merchant} from "@/types/merchant";

export const useMerchantStore = defineStore('merchant', () => {
  const merchants: Array<Merchant> = [];

  return { merchants }
})
