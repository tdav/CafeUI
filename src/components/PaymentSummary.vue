<template>
  <div class="payment-summary border-top pt-3">
     <h3 class="fs-6 fw-bold mb-3">Payment Summary</h3>
    <div class="d-flex justify-content-between mb-1">
      <span class="text-muted">Sub Total</span>
      <span class="fw-medium">${{ summary.subTotal.toFixed(1) }}</span>
    </div>
    <div class="d-flex justify-content-between mb-2">
      <span class="text-muted">Tax</span>
      <span class="fw-medium">${{ summary.tax.toFixed(1) }}</span>
    </div>
    <div class="d-flex justify-content-between fw-bold border-top pt-2">
      <span>Total Payment</span>
      <span>${{ summary.total.toFixed(1) }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  summary: Object
});
</script>

<style scoped>
.text-muted {
    font-size: 0.9rem;
}
.fw-medium {
    font-weight: 500 !important;
     font-size: 0.9rem;
}
.fw-bold {
    font-size: 0.95rem;
}
</style>