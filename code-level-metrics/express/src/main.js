/*
 * Copyright 2022 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'
const express = require('express')

const userRoutes= require('./routes/users')
const cartRoutes= require('./routes/cart')

const { scheduleJob, runJob } = require('./util')

const app = express()

const holdUp = (req, res, next) => {
  // console.log("Adding delay...")
  setTimeout(next, 50)
}

app.use(holdUp)

const { PORT = '3000', HOST = 'localhost' } = process.env

app.listen(PORT, HOST, function () {
  const addr = this.address()
  const host = addr.family === 'IPv6' ? `[${addr.address}]` : addr.address
  console.log('Server started at http://%s:%s', host, addr.port)
})

app.get('/named-mw', function namedMiddlweare(_req, res) {
  res.send('This is a named middleware handler')
})

app.get('/anon', function (_req, res) {
  res.send('anonymous mw handler')
})

app.get('/arrow', (_req, res) => {
  res.send('arrow fn mw handler')
})

app.use('/', userRoutes)
app.use('/', cartRoutes)

function mw4(_req, _res, next) {
  next()
}

const handler = function (_req, res) {
  res.send('phew, that was a lot of hops')
}

// eslint-disable-next-line
app.get(
  '/chained',
  function mw1(_req, _res, next) {
    next()
  },
  function (_req, _res, next) {
    next()
  },
  (_req, _res, next) => {
    next()
  },
  mw4,
  handler
)
// The above is deliberately ugly and in one line, with named,
// anonymous, and arrow functions all in one big mess.

app.get('/schedule-job', scheduleJob)
app.get('/run-job', runJob)

app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500
  res.status(500).send(err.message)
})
