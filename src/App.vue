<template>
  <header class="header">
    <div class="l-wrapper">
      <app-panel
        :is-popup="popup"
        @copy-code="onCopy"
        @add-sticker="onAddSticker"
        @open-popup="popup = true"
        @close-popup="popup = false"
      >
        <h1 class="header__title">bitrix24-stickers</h1>
      </app-panel>
    </div>
  </header>
  <main class="page">
    <div class="l-wrapper">
      <app-grid
        :title="customStickers.title"
        :list="customStickers.list"
        is-add
        @open-popup="popup = true"
        @remove-sticker="onRemoveSticker"
      ></app-grid>
      <app-grid
        v-for="pack in stickers"
        :key="pack.title"
        :title="pack.title"
        :list="pack.list"
        :link="pack.link"
      ></app-grid>
    </div>
  </main>
</template>

<script>
import copy from 'copy-to-clipboard';
import AppPanel from './components/Panel.vue';
import AppGrid from './components/Grid.vue';
import stickers from './assets/stickers.json';
import api from './api';

export default {
  methods: {
    getIcon({ icon, size = 100, title = 'Noname' }) {
      const fullPath = [window.location.origin, window.location.pathname, icon].join('');
      const path = icon.includes('http') ? icon : fullPath;
      return `[icon=${path} size=${size} title=${title}]`;
    },
    onCopy() {
      copy(this.text);
    },
    onSave() {
      api.set(this.customStickers.list);
    },
    onAddSticker(sticker) {
      this.customStickers.list.push(sticker);
      this.popup = false;
      this.onSave();
    },
    onRemoveSticker(sticker) {
      this.customStickers.list = this.customStickers.list.filter((item) => item !== sticker);
      this.onSave();
    },
  },
  computed: {
    text() {
      const text = [];

      [this.customStickers, ...stickers].forEach((pack) => {
        pack.list.forEach((sticker) => {
          text.push(this.getIcon(sticker));
        });
      });

      return text.join('');
    },
  },
  data() {
    return {
      stickers,
      customStickers: {
        title: 'Свои стикеры',
        list: api.get(),
      },
      popup: false,
    };
  },
  components: {
    AppPanel,
    AppGrid,
  },
  name: 'App',
};
</script>

<style lang="stylus">
@require '~@/assets/smartgrid.styl'

html
body
#app
  margin 0
  min-height 100vh

#app
  font-family Roboto, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  display flex
  flex-direction column
  min-width 320px

.header
  background-color #3f51b5
  &__title
    color #ffffff
    font-size 20px
    font-weight 400

.page
  flex-grow 1

.l-wrapper
  wrapper()
</style>
