<template>
  <div>
    <el-image
      class="imgs-wrap"
      v-for="item in list"
      :key="item.key"
      :src="item.url"
      :fit="fit"
      :preview-src-list="srcList" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        fit: 'fill',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
        list: [
          {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          },
          {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          },
          {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          },
          {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          }
          ,
          {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          },
          {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          },
          {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          },
          {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          },
          {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .imgs-wrap {
    width: 200px;
    height: 160px;
    margin: 0px 10px 10px 0px;
  }
</style>