<template>
  <div class="d-flex vh-100 bg-light">
    <LeftSidebar />
    <div class="flex-grow-1 d-flex flex-column overflow-hidden">
      <!-- Add the AppHeader component -->
      <AppHeader />
      <div class="main-content-area d-flex flex-grow-1 p-3 overflow-hidden">
        <!-- Ensure main content and invoice sidebar adjust -->
        <MainContent :menuItems="lunchMenuItems" class="flex-grow-1 me-3 overflow-auto" />
        <InvoiceSidebar :orderItems="orderItems" :paymentSummary="paymentSummary" class="overflow-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LeftSidebar from './components/LeftSidebar.vue';
import AppHeader from './components/AppHeader.vue'; // Import the new component
import MainContent from './components/MainContent.vue';
import InvoiceSidebar from './components/InvoiceSidebar.vue';

// --- Sample Data (Keep as before) ---
const lunchMenuItems = ref([
  { id: 1, name: 'Pasta Bolognese', description: 'Delicious beef lasagna with double chilli Delicious beef', price: 50.5, image: 'https://via.placeholder.com/150/FFA07A/000000?text=Pasta', quantity: 2 },
  { id: 2, name: 'Spicy Fried Chicken', description: 'Delicious beef lasagna with double chilli Delicious beef', price: 45.7, image: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Chicken', quantity: 2 },
  { id: 3, name: 'Grilled Steak', description: 'Delicious beef lasagna with double chilli Delicious beef', price: 80.0, image: 'https://via.placeholder.com/150/BDB76B/FFFFFF?text=Steak', quantity: 0 },
  { id: 4, name: 'Fish And Chips', description: 'Delicious beef lasagna with double chilli Delicious beef', price: 90.4, image: 'https://via.placeholder.com/150/ADD8E6/000000?text=Fish', quantity: 0 },
  { id: 5, name: 'Beef Bourguignon', description: 'Delicious beef lasagna with double chilli Delicious beef', price: 75.5, image: 'https://via.placeholder.com/150/8B4513/FFFFFF?text=Beef', quantity: 0 },
  { id: 6, name: 'Spaghetti Carbonara', description: 'Delicious beef lasagna with double chilli Delicious beef', price: 35.3, image: 'https://via.placeholder.com/150/F5DEB3/000000?text=Spaghetti', quantity: 2 },
   { id: 7, name: 'Ratatouille', description: 'Delicious beef lasagna with double chilli Delicious beef', price: 26.7, image: 'https://via.placeholder.com/150/FFD700/000000?text=Ratatouille', quantity: 0 },
   { id: 8, name: 'Kimchi Jjigae', description: 'Delicious beef lasagna with double chilli Delicious beef', price: 45.7, image: 'https://via.placeholder.com/150/DC143C/FFFFFF?text=Kimchi', quantity: 0 },
   { id: 9, name: 'Tofu Scramble', description: 'Delicious beef lasagna with double chilli Delicious beef', price: 85.6, image: 'https://via.placeholder.com/150/FAFAD2/000000?text=Tofu', quantity: 0 },
]);

const orderItems = ref([
    { id: 1, name: 'Pasta Bolognese', quantity: 2, notes: 'Dont Add Vegetables', price: 50.5, image: 'https://via.placeholder.com/80/FFA07A/000000?text=Pasta' },
    { id: 2, name: 'Spicy Fried Chicken', quantity: 2, notes: 'Dont Add Vegetables', price: 45.7, image: 'https://via.placeholder.com/80/FF6347/FFFFFF?text=Chicken' },
    { id: 6, name: 'Spaghetti Carbonara', quantity: 2, notes: 'Dont Add Vegetables', price: 35.0, image: 'https://via.placeholder.com/80/F5DEB3/000000?text=Spaghetti' },
]);

const paymentSummary = ref({
    subTotal: 131.2,
    tax: 5.2,
    total: 136.4,
});

</script>

<style>
/* Adjust max-height calculation if needed due to header */
.main-content-area > div {
  /* Subtract header height (e.g., 60px) and padding (e.g., 1rem * 2) */
   max-height: calc(100vh - 60px - 2rem);
}

/* Keep other styles from previous step */
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.overflow-auto::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.overflow-auto::-webkit-scrollbar-thumb {
  background-color: #ced4da;
  border-radius: 3px;
}
.overflow-auto::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* Ensure Invoice sidebar can scroll its content */
.invoice-sidebar.overflow-auto {
    max-height: calc(100vh - 60px - 2rem); /* Match max-height */
}

</style>