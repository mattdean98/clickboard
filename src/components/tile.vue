<template>
  <div
    @click="copyToClipboard()"
    class="notification"
    :class="{ 'is-success is-light': showCopied }"
  >
    <button @click="onDeleteClick()" class="delete"></button>

    {{ item }}

    <span v-if="showCopied" class="copiedLabel is-size-7">
      <i class="fa-solid fa-check"></i>
      Copied!
    </span>
  </div>
</template>

<script>
// - components
// - mixins
// - props
// - data
// - computed
// - watch
// - lifecycle
// - methods
// - template

// import toast from 'bulma-toast';

export default {
  props: {
    item: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      showCopied: false,
      canCopy: true,
    };
  },

  computed: {
    // itemTrimmed: {
    // }
  },

  methods: {
    copyToClipboard() {
      if (this.canCopy) {
        navigator.clipboard.writeText(this.item);
        this.showCopiedLabel();
      }
    },

    onDeleteClick() {
      this.canCopy = false;
      this.$emit('delete');
      setTimeout(() => {
        this.canCopy = true;
      }, 100);
    },

    showCopiedLabel() {
      this.showCopied = true;
      setTimeout(() => {
        this.showCopied = false;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  cursor: pointer;
  transition: margin 0.3s;
  margin-top: 0rem;

  &:hover {
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;
  }
}

.copiedLabel {
  position: absolute;
  bottom: 0;
  right: 0;

  padding-bottom: 0.2rem;
  padding-right: 0.4rem;
}
</style>
