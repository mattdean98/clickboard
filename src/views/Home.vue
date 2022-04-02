<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Clickboard</h1>
      <p v-if="pasteStore.pastes.length <= 0" class="subtitle">
        Have this window focused and paste!
        <span>(<strong>ctrl + v </strong>or<strong> command + v</strong>) </span>
      </p>
      <p v-else class="subtitle">
        Click a tile to <strong>copy it back</strong> to your clipboard!
      </p>

      <div class="columns is-multiline">
        <div v-for="(item, index) in pasteStore.pastes" :key="`${item}`" class="column is-12">
          <Tile @delete="removeFromStore(index)" :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import usePasteStore from '@/stores/paste';
import Tile from '@/components/tile.vue';

export default {
  setup() {
    const pasteStore = usePasteStore();

    return { pasteStore };
  },

  components: {
    Tile,
  },

  mounted() {
    window.addEventListener('keydown', async (e) => {
      if (e.ctrlKey === true && e.key.toUpperCase() === 'V') {
        const text = await navigator.clipboard.readText();
        this.addToStore(text);
      }
    });
  },

  methods: {
    addToStore(item) {
      this.pasteStore.addToPastes(item);
    },

    removeFromStore(index) {
      this.pasteStore.removeFromPastes(index);
    },
  },
};
</script>

<style lang="scss" scoped>
// TODO do this later https://w3bits.com/css-grid-masonry/
.tileContainer {
  column-count: 4;
  column-gap: 1em;
}

.tile {
  display: inline-block;
}
</style>
