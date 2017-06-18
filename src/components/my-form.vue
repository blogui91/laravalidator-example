<template>
  <div class="my-form-component">
    <h1>My form component</h1>
    
    <form @submit.prevent="save">
      <div class="form-group col-md-6 " :class="{ 'has-error' : hasErrors('fullname') } ">
        <label for="input-fullname">Fullname</label>
        <input type="text" v-model="form.fullname" class="form-control" id="input-fullname" placeholder="Write your fullname">
        <validator-errors field="fullname" :validator="validator"></validator-errors>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error' : hasErrors('email') } ">
        <label for="input-email">Email address</label>
        <input type="email" v-model="form.email" class="form-control" id="input-email" placeholder="Email">
        <validator-errors field="email" :validator="validator"></validator-errors>
      </div>
      <div class="form-group col-md-12">
        <label for="input-description">Description</label>
        <textarea class="form-control" v-model="form.description" name="description" rows="3"></textarea>
        <validator-errors field="description" :validator="validator"></validator-errors>
      </div>
      <button type="submit" class="btn btn-default">Save</button>
    </form>
  </div>
</template>
<script>
  import Validator from 'laravalidator-js'
  export default
  {
    data(){
      return{
        validator : null,
        form : {
          fullname : '',
          email : '',
          description : ''
        },
        rules : {
          fullname : ['required','email','numeric'],
          email : 'email',
          description : 'required'
        },
        messages : {
          fullname : {
            required : 'El campo fullname es requerido'
          }
        }
      }
    },
    methods : {
      hasErrors(name){
        return this.errors.indexOf(name) > -1
      },
      save(){
        this.validator = Validator.make(this.form, this.rules, this.messages);
        if (this.validator.passes()) {
          console.log("Valid for create/update")
        }

        if (this.validator.fails()) {
          console.log(this.validator.messages)
        }

      }
    },
    computed : {
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
  .my-form-component{
    max-width: 620px;
    margin: 0 auto;
  }
</style>