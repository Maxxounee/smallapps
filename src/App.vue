<template>
  <div class="wrapper">
    <div class="calculator">

      <CalculatorBlock></CalculatorBlock>

    </div>


  </div>

</template>

<script>

import CalculatorBlock from "@/calculator/CalculatorBlock.vue";

export default {
  name: 'App',
  components: {
    CalculatorBlock,


  }
}
</script>

<style>
@font-face {
  font-family: 'calculator';
  src: url('~@/assets/fonts/calculator.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
}

._container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/*-----*/

.calculator {
  background: #1e1e1e;
}

</style>
