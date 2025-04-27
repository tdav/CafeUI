<template>
  <div class="d-flex vh-100 bg-light">
    <LeftSidebar />
    <div class="flex-grow-1 d-flex flex-column overflow-hidden">
      <AppHeader />
      <div class="main-content-area d-flex flex-grow-1 p-3 overflow-hidden">
        <MainContent
          :menuItems="lunchMenuItems"
          class="flex-grow-1 overflow-auto"
          :class="{ 'me-3': orderItems.length > 0 }"
          @update-item-quantity="handleItemQuantityUpdate" 
        />

        <!-- Invoice Sidebar: Render only if orderItems is not empty -->
        <InvoiceSidebar
          v-if="orderItems.length > 0"
          :orderItems="orderItems"
          :paymentSummary="paymentSummary"
          class="overflow-auto invoice-sidebar-wrapper" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'; // Import computed
import LeftSidebar from './components/LeftSidebar.vue';
import AppHeader from './components/AppHeader.vue';
import MainContent from './components/MainContent.vue';
import InvoiceSidebar from './components/InvoiceSidebar.vue';

// --- Sample Data ---
// Keep lunchMenuItems definition as before...
const lunchMenuItems = ref([
  { id: 1, name: 'Pasta Bolognese', description: 'Delicious beef lasagna...', price: 50.5, image: '...', quantity: 0 }, // Start quantity at 0
  { id: 2, name: 'Spicy Fried Chicken', description: 'Delicious beef lasagna...', price: 45.7, image: '...', quantity: 0 },
  { id: 3, name: 'Grilled Steak', description: 'Delicious beef lasagna...', price: 80.0, image: '...', quantity: 0 },
  { id: 4, name: 'Fish And Chips', description: 'Delicious beef lasagna...', price: 90.4, image: '...', quantity: 0 },
  { id: 5, name: 'Beef Bourguignon', description: 'Delicious beef lasagna...', price: 75.5, image: '...', quantity: 0 },
  { id: 6, name: 'Spaghetti Carbonara', description: 'Delicious beef lasagna...', price: 35.3, image: '...', quantity: 0 },
   { id: 7, name: 'Ratatouille', description: 'Delicious beef lasagna...', price: 26.7, image: '...', quantity: 0 },
   { id: 8, name: 'Kimchi Jjigae', description: 'Delicious beef lasagna...', price: 45.7, image: '...', quantity: 0 },
   { id: 9, name: 'Tofu Scramble', description: 'Delicious beef lasagna...', price: 85.6, image: '...', quantity: 0 },
]);

// Initial empty order
const orderItems = ref([]);

// --- Computed Property for Payment Summary (Calculated from orderItems) ---
const paymentSummary = computed(() => {
    const subTotal = orderItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxRate = 0.04; // Example tax rate (4%)
    const tax = subTotal * taxRate;
    const total = subTotal + tax;
    return {
        subTotal: parseFloat(subTotal.toFixed(1)), // Match original format
        tax: parseFloat(tax.toFixed(1)),         // Match original format
        total: parseFloat(total.toFixed(1))       // Match original format
    };
});

// --- Methods ---
// This is a simplified handler. A real app would be more robust.
function handleItemQuantityUpdate({ itemId, newQuantity }) {
    console.log(`App: Updating item ${itemId} to quantity ${newQuantity}`);
    const menuItem = lunchMenuItems.value.find(item => item.id === itemId);
    if (!menuItem) return;

    // Update quantity on the main menu item list (optional, but good for consistency)
    menuItem.quantity = newQuantity;

    const existingOrderItemIndex = orderItems.value.findIndex(item => item.id === itemId);

    if (newQuantity > 0) {
        if (existingOrderItemIndex !== -1) {
            // Update existing item in order
            orderItems.value[existingOrderItemIndex].quantity = newQuantity;
             // Price might differ in invoice vs menu (e.g., discounts), adjust if needed
             // orderItems.value[existingOrderItemIndex].price = menuItem.price;
        } else {
            // Add new item to order
            orderItems.value.push({
                id: menuItem.id,
                name: menuItem.name,
                quantity: newQuantity,
                notes: '', // Add default notes or a way to set them
                price: menuItem.price, // Or a specific invoice price
                image: menuItem.image.replace('150', '80') // Example: use smaller image for invoice
            });
        }
    } else {
        // Remove item from order if quantity is 0
        if (existingOrderItemIndex !== -1) {
            orderItems.value.splice(existingOrderItemIndex, 1);
        }
    }

    console.log("Current Order Items:", JSON.parse(JSON.stringify(orderItems.value)));
}

// Make sure MainContent emits 'updateItemQuantity'
// Make sure MenuItemCard emits 'updateQuantity' which bubbles up via MainContent

</script>

<style>
/* Keep existing styles */
/* ... */

/* Ensure MainContent takes full width when invoice is hidden */
.main-content-area > .main-content:not(.me-3) {
  /* No specific style needed here as flex-grow handles it, */
  /* but you could add specific overrides if required */
   margin-right: 0 !important; /* Ensure margin is removed */
}

/* Optional: Style the wrapper if needed, e.g., for transitions */
.invoice-sidebar-wrapper {
    width: 350px; /* Keep original width */
    flex-shrink: 0;
    /* Add transition effects if desired */
    /* transition: opacity 0.3s ease, width 0.3s ease; */
}

/* Adjust max-height calculation if needed due to header */
.main-content-area > div {
   max-height: calc(100vh - 60px - 2rem);
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f8f9fa;
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

.invoice-sidebar.overflow-auto {
    max-height: calc(100vh - 60px - 2rem);
}
</style>