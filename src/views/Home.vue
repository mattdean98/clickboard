<template>
  <section class="section">
    <div class="container">
      <h1 class="title">ClickBoard</h1>
      <p class="subtitle">
        Have this window focused and paste! (<strong>ctrl + v </strong>or<strong>
          command + v
        </strong>
        )
      </p>
    </div>
  </section>
</template>

<script>
import { usePasteStore } from '@/stores/paste';

export default {
  setup() {
    const pasteStore = usePasteStore();

    return { pasteStore };
  },
};
</script>
