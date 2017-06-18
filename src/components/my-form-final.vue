<template>
  <div class="my-form-component">
    <h1>My form component</h1>
    
    <form @submit.prevent="save">
      <div class="form-group col-md-6 " :class="{ 'has-error' : hasErrors('fullname') } ">
        <label for="input-fullname">Fullname</label>
        <input v-model="form.fullname" type="text" class="form-control" id="input-fullname" placeholder="Write your fullname">
        <validator-errors field="fullname" :validator="validator" ></validator-errors>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error' : hasErrors('email') } ">
        <label for="input-email">Email address</label>
        <input v-model="form.email" type="email" class="form-control" id="input-email" placeholder="Email">
        <validator-errors field="email" :validator="validator"></validator-errors>
      </div>
      <div class="form-group col-md-12" :class="{ 'has-error' : hasErrors('description') } ">
        <label for="input-description">Description</label>
        <textarea v-model="form.description" class="form-control" name="description" rows="3"></textarea>
        <validator-errors field="description" :validator="validator"></validator-errors>
      </div>
      <button type="submit" class="btn btn-default">Save</button>
    </form>
  </div>
</template>
<script>
  import { FormValidator } from 'src/validators/form.validator'
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
      }
    },
    methods : {
      hasErrors(name){
        return this.errors.indexOf(name) > -1
      },
      save(){
        this.validator = FormValidator.make(this.form);
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
          let keys = Object.keys(this.validator.messages)
          keys.forEach(key => {
            if(this.validator.messages[key].length > 0){
              errors.push(key)
            }
          })
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