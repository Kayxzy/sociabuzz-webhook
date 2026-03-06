let donations = global.donations || []
global.donations = donations

export default async function handler(req, res) {

  res.status(200).json({
    success: true,
    donations: donations
  })

}
