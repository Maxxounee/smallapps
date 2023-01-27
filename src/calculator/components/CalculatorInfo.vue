<template>
  <div class="calculator__info info">
    <h1 class="info__title">Calculator</h1>
    <div class="info__text_first">
      Вычитать и умножать, малышей <br> не обижать –
      этому вас научат в школе.
    </div>
    <div class="info__text_second">
      А этот инновационный калькулятор, <br> построенный на VueJs, уже всему <br>
      научился и готов помочь вам с самыми <br> трудными вычислительными задачами.
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.calculator__info {
  display: flex;
  flex-direction: column;
}

.info__title {
  font-size: 130px;
  font-family: calculator;
  color: #c5ba9a;
  margin-bottom: 20px;
}

.info__text_first,
.info__text_second {
  text-align: center;
  color: #c5ba9a;
  font-family: Helvetica;
  font-size: 20px;
}

.info__text_first {
  margin-bottom: 20px;
}

@media (max-width: 550px) {
  .info__title {
    font-size: 80px;
  }

  .info__text_first,
  .info__text_second {
    font-size: 14px;
  }
}

@media (max-width: 840px) {
  .calculator__info {
    margin-bottom: 40px;
  }
}
</style>