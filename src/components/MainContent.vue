<template>
  <div class="main-content d-flex flex-column">
    <!-- Search Bar -->
    <div class="mb-3">
      <div class="input-group">
        <span class="input-group-text bg-white border-end-0" id="search-addon"><i class="bi bi-search"></i></span>
        <input type="text" class="form-control border-start-0" placeholder="Search Your Menu Here" aria-label="Search" aria-describedby="search-addon">
      </div>
    </div>

    <!-- Menu Categories -->
    <MenuCategories :categories="categories" :activeCategory="activeCategory" @select-category="setActiveCategory" />

    <!-- Menu Items -->
    <h2 class="mt-4 mb-3 fs-5 fw-bold">Lunch Menu</h2>
    <div class="row g-3">
      <div v-for="item in menuItems" :key="item.id" class="col-xl-4 col-lg-6 col-md-6">
        <MenuItemCard :item="item" @update-quantity="emit('updateItemQuantity', $event)"/>
                
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MenuCategories from './MenuCategories.vue';
import MenuItemCard from './MenuItemCard.vue';

defineProps({
  menuItems: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['updateItemQuantity']); 
  

// --- Sample Data ---
const categories = ref([
  { id: 'breakfast', name: 'Breakfast', icon: 'bi-egg-fried', count: 12 },
  { id: 'lunch', name: 'Lunch', icon: 'bi-cup-straw', count: 12 }, // Using placeholder icon
  { id: 'dinner', name: 'Dinner', icon: 'bi-moon-stars', count: 12 }, // Using placeholder icon
  { id: 'soup', name: 'Soup', icon: 'bi-badge-sd', count: 12 }, // Placeholder
  { id: 'desserts', name: 'Desserts', icon: 'bi-cone-striped', count: 12 },
  { id: 'side-dish', name: 'Side Dish', icon: 'bi-basket', count: 12 }, // Placeholder
  { id: 'appetizer', name: 'Appetizer', icon: 'bi-egg', count: 12 }, // Placeholder
  { id: 'beverages', name: 'Beverages', icon: 'bi-cup-hot', count: 12 },
]);
const activeCategory = ref('lunch');

// --- Methods ---
function setActiveCategory(categoryId) {
  activeCategory.value = categoryId;
  // In a real app, you'd filter menuItems here or emit an event
  console.log("Category selected:", categoryId);
}

function handleUpdateQuantity(itemId, change) {
    console.log("Update quantity:", itemId, change);
    // Emit event upwards or handle state directly if App owns item state
    emit('updateItemQuantity', { itemId, change });
}

</script>

<style scoped>
.main-content {
  padding-right: 1rem; /* Add some padding so scrollbar doesn't overlap content */
}
.input-group-text {
    background-color: #fff !important;
    border-right: 0;
}
.form-control {
    border-left: 0;
}
.form-control:focus {
    box-shadow: none;
    border-color: #dee2e6; /* Keep border color consistent */
}
</style>