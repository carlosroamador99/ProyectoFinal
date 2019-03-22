import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ImgRestaurante } from '.'

const app = () => express(apiRoot, routes)

let imgRestaurante

beforeEach(async () => {
  imgRestaurante = await ImgRestaurante.create({})
})

test('POST /img_restaurantes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ url_rest: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.url_rest).toEqual('test')
})

test('GET /img_restaurantes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /img_restaurantes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${imgRestaurante.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(imgRestaurante.id)
})

test('GET /img_restaurantes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /img_restaurantes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${imgRestaurante.id}`)
    .send({ url_rest: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(imgRestaurante.id)
  expect(body.url_rest).toEqual('test')
})

test('PUT /img_restaurantes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ url_rest: 'test' })
  expect(status).toBe(404)
})

test('DELETE /img_restaurantes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${imgRestaurante.id}`)
  expect(status).toBe(204)
})

test('DELETE /img_restaurantes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
