<template>
  <div>
    <!-- Trigger Button -->
    <button class="button is-primary" @click="openModal">Open Modal</button>

    <!-- Modal -->
    <div :class="['modal', { 'is-active': isModalActive }]">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal Title</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <!-- Modal content goes here -->
          <div class="box">
            <p>Hello! I am a Bulma modal within a Vue component.</p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="closeModal">Close</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalActive: false,
    };
  },
  methods: {
    openModal() {
      this.isModalActive = true;
    },
    closeModal() {
      this.isModalActive = false;
    },
  },
};
</script>

<style>
/* Add any custom CSS styles here */
</style>
