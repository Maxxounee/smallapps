<template>
  <div class="calculator">
    <h1 class="calculator__name">AnotherOne</h1>
    <div class="calculator__inner-shadow"></div>
    <div class="calculator__top">
      <form @submit.prevent>
        <div class="hide"></div>
        <input class='calculator__saved' type="text" v-model="savedValue" readonly>
        <input class='calculator__action' type="text" v-model="action">
        <input class='calculator__input' type="text" v-model="value.value" placeholder="0">
      </form>

    </div>
    <Buttons class="btn"
             @inputValue="inputValue"
             @clearInput="clearInput"
             @deleteOne="deleteOne"
             @signChange="signChange"
             @addNumber="addNumber"
             @insertFloat="insertFloat"
             @subtractNumber="subtractNumber"
             @calculateNumbers="calculateNumbers"
             @multiplyNumber="multiplyNumber"
             @divideNumber="divideNumber"
    ></Buttons>


  </div>
</template>

<script>
import Buttons from "@/calculator/components/Buttons.vue";
import calculate from "@/calculator/components/calculate";

export default {
  components: {Buttons},
  data() {
    return {
      value: {
        value: '',
        calculated: false
      },
      savedValue: '',
      action: ''
    }
  },
  methods: {
    inputValue(data) {
      if (this.value.calculated) {
        this.value.value = ''
        this.value.calculated = false
      }
      this.value.value += data
    },
    insertFloat() {
      if (this.value.value === '') {
        this.value.value = '0.'
      } else if (this.value.value.indexOf('.') === -1) {
        this.value.value += '.'
      }
    },
    saveInput() {
      this.savedValue = this.value.value
    },
    clearInput() {
      if (this.value.value === '') {
        this.savedValue = ''
        this.action = ''
      } else {
        this.value.value = ''
        this.value.calculated = false
      }
    },
    deleteOne() {
      this.value.value = this.value.value.slice(0, -1)
    },
    signChange() {
      this.value.value = String(this.value.value)
      if (this.value.value !== '') {
        if (this.value.value.indexOf('-') === -1) {
          this.value.value = '-' + this.value.value
        } else {
          this.value.value = this.value.value.substring()
        }
      }
    },
    addNumber() {
      this.prepare()
      if (this.savedValue !== '') {
        this.action = '+'
      }
    },

    subtractNumber() {
      if (this.value.value === '') {
        this.value.value = '-'
      } else {
        this.prepare()
        if (this.savedValue !== '') {
          this.action = '-'
        }
      }

    },
    multiplyNumber() {
      this.prepare()
      if (this.savedValue !== '') {
        this.action = '*'
      }
    },
    divideNumber() {
      this.prepare()
      if (this.savedValue !== '') {
        this.action = '/'
      }
    },
    prepare() {
      this.value.calculated = false
      if (this.savedValue && this.value.value !== '') {
        this.calculateNumbers()
      }
      if (this.savedValue === '') {
        this.saveInput()
        this.value.value = ''
      }
    },
    calculateNumbers() {

      if (this.value.value === '') {
        this.action = '+'
      }
      if (this.savedValue) {
        this.value.value = calculate(this.savedValue, this.value.value, this.action)
        this.value.calculated = true
        this.action = ''
        this.savedValue = ''
      }

    }


  }
}

</script>

<style scoped>

.calculator {
  font-family: calculator;
  position: relative;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 560px;
  width: 310px;
  border-radius: 35px;
  -webkit-box-shadow: 29px 21px 28px 25px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 29px 21px 28px 25px rgba(0, 0, 0, 0.1);
  box-shadow: 29px 21px 28px 25px rgba(0, 0, 0, 0.1);
}

.calculator__name {
  position: absolute;
  top: 5px;
  right: 30px;
  font-size: 30px;
  color: #7a7a7a;
}

.calculator__inner-shadow {
  z-index: 0;
  top: 0;
  right: 0;
  border-radius: 35px;
  height: 100%;
  width: 100%;
  position: absolute;
  -webkit-box-shadow: 0px 0px 12px 10px rgba(0, 0, 0, 0.25) inset;
  -moz-box-shadow: 0px 0px 12px 10px rgba(0, 0, 0, 0.25) inset;
  box-shadow: 0px 0px 12px 10px rgba(0, 0, 0, 0.25) inset;
}

.calculator__top {
  height: 170px;
  color: floralwhite;
  display: flex;
  align-items: end;
  justify-content: center;
}


form {
  position: relative;
  background: rgb(191, 191, 162);
  border-radius: 10px;
  border: 4px solid rgb(20, 20, 20);
  box-sizing: content-box;
  width: 280px;
  height: 130px;
  margin-bottom: 5px;

}

.hide {
  position: absolute;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: 0px 0px 12px 10px rgba(0, 0, 0, 0.19) inset;
  -moz-box-shadow: 0px 0px 12px 10px rgba(0, 0, 0, 0.19) inset;
  box-shadow: 0px 0px 12px 10px rgba(0, 0, 0, 0.19) inset;
}

.calculator__input,
.calculator__saved,
.calculator__action {
  font-family: calculator;
  padding: 0 20px;
  width: 100%;
  background: none;
  border: none;
  color: rgb(9, 9, 9);
  text-align: end;
  font-size: 40px;
  font-weight: 300;
}

.btn {
  position: relative;
  z-index: 5;
}

.calculator__value {
  padding-right: 15px;
  font-size: 60px;

}
</style>