<template>
  <div v-if="props.item" class="item mt-2 ml-1.5 ">
    <div class="card card-compact shadow-xl border border-accent">
      <figure class="w-40 h-32"><img v-if="imageUrl" class="object-cover" :src="imageUrl" alt=""/></figure>
      <div class="w-40 h-48 card-body">
        <h2 class="card-title">
          {{ props.item.name }}
        </h2>
        <div>{{ descriptionShort }}</div>
        <div class="mt-auto">
          <div class="badge badge-outline">Preis: {{ props.item.price }} Kupfer</div>
          <div class="flex justify-between">
            <div @click="openBuyModal" class="btn btn-primary btn-xs mt-2"> Kaufen</div>
            <!-- The button to open the info modal -->
            <label :for="itemIdClass" class="btn btn-secondary btn-xs mt-2"> Info</label>
          </div>
        </div>
      </div>
    </div>
    <!-- info-modal -->
    <input type="checkbox" :id="itemIdClass" class="modal-toggle" />
    <label :for="itemIdClass" class="modal cursor-pointer">
      <label class="modal-box relative" for="">
        <h3 class="text-lg font-bold">{{ props.item.name }}</h3>
        <p class="py-4">{{ props.item.description }}</p>
      </label>
    </label>
  </div>
</template>

<script setup lang="ts">
import {Item} from "@/types/item";
import {useMerchantStore} from "@/stores/merchant.store";
import Swal from 'sweetalert2'

const props = defineProps({
  item: {
    type: Item,
    required: true
  }
})
const merchantStore = useMerchantStore();
const imageUrl = merchantStore.imageBuilder.getImageUrl(props.item.image);
const descriptionMaxLength = 50;
const descriptionShort = sliceDescription(props.item.description);
const itemIdClass = 'info-modal' + props.item._id;

function sliceDescription(description: string):string {
  let descSliced = props.item.description.slice(0, 50);
  if (description.length > descriptionMaxLength) {
    descSliced += '...'
  }
  return descSliced;
}

function openBuyModal() {
  if (merchantStore.currentCharacter) {
    Swal.fire({
      title: 'Kaufen?',
      text: `Möchtest du wirklich "${props.item.name}" für ${props.item.price} kaufen?`,
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Ja!',
      denyButtonText: 'Nö'
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (merchantStore.currentCharacter) {
          const result = await merchantStore.buyItem(merchantStore.currentCharacter, props.item)
          if (result) {
            await Swal.fire('Gekauft!', '', 'success')
            // Update currentChar
            merchantStore.currentCharacter.money -= props.item.price;
          } else {
            await Swal.fire('Fehler!', 'Etwas ist schief gegangen. Sorry!', 'error')
          }
        }
      }
    })
  } else {
    Swal.fire({
      title: 'Kein Charakter gewählt.',
      text: `Bitte wähle einen Charakter mit dem du das Item kaufen möchtest.`,
      icon: 'warning',
      confirmButtonText: 'Ok.',
    })
  }

}
</script>

<style scoped>

</style>