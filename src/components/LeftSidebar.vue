<template>
  <div
    class="left-sidebar d-flex flex-column bg-white shadow-sm transition-all"
    :class="{ 'expanded': isExpanded }"
  >
    <!-- Toggle Button -->
    <div class="sidebar-header p-2 text-center">
       <button class="btn btn-icon" @click="toggleExpand">
          <!-- Show different icon based on state -->
         <i v-if="!isExpanded" class="bi bi-grid-3x3-gap-fill fs-4 text-primary"></i>
         <i v-else class="bi bi-arrow-left-square-fill fs-4 text-primary"></i>
         <!-- Optional: Show text only when expanded -->
         <!-- <span v-show="isExpanded" class="ms-2 fw-bold">MENU</span> -->
       </button>
    </div>

    <!-- Menu Items -->
    <nav class="nav flex-column flex-grow-1 p-2">
      <a
        href="#"
        class="nav-link sidebar-link d-flex align-items-center mb-2"
        :class="{ 'active': activeItem === 'dashboard', 'justify-content-center': !isExpanded }"
        @click.prevent="setActiveItem('dashboard')"
      >
        <i class="bi bi-grid-fill fs-5 icon-area"></i>
        <span v-show="isExpanded" class="link-text ms-2">Dashboard</span>
      </a>
      <a
        href="#"
        class="nav-link sidebar-link d-flex align-items-center mb-2"
        :class="{ 'active': activeItem === 'orders', 'justify-content-center': !isExpanded }"
        @click.prevent="setActiveItem('orders')"
      >
        <i class="bi bi-receipt fs-5 icon-area"></i>
        <span v-show="isExpanded" class="link-text ms-2">Orders</span>
      </a>
      <a
        href="#"
        class="nav-link sidebar-link d-flex align-items-center mb-2"
        :class="{ 'active': activeItem === 'schedule', 'justify-content-center': !isExpanded }"
        @click.prevent="setActiveItem('schedule')"
      >
        <i class="bi bi-calendar3 fs-5 icon-area"></i>
        <span v-show="isExpanded" class="link-text ms-2">Schedule</span>
      </a>
      <a
        href="#"
        class="nav-link sidebar-link d-flex align-items-center mb-2"
        :class="{ 'active': activeItem === 'reports', 'justify-content-center': !isExpanded }"
        @click.prevent="setActiveItem('reports')"
      >
        <i class="bi bi-graph-up fs-5 icon-area"></i>
        <span v-show="isExpanded" class="link-text ms-2">Reports</span>
      </a>
      <a
        href="#"
        class="nav-link sidebar-link d-flex align-items-center mb-2"
        :class="{ 'active': activeItem === 'messages', 'justify-content-center': !isExpanded }"
        @click.prevent="setActiveItem('messages')"
      >
        <i class="bi bi-envelope fs-5 icon-area"></i>
        <span v-show="isExpanded" class="link-text ms-2">Messages</span>
      </a>
       <a
        href="#"
        class="nav-link sidebar-link d-flex align-items-center mb-2"
        :class="{ 'active': activeItem === 'chat', 'justify-content-center': !isExpanded }"
        @click.prevent="setActiveItem('chat')"
      >
        <i class="bi bi-chat-left-dots fs-5 icon-area"></i>
        <span v-show="isExpanded" class="link-text ms-2">Chat</span>
      </a>
      <!-- Add more links as needed -->
    </nav>

    <!-- Bottom Items -->
    <div class="mt-auto p-2">
      <a
        href="#"
        class="nav-link sidebar-link d-flex align-items-center mb-2"
        :class="{ 'active': activeItem === 'help', 'justify-content-center': !isExpanded }"
        @click.prevent="setActiveItem('help')"
      >
        <i class="bi bi-question-circle fs-5 icon-area"></i>
        <span v-show="isExpanded" class="link-text ms-2">Help</span>
      </a>
      <a
        href="#"
        class="nav-link sidebar-link d-flex align-items-center"
        :class="{ 'active': activeItem === 'logout', 'justify-content-center': !isExpanded }"
        @click.prevent="setActiveItem('logout')"
      >
        <i class="bi bi-box-arrow-right fs-5 icon-area"></i>
        <span v-show="isExpanded" class="link-text ms-2">Logout</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isExpanded = ref(false); // Sidebar starts collapsed
const activeItem = ref('dashboard'); // Default active item

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const setActiveItem = (itemName) => {
  activeItem.value = itemName;
  // Optionally collapse the sidebar when an item is clicked on mobile/small screens
  // if (window.innerWidth < 768) { isExpanded.value = false; }
  // Or always collapse:
  // isExpanded.value = false;
  console.log("Active item:", itemName); // Placeholder action
};
</script>

<style scoped>
.left-sidebar {
  width: 65px; /* Collapsed width */
  flex-shrink: 0;
  overflow-x: hidden; /* Hide text when collapsing */
}

.left-sidebar.expanded {
  width: 230px; /* Expanded width */
}

.transition-all {
  transition: width 0.3s ease-in-out;
}

.sidebar-header {
    height: 60px; /* Match AppHeader height if desired */
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #dee2e6; /* Optional separator */
    margin-bottom: 0.5rem;
}

.btn-icon {
    color: var(--bs-secondary-color); /* Use Bootstrap variable */
    background: none;
    border: none;
    padding: 0.5rem;
    line-height: 1;
    border-radius: 0.375rem;
}
.btn-icon:hover {
    background-color: #e9ecef; /* Light grey hover */
}
.btn-icon .bi {
    vertical-align: middle;
}
.text-primary {
    color: var(--bs-primary) !important; /* Use Bootstrap variable */
}

.sidebar-link {
  padding: 0.65rem 0.75rem; /* Adjust padding */
  border-radius: 0.375rem;
  color: #6c757d; /* Default link color (secondary) */
  white-space: nowrap; /* Prevent text wrapping */
}

.sidebar-link:hover {
  background-color: #e9ecef;
  color: #495057;
}

.sidebar-link.active {
  background-color: #e7f1ff; /* Light primary background */
  color: var(--bs-primary);
  font-weight: 500;
}

.sidebar-link .icon-area {
  width: 24px; /* Fixed width for the icon area */
  text-align: center; /* Center icon within its area */
  flex-shrink: 0;
}

/* Ensure icon is centered when collapsed and aligned left when expanded */
.sidebar-link:not(.justify-content-center) .icon-area {
    text-align: left; /* Or remove fixed width/text-align */
}

.link-text {
  opacity: 1;
  transition: opacity 0.2s ease-in-out 0.1s; /* Fade in text slightly delayed */
}

/* Style for when collapsed (text hidden by overflow or v-show) */
.left-sidebar:not(.expanded) .link-text {
   opacity: 0;
   /* display: none; v-show handles this */
}

/* When collapsed, center the icon using justify-content-center on the link */
.left-sidebar:not(.expanded) .sidebar-link {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

</style>