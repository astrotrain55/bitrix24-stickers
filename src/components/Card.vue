<template>
  <div class="card" :class="{ disabled: !active }" :title="title">
    <header class="card__header">
      <app-icon
        name="close-circle"
        @click.stop="$emit('close')"
      ></app-icon>
      <input
        v-model="active"
        :id="id"
        type="checkbox"
        @click="$emit('toggle', $event.target.checked)"
      >
    </header>
    <label :for="id" class="card__label">
      <img
        class="card__image"
        :src="icon"
        :alt="title"
      >
    </label>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import AppIcon from './Icon.vue';

export default {
  data() {
    return {
      id: uuid(),
      active: this.selected,
    };
  },
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
  text-align center
  padding 10px
  border-radius 4px
  box-shadow 0 3px 1px -2px rgba(0,0,0,.2),
             0 2px 2px 0 rgba(0,0,0,.14),
             0 1px 5px 0 rgba(0,0,0,.12)
  &.disabled
    opacity .5
  &__header
    display flex
    justify-content space-between
    align-content center
    margin-bottom 5px
  &__label
    display inline-block
    max-width 200px
  &__image
    max-width 100%
    height auto
    cursor pointer
</style>
