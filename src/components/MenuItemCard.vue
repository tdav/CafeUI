<template>
    <div class="card h-100 border-0 shadow-sm menu-item-card">
        <img :src="item.image" class="card-img-top" :alt="item.name">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title fs-6 fw-bold mb-1">{{ item.name }}</h5>
            <p class="card-text text-muted small flex-grow-1">{{ item.description }}</p>
            <div class="d-flex justify-content-between align-items-center mt-2">
                <span class="fw-bold fs-5 price">${{ item.price.toFixed(1) }}</span>
                <QuantityControl :quantity="itemQuantity" @update:quantity="updateQuantity" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import QuantityControl from './QuantityControl.vue';

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['updateQuantity']);



// Local state for quantity, initialized from prop if needed
// Or directly use props.item.quantity if parent manages it tightly
const itemQuantity = ref(props.item.quantity || 0);

// Optional: Watch prop changes if parent modifies quantity
watch(() => props.item.quantity, (newVal) => {
    itemQuantity.value = newVal || 0;
});

function updateQuantity(newQuantity) {
 

    itemQuantity.value = newQuantity;
    // Emit the change with item id and the *change* amount or the *new* quantity
    // Let's emit the change amount for simplicity in this example
    // A real app might emit the new quantity or item ID + action (increment/decrement)
    
    // emit('updateQuantity', props.item.id, newQuantity > previousQuantity ? 1 : -1); // Need to track previousQuantity
    // Simpler: just emit the new value
    console.log(`Emitting update for item ${props.item.id}: new quantity ${newQuantity}`);
    // Find a way to emit the change delta if needed, or just the new value
    // emit('updateQuantity', { itemId: props.item.id, newQuantity }); // If parent needs new total

    emit('updateQuantity', { itemId: props.item.id, newQuantity });
}

</script>

<style scoped>
.menu-item-card {
    border-radius: 0.5rem;
    overflow: hidden;
    /* Ensures image corners are rounded if needed */
}

.card-img-top {
    height: 150px;
    /* Fixed height for consistency */
    object-fit: cover;
}

.price {
    color: #212529;
    /* Darker text for price */
}

.card-text {
    font-size: 0.8rem;
    /* Smaller description text */
    line-height: 1.4;
    color: #6c757d;
}
</style>