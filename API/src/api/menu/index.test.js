import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Menu } from '.'

const app = () => express(apiRoot, routes)

let menu

beforeEach(async () => {
  menu = await Menu.create({})
})

test('POST /menus 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ entrantes: 'test', primr_plato: 'test', seg_plato: 'test', postre: 'test', bebidas: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.entrantes).toEqual('test')
  expect(body.primr_plato).toEqual('test')
  expect(body.seg_plato).toEqual('test')
  expect(body.postre).toEqual('test')
  expect(body.bebidas).toEqual('test')
})

test('GET /menus 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /menus/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${menu.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(menu.id)
})

test('GET /menus/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /menus/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${menu.id}`)
    .send({ entrantes: 'test', primr_plato: 'test', seg_plato: 'test', postre: 'test', bebidas: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(menu.id)
  expect(body.entrantes).toEqual('test')
  expect(body.primr_plato).toEqual('test')
  expect(body.seg_plato).toEqual('test')
  expect(body.postre).toEqual('test')
  expect(body.bebidas).toEqual('test')
})

test('PUT /menus/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ entrantes: 'test', primr_plato: 'test', seg_plato: 'test', postre: 'test', bebidas: 'test' })
  expect(status).toBe(404)
})

test('DELETE /menus/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${menu.id}`)
  expect(status).toBe(204)
})

test('DELETE /menus/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
