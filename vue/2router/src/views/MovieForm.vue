<script>
  export default{
      data(){ 
        return { 
        targetDt : '20250423',
        movie : [ ]
        }
      },
      methods : {     
        getmovie(){
          fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt=' + this.targetDt)
          .then(response => response.json())
          .then(response => this.movie = response.boxOfficeResult.dailyBoxOfficeList)
        }
      },
      mounted(){
        this.getmovie();
      }
    }
</script>
<template>
<input v-model="targetDt"><button @click="getmovie">조회</button>
    <table>
      <tr v-for="mv in movie">
        <td>{{mv.rnum}}</td>
        <td>{{mv.movieNm}}</td>
        <td>{{mv.openDt}}</td>
      </tr>
    </table>
</template>
<style>
</style>