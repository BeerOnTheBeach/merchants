<template>
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <!-- head -->
      <thead>
      <tr>
        <th>Name</th>
        <th>Items</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <!-- row -->
      <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
      </tfoot>

    </table>
  </div>
</template>

<script setup lang="ts">
import {Merchant} from "@/types/merchant";

const props = defineProps({
  location: {
    type: Array,
    required: true,
  }
})
</script>

<style scoped>

</style>