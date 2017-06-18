<template>
  <div class="validator-errors-component">
    <div class="v-error" v-if="hasErrors(field)" :style="{ color : colorError}">
      <p v-if="!shouldShowAll" v-text="validator.first(field)"></p>
      <span v-else>
        <ul class="v-bag-errors" v-for="error in validator.get(field)" >
          <li class="v-error" v-text="error"></li>
        </ul>
      </span>
    </div>
    <div class="v-error" v-else></div>
  </div>
</template>
<script>
  export default
  {
    props : {
      field : {
        required : true
      },
      validator : {
        required : true
      },
      showAll : {
        required : false,
        default : () => undefined
      },
      colorError : {
        required : false,
        default : () => 'red'
      }
    },
    mounted(){},
    methods : {
      hasErrors(name){
        return this.errors.indexOf(name) > -1
      },
    },
    computed : {
      shouldShowAll(){
        return (this.showAll == '' || this.showAll == true);
      },
      errors(){
        let errors = [];
        if(this.validator){
          errors = Object.keys(this.validator.messages)
        }
        return errors;
      }
    }
  }
</script>
<style lang="scss">
  .validator-errors-component{
    ul.v-bag-errors{
      padding: 0;
      margin: 0;
      li.v-error{
        list-style: none;
      }
    }
  }
</style>