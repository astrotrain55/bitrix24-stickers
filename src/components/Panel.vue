<template>
  <div class="panel">
    <div class="panel__item left">
      <slot></slot>
    </div>
    <div class="panel__item right">
      <app-button icon="content-copy" @click="$emit('copy')">Копировать код</app-button>
      <app-button icon="plus" @click="popup = true">Добавить стикер</app-button>
    </div>
    <teleport to="#modals">
      <app-popup
        v-if="popup"
        @add="$emit('add', $event)"
        @close="popup = false"
      ></app-popup>
    </teleport>
  </div>
</template>

<script>
import AppButton from './Button.vue';
import AppPopup from './Popup.vue';

export default {
  data() {
    return {
      popup: false,
    };
  },
  components: {
    AppButton,
    AppPopup,
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
