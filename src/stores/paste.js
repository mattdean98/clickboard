import { defineStore } from 'pinia';

export const usePasteStore = defineStore('pasteStore', {
  state() {
    return {
      pastes: [],
    };
  },

  actions: {
    addToPastes(item) {
      this.pastes.unshift(item);
    },
  },
});
