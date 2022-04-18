<template>
  <header class="header">
    <div class="l-wrapper">
      <app-panel
        @copy="onCopy"
        @add="onAdd"
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

export default {
  methods: {
    getIcon({ icon, size = 100, title = 'Noname' }) {
      const fullPath = [window.location.origin, window.location.pathname, icon].join('');
      const path = !icon.includes(window.location.protocol) ? fullPath : icon;
      return `[icon=${path} size=${size} title=${title}]`;
    },
    onCopy() {
      copy(this.text);
    },
    onAdd(sticker) {
      this.customStickers.list.push(sticker);
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
        list: [],
      },
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
