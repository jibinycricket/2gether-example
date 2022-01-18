<template>
  <time>{{formatDate(date)}}</time>
</template>

<script>
export default {
  name: 'Date',
  props:[
    'date'
  ],
  methods:{
    formatDate(rawDate) {
      return Intl.DateTimeFormat('en-US',{
        year: 'numeric',
        month: 'short',
        day: '2-digit'}).format(new Date(rawDate))
    }
  }
}
</script>