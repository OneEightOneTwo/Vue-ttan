<template>
        <div class="tab_footer">
            <slot></slot>
        </div>   
</template>
<script>
export default {   
}
</script>
<style scoped>
.tab_footer {
  width: 100%;
  height: .48rem;
  background: #e61f09;
  text-align: center;
  line-height: .48rem;
  color: #fff;
  bottom: 0;
  position: fixed;
}
</style>
