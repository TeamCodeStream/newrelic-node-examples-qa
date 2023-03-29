const userData = [
    {
        "username": "bob",
        "email": "bob@bob.net",
        "address": {
            "street": "123 W. Here",
            "zip": "11111"
        }
    },
    {
        "username": "joe",
        "email": "joe@joe.net"
    }
]

function collectStreetAddresses() {
    const addresses = userData.map(data => data.address.street)
    return addresses
}

function collectZipCodes() {
    const zipCodes = userData.map(data => data.address.zip)
    return zipCodes
}

module.exports = {
    collectStreetAddresses, collectZipCodes
}
