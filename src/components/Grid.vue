<template>
  <div class="grid">
    <h2 class="grid__title">
      <span>{{ title }}</span>
      <a v-if="link" :href="link" target="_blank">
        <app-icon name="open-in-new"></app-icon>
      </a>
    </h2>
    <app-card
      v-for="sticker in list"
      :key="sticker.icon"
      :icon="sticker.icon"
      :title="sticker.title"
      :size="sticker.size"
      selected
      class="grid__item"
      @close="onClose(sticker)"
      @toggle="onToggle(sticker, $event)"
    ></app-card>
  </div>
</template>

<script>
import AppCard from './Card.vue';
import AppIcon from './Icon.vue';

export default {
  methods: {
    onClose(sticker) {
      console.log('close', sticker.title);
    },
    onToggle(sticker, checked) {
      console.log('toggle', sticker.title, checked);
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
  },
  components: {
    AppCard,
    AppIcon,
  },
  name: 'app-grid',
};
</script>

<style lang="stylus">
@require '~@/assets/smartgrid.styl'

.grid
  row-flex()
  margin-top $offset
  +from(1000px)
    margin-top $offset_w1000
  &__title
    col()
    col-size(24)
    col-size-w1000(24)
    display flex
    column-gap 10px
    align-items center
  &__item
    col()
    col-size(12)
    col-size-w1000(4.8)
    margin-bottom $offset
    +from(1000px)
      margin-bottom $offset_w1000
</style>
