<template>
  <div class="payment-methods">
     <!-- Hidden radio inputs for accessibility and state management -->
    <input type="radio" class="btn-check" name="paymentMethod" id="creditCard" value="creditCard" autocomplete="off" checked v-model="selectedMethod">
    <label class="btn btn-outline-secondary payment-btn" for="creditCard">
        <i class="bi bi-credit-card d-block mb-1 fs-4"></i>
        <span class="small">Credit Card</span>
    </label>

    <input type="radio" class="btn-check" name="paymentMethod" id="paylater" value="paylater" autocomplete="off" v-model="selectedMethod">
    <label class="btn btn-outline-secondary payment-btn" for="paylater">
        <i class="bi bi-calendar-check d-block mb-1 fs-4"></i> <!-- Placeholder icon -->
        <span class="small">Paylater</span>
    </label>

    <input type="radio" class="btn-check" name="paymentMethod" id="cash" value="cash" autocomplete="off" v-model="selectedMethod">
    <label class="btn btn-outline-secondary payment-btn" for="cash">
         <i class="bi bi-cash-coin d-block mb-1 fs-4"></i> <!-- Placeholder icon -->
         <span class="small">Cash Payout</span>
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedMethod = ref('creditCard'); // Default selection
</script>

<style scoped>
.payment-methods {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem; /* 12px gap */
}

.payment-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0.5rem; /* Adjust padding */
    border-radius: 0.375rem; /* Standard radius */
    text-align: center;
    border-color: #dee2e6;
    color: #6c757d;
    height: 80px; /* Fixed height */
    transition: all 0.2s ease-in-out;
    font-weight: 500;
}

.payment-btn:hover {
    background-color: #f8f9fa;
    border-color: #ced4da;
}

/* Style for the checked label */
.btn-check:checked + .payment-btn {
    color: #0d6efd; /* Primary color */
    background-color: #e7f1ff; /* Lighter primary background */
    border-color: #0d6efd; /* Primary border color */
    box-shadow: 0 0 0 0.1rem rgba(13, 110, 253, 0.25); /* Subtle glow */
}
.payment-btn .small {
    font-size: 0.75rem; /* Smaller text */
    line-height: 1.2;
}
.payment-btn i {
    margin-bottom: 0.25rem !important;
}
</style>