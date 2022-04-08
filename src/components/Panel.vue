<template>
  <div class="panel">
    <div class="panel__item left">
      <slot></slot>
    </div>
    <div class="panel__item right">
      <app-button @click="$emit('copy')">Копировать код</app-button>
      <app-button icon="plus" @click="$emit('add')">Добавить стикер</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from './Button.vue';

export default {
  components: {
    AppButton,
  },
  name: 'app-panel',
};
</script>

<style lang="stylus">
@require '~@/assets/smartgrid.styl'

.panel
  display flex
  justify-content space-between
  align-items center
  column-gap 10px
  margin 10px 0
  &__item
    display flex
    flex-wrap wrap
    column-gap 5px
    &.right
      justify-content flex-end
</style>
