<template>
  <div class="calculator__buttons">
    <MyButton @click="clearInput" class="ac gray">AC</MyButton>
    <MyButton @click="deleteOne" class="deleteOne gray">C</MyButton>
    <MyButton @click="signChange" class="plus-minus gray">+/-</MyButton>
    <MyButton @click="divideNumber" class="division orange">/</MyButton>

    <MyButton @click="insertNumber" class="seven black">7</MyButton>
    <MyButton @click="insertNumber" class="eight black">8</MyButton>
    <MyButton @click="insertNumber" class="nine black">9</MyButton>
    <MyButton @click="multiplyNumber" class="multiply orange">x</MyButton>

    <MyButton @click="insertNumber" class="four black">4</MyButton>
    <MyButton @click="insertNumber" class="five black">5</MyButton>
    <MyButton @click="insertNumber" class="six black">6</MyButton>
    <MyButton @click='subtractNumber' class="minus orange">-</MyButton>

    <MyButton @click="insertNumber" class="one black">1</MyButton>
    <MyButton @click="insertNumber" class="two black">2</MyButton>
    <MyButton @click="insertNumber" class="three black">3</MyButton>
    <MyButton @click="addNumber" class="plus orange">+</MyButton>

    <MyButton @click="insertNumber" class="zero black">0</MyButton>
    <MyButton @click="insertFloat" class="dot black">.</MyButton>
    <MyButton @click="calculateNumbers" class="equal orange">=</MyButton>


  </div>
</template>

<script>
import MyButton from "@/calculator/components/UI/MyButton.vue";

const buttons = document.querySelectorAll("button")


export default {
  components: {MyButton},


  methods: {
    insertNumber(data) {
      this.$emit('inputValue', data.target.innerHTML)
    },
    clearInput() {
      this.$emit('clearInput')
    },
    deleteOne() {
      this.$emit('deleteOne')
    },
    signChange() {
      this.$emit('signChange')
    },
    addNumber() {
      this.$emit('addNumber')
    },
    insertFloat() {
      this.$emit('insertFloat')
    },
    subtractNumber() {
      this.$emit('subtractNumber')
    },
    multiplyNumber() {
      this.$emit('multiplyNumber')
    },
    divideNumber() {
      this.$emit('divideNumber')
    },
    calculateNumbers() {
      this.$emit('calculateNumbers')
    }
  }
}
</script>

<style scoped>
.calculator__buttons {
  width: 290px;
}

button {
  font-family: calculator;
  margin: 5px;
  font-size: 30px;
  border: 3px solid rgba(33, 33, 33, 0.51);
  -webkit-box-shadow: -1px 5px 7px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: -1px 5px 7px 0px rgba(0, 0, 0, 0.18);
  box-shadow: -1px 5px 7px 0px rgba(0, 0, 0, 0.18);
}

button:active {
  scale: 0.98;
}

.black, .gray {
  color: #c5ba9a;
}

.black {
  background: #30323d;

}


.gray {
  background: #42375e;

}

.orange {
  background: #34416b;
}

.zero {
  width: 134px;
  border-radius: 30px;
}


</style>