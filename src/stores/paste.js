import { defineStore } from 'pinia';

export default defineStore('pasteStore', {
  state() {
    return {
      pastes: [],
    };
  },

  actions: {
    addToPastes(item) {
      this.pastes.unshift(item);
    },

    removeFromPastes(index) {
      this.pastes.splice(index, 1);
    },
  },
});
