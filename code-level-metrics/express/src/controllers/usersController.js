const { userView, userStateReport } = require('../data/usersRepository')

const fetchUsers = (req, res) => {
  console.log('Getting user data')
  const data = userView()
  res.send(data)
}

const fetchUserStateReport = (req, res) => {
  console.log('Getting user state report')
  const data = userStateReport()
  res.send(data)
}

module.exports = {
  fetchUsers,
  fetchUserStateReport
}
