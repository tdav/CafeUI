<template>
  <nav class="app-header navbar navbar-expand navbar-light bg-white px-3 border-bottom">
    <!-- Left side can be empty or have branding if needed -->
    <div class="navbar-nav me-auto">
      <!-- Placeholder for potential future elements -->
    </div>

    <!-- Right side elements -->
    <div class="navbar-nav align-items-center ms-auto">
        <!-- Language/Region Flags - Using placeholders -->
        <div class="nav-item d-flex align-items-center me-3">
           <img src="https://flagcdn.com/w20/gb.png" width="20" alt="GB Flag" class="me-2">
           <img src="https://flagcdn.com/w20/id.png" width="20" alt="ID Flag">
           <!-- In a real app, this would be a dropdown or dynamic -->
        </div>

      <!-- Notification Bell -->
      <div class="nav-item me-3">
        <button class="btn btn-link text-secondary position-relative p-0">
          <i class="bi bi-bell fs-5"></i>
          <!-- Optional: Add a notification badge -->
          <!-- <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span> -->
        </button>
      </div>

      <!-- User Info -->
      <div class="nav-item dropdown">
         <a class="nav-link d-flex align-items-center p-0" href="#" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://via.placeholder.com/40/B0E0E6/000000?text=CH" class="rounded-circle me-2" alt="User Avatar" width="32" height="32">
            <div class="d-none d-sm-block">
              <div class="fw-bold user-name">Courtney Henry</div>
              <small class="text-muted user-role">Casher 1st Shift</small>
            </div>
         </a>
         <!-- Optional Dropdown Menu -->
         <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownUser">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
         </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No specific script logic needed for this static example
</script>

<style scoped>
.app-header {
  height: 60px; /* Example height */
  flex-shrink: 0; /* Prevent header from shrinking */
}
.navbar-nav .nav-link {
    color: #495057; /* Darker grey for text */
}
.user-name {
    font-size: 0.9rem;
    line-height: 1.2;
}
.user-role {
    font-size: 0.75rem;
    line-height: 1;
}
.btn-link.text-secondary {
    color: #6c757d !important;
}
.btn-link:hover {
    color: #343a40 !important;
}
.btn-link:focus {
    box-shadow: none;
}
.flag-icon {
    width: 20px;
    height: auto;
    border: 1px solid #dee2e6; /* Optional: subtle border */
}
/* Ensure dropdown works with Bootstrap JS */
</style>