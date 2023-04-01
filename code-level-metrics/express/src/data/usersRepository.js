const userData = [
  {
    username: 'bob',
    email: 'bob@bob.net',
    address: {
      street: '123 W. Here',
      zip: '85333',
      state: 'AZ'
    },
    phone: {
      countryCode: '3',
      number: '5555555555'
    }
  },
  {
    username: 'joe',
    email: 'joe@joe.net',
    address: {
      street: '555 W. North Pl',
      zip: '85111',
      state: 'AZ'
    }
  },
  {
    username: 'steve',
    email: 'steve@steve.net',
    address: {
      street: '555 E. West Pl',
      zip: '90001',
      state: 'CA'
    }
  },
  {
    username: 'barry',
    email: 'barry@barry.net',
  }
]

function getUserData() {
  return userData.map((user) => {
    return {
      ...user,
      address:
        user.address.street + ', ' + user.address.state + ' ' + user.address.zip
    }
  })
}

function countUsersByState() {
  return userData.reduce((map, user) => {
    const count = map.get(user.address.state) ?? 0
    map.set(user.address.state, count + 1)
  }, new Map())
}

function userStateReport() {
  return countUsersByState()
}

function userView() {
  return {
    users: getUserData()
  }
}

module.exports = {
  userView,
  userStateReport
}
