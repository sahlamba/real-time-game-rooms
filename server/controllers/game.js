export const createNew = (req, res) => {
  try {
    const { userId } = req.query
    if (!userId) {
      res.status(400).send({
        ok: false,
        message: 'Usage: ?userId=<user-uuid>',
      })
      return
    }
    res.json({
      ok: true,
      userId,
    })
  } catch (error) {
    console.log(error)
  }
}
