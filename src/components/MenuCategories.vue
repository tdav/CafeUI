<template>
  <div class="menu-categories d-flex flex-wrap gap-2">
    <button
      v-for="category in categories"
      :key="category.id"
      type="button"
      class="btn category-btn flex-grow-1 d-flex align-items-center p-3"
      :class="category.id === activeCategory ? 'btn-primary text-white' : 'btn-light bg-white border'"
      @click="$emit('selectCategory', category.id)"
    >
      <i :class="[category.icon, 'fs-4 me-3']"></i>
      <div>
        <div class="fw-bold">{{ category.name }}</div>
        <small class="text-muted-custom">{{ category.count }} Menu In Stock</small>
      </div>
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: Array,
  activeCategory: String
});
defineEmits(['selectCategory']);
</script>

<style scoped>
.category-btn {
  min-width: 150px; /* Ensure buttons have some minimum width */
  text-align: left;
  border-radius: 0.5rem; /* Slightly larger radius */
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.btn-primary .text-muted-custom {
    color: rgba(255, 255, 255, 0.75) !important;
}

.btn-light .text-muted-custom {
     color: #6c757d !important; /* Bootstrap Secondary */
}

.btn-light {
    border-color: #e9ecef !important;
}

.btn-light:hover {
    background-color: #f8f9fa !important; /* Slightly darker white on hover */
}
</style>