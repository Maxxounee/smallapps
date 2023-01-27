<template>
  <div class="calculator__container _container">
    <CalculatorInfo></CalculatorInfo>
    <Calculator class="calculator__calculator"></Calculator>
  </div>
</template>

<script>
import Calculator from "@/calculator/components/Calculator.vue";
import CalculatorInfo from "@/calculator/components/CalculatorInfo.vue";

export default {
  components: {CalculatorInfo, Calculator}
}
</script>

<style scoped>
calculator__calculator {
  scale: 0.5;
  transform: scale(0.4);
}

.calculator__container {
  /*height: 850px;*/
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 840px) {
  .calculator__container {
    flex-direction: column;
    justify-content: center;
  }
}
</style>