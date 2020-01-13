<template>
  <div class="compose-button">
    <div>
      <buttons @upload="showNotification" @error="hideNotification"/>
    </div>

    <b-modal ref="modal" hide-footer>
      <div class="d-block text-center">
        <p class="h3">Modal is opened</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Buttons from "./Buttons.vue";

export default {
  name: "HelloWorld",
  components: {
    Buttons,
  },
  methods: {
    showNotification() {
      this.$refs.modal.show();
    },

    hideNotification() {
      this.$refs.modal.hide();
    }
  }
};
</script>