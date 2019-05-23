<template>
  <div class="hello">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private  $imconn:any= {}

  private  $imoption:any= {}

  // created
  created(){
      this.$imconn = this.$imconn;
      this.$imoption= this.$imoption;
      this.loginWebIM()
  }

  loginWebIM(){
      this.$imoption.user = 'qlk';
      this.$imoption.pwd = '123456';
      this.$imconn.open(this.$imoption);         
      this.$imconn.listen({ 
         onOpened: (message:any) =>{ 
             console.log('用户已上线') 
         },               
         onTextMessage: (message:any)=> { 
             console.log(message)
       },//收到文本消息           
      })     
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
