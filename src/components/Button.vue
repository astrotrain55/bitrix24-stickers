<template>
  <button class="button">
    <app-icon v-if="icon" :name="icon"></app-icon>
    <slot></slot>
  </button>
</template>

<script>
import AppIcon from './Icon.vue';

export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
  components: {
    AppIcon,
  },
  name: 'app-button',
};
</script>

<style lang="stylus">
@require '~@/assets/smartgrid.styl'

.button
  cursor pointer
  height 36px
  min-width 64px
  padding 0 16px
  background-color #3f51b5
  border-color #3f51b5
  color #ffffff
  text-transform uppercase
  font-weight 500
  box-shadow 0 3px 1px -2px rgba(0,0,0,.2),
             0 2px 2px 0 rgba(0,0,0,.14),
             0 1px 5px 0 rgba(0,0,0,.12)
</style>
