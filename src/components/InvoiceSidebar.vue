<template>
  <div class="invoice-sidebar bg-white p-3 shadow-sm d-flex flex-column">
    <h2 class="fs-5 fw-bold mb-3">Invoice</h2>

    <!-- Order Items List -->
    <div class="order-items-list flex-grow-1 mb-3 overflow-auto pe-2">
      <InvoiceItem v-for="item in orderItems" :key="item.id" :item="item" />
    </div>

    <!-- Payment Summary -->
    <PaymentSummary :summary="paymentSummary" class="mb-3" />

    <!-- Payment Methods -->
    <PaymentMethods class="mb-4" />

    <!-- Place Order Button -->
    <button class="btn btn-primary btn-lg w-100">Place An Order</button>
  </div>
</template>

<script setup>
import InvoiceItem from './InvoiceItem.vue';
import PaymentSummary from './PaymentSummary.vue';
import PaymentMethods from './PaymentMethods.vue';

defineProps({
  orderItems: Array,
  paymentSummary: Object
});
</script>

<style scoped>
.invoice-sidebar {
  width: 350px; /* Fixed width for the sidebar */
  flex-shrink: 0;
  border-radius: 0.5rem;
}
.order-items-list {
    /* Max height calculation might be needed if header/footer varies */
     max-height: calc(100vh - 400px); /* Rough estimate, adjust as needed */
}

/* Custom scrollbar for this specific list */
.order-items-list::-webkit-scrollbar {
  width: 5px;
}
.order-items-list::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 3px;
}
.order-items-list::-webkit-scrollbar-track {
  background-color: transparent; /* Match sidebar bg */
}
</style>