import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/store/student", (req, res) => {
    const studentService = req.scope.resolve("studentService")
    const message = "Custom api " + studentService.getMessage()

    res.json({
      message: message,
    })
  })

  return router
}