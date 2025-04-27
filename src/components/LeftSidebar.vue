<template>
  <div class="left-sidebar d-flex flex-column align-items-center bg-white p-2 shadow-sm">
    <button class="btn btn-icon mb-3">
      <i class="bi bi-grid-3x3-gap-fill fs-4 text-primary"></i>
    </button>
    <button class="btn btn-icon mb-3">
      <i class="bi bi-receipt fs-4 text-secondary"></i>
    </button>
    <button class="btn btn-icon mb-3">
      <i class="bi bi-calendar3 fs-4 text-secondary"></i>
    </button>
     <button class="btn btn-icon mb-3">
       <i class="bi bi-graph-up fs-4 text-secondary"></i>
     </button>
     <button class="btn btn-icon mb-3">
       <i class="bi bi-envelope fs-4 text-secondary"></i>
     </button>
     <button class="btn btn-icon mb-3">
        <i class="bi bi-chat-left-dots fs-4 text-secondary"></i>
     </button>

     <div class="mt-auto d-flex flex-column align-items-center">
        <button class="btn btn-icon mb-3">
            <i class="bi bi-question-circle fs-4 text-secondary"></i>
        </button>
        <button class="btn btn-icon">
            <i class="bi bi-box-arrow-right fs-4 text-secondary"></i>
        </button>
     </div>
  </div>
</template>

<script setup>
// No script logic needed for this static example
</script>

<style scoped>
.left-sidebar {
  width: 65px; /* Fixed width */
  flex-shrink: 0;
}
.btn-icon {
    color: #6c757d; /* Secondary color */
    background: none;
    border: none;
    padding: 0.5rem;
    line-height: 1;
    border-radius: 0.375rem; /* btn default radius */
}
.btn-icon:hover {
    background-color: #e9ecef; /* Light grey hover */
}
.btn-icon .bi {
    vertical-align: middle;
}
.text-primary {
    color: #0d6efd !important; /* Bootstrap Primary */
}
.text-secondary {
    color: #6c757d !important; /* Bootstrap Secondary */
}
</style>