export default [
  {
    url: "/api/getUsers",
    methods:  "get",
    response: () => {
      return {
        code: 0,
        message: "ok",
        data: ["ryanzhou", "caicai"]
      }
    }
  }
]