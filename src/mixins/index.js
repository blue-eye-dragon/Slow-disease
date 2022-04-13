const mixin = {
  data() {
    return {
      isUpDown: true,
      total: 0,
      pager: {
        page: 1,
        limit: 10
      },
    }
  },
  methods: {
    onUpDown () {
      this.isUpDown = !this.isUpDown
    },
    onSubmit () { },
    search () {},
    handleDelete (id) {
      // console.log(id)
    }
  },
}
export default mixin