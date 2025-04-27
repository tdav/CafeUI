<template>
  <div class="invoice-item d-flex align-items-center mb-3">
    <img :src="item.image" :alt="item.name" class="rounded me-3" width="50" height="50" style="object-fit: cover;">
    <div class="flex-grow-1 me-3">
      <div class="fw-bold item-name">{{ item.name }}</div>
      <small class="text-muted">{{ item.quantity }}x</small>
      <small class="text-danger ms-2">{{ item.notes }}</small>
    </div>
    <div class="fw-bold item-price">${{ item.price.toFixed(1) }}</div>
  </div>
</template>

<script setup>
defineProps({
  item: Object
});
</script>

<style scoped>
.item-name {
    font-size: 0.9rem;
    color: #343a40;
}
.item-price {
    font-size: 0.9rem;
    color: #343a40;
}
.text-danger {
    font-size: 0.75rem; /* Smaller notes text */
    color: #dc3545 !important;
}
.text-muted {
     font-size: 0.8rem;
}
</style>