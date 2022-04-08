<template>
  <div class="card" :title="title">
    <app-icon
      class="card__close"
      name="close-circle"
      @click.stop="$emit('close')"
    ></app-icon>
    <label class="card__label">
      <img
        class="card__image"
        :src="icon"
        :alt="title"
      >
      <input
        class="card__toggle"
        type="checkbox"
        :checked="selected"
        @click="$emit('toggle', $event.target.checked)"
      >
    </label>
  </div>
</template>

<script>
import AppIcon from './Icon.vue';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    AppIcon,
  },
  name: 'app-card',
};
</script>

<style lang="stylus">
@require '~@/assets/smartgrid.styl'

.card
  position relative
  box-shadow 0 3px 1px -2px rgba(0,0,0,.2),
             0 2px 2px 0 rgba(0,0,0,.14),
             0 1px 5px 0 rgba(0,0,0,.12)
  border-radius 4px
  &__label
    display block
    text-align center
    padding 12px
  &__image
    max-width 100%
    height auto
  &__close
    cursor pointer
    position absolute
    top 12px
    left 12px
  &__toggle
    position absolute
    top 12px
    right 12px
</style>
