import { defineStore } from 'pinia'
import type Merchant from "@/types/merchant";
import type Location from "@/types/location";
import {Client} from "@/api/client";
import {ImageBuilder} from "@/utils/imageBuilder";

interface MerchantStore {
  projectId: string;
  dataset: string;
  client: Client;
  imageBuilder: ImageBuilder;
  merchants: Array<Merchant>;
  locations: Array<Location>;
  currentLocation: Location|null,
  currentMerchant: Merchant|null,
  loading: boolean;
}

export const useMerchantStore = defineStore( {
  id: "merchant-store",
  state: (): MerchantStore => ({
    projectId: "fwwexqik",
    dataset: "production",
    client: {} as Client,
    imageBuilder: {} as ImageBuilder,
    merchants: [],
    locations: [],
    currentLocation: null,
    currentMerchant: null,
    loading: false,
  }),
  actions: {
    init() {
      this.client = new Client();
      this.imageBuilder = new ImageBuilder();
    },
    async fetchMerchants() {
      this.loading = true;
      const result = await this.client.findAllWithRefs('merchant', ['items'])
      if(result.length > 0) {
        this.merchants = result;
      }
      this.loading = false;
    },
    async fetchLocations() {
      this.loading = true;
      const result = await this.client.findAllWithRefs('location', ['merchants'])
      if(result.length > 0) {
        this.locations = result;
      }
      this.loading = false;
    },
    async setCurrentLocation(id:string) {
      this.loading = true;
      this.currentLocation = null;
      const result = await this.client.findOneWithRefs(id, 'location', ['merchants'])
      if(result.length > 0) {
        this.currentLocation = result[0] as Location;
      }
      this.loading = false;
    },
    async setCurrentMerchant(id:string) {
      this.loading = true;
      this.currentMerchant = null;
      const result = await this.client.findOneWithRefs(id, 'merchant', ['items'])
      if(result.length > 0) {
        this.currentMerchant = result[0] as Merchant;
      }
      this.loading = false;
    }
  },
  getters: {
    fullName(): String {
      return "";
    },
  },

})