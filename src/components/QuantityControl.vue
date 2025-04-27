<template>
   <div class="input-group quantity-control" style="width: 100px;">
     <button class="btn btn-outline-secondary btn-sm" type="button" @click="decrement" :disabled="modelValue <= 0">-</button>
     <input type="text" class="form-control form-control-sm text-center" :value="modelValue" readonly>
     <button class="btn btn-primary btn-sm text-white" type="button" @click="increment">+</button>
   </div>
</template>

<script setup>
const props = defineProps({
    modelValue: { 
        type: Number,
        default: 0
    }
});

const emit = defineEmits(['update:quantity']);

function increment() {
    emit('update:quantity', props.modelValue + 1);
     
}

function decrement() {
    if (props.modelValue > 0) {
        emit('update:quantity', props.modelValue - 1);
    }
}
</script>

<style scoped>
.quantity-control .form-control {
    flex-grow: 0.5; /* Prevent input from taking too much space */
    text-align: center;
    background-color: #fff; /* Ensure bg is white */
    border-left: 0;
    border-right: 0;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
}
.quantity-control .btn {
    border-radius: 0.375rem !important; /* Ensure rounded corners */
    width: 30px; /* Fixed width for buttons */
     z-index: 1; /* Ensure buttons are clickable over input edges */
}
/* Specific styling for +/- buttons */
.quantity-control .btn:first-of-type { /* Minus button */
     border-top-right-radius: 0 !important;
     border-bottom-right-radius: 0 !important;
     border-right: 0; /* Remove border next to input */
     background-color: #f8f9fa; /* Lighter background for minus */
     color: #6c757d;
     border-color: #dee2e6;
}
.quantity-control .btn:last-of-type { /* Plus button */
     border-top-left-radius: 0 !important;
     border-bottom-left-radius: 0 !important;
     border-left: 0; /* Remove border next to input */
     /* Standard primary button colors */
}
.quantity-control .btn:first-of-type:hover {
    background-color: #e9ecef;
}

.quantity-control input.form-control {
    border-radius: 0 !important; /* No radius on input */
    border-color: #dee2e6;
}
/* Adjust blue color if needed */
.btn-primary {
    background-color: #0d6efd;
    border-color: #0d6efd;
}
</style>