import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Comentario } from '.'

const app = () => express(apiRoot, routes)

let comentario

beforeEach(async () => {
  comentario = await Comentario.create({})
})

test('POST /comentarios 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ valoracion: 'test', comentario: 'test', url: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.valoracion).toEqual('test')
  expect(body.comentario).toEqual('test')
  expect(body.url).toEqual('test')
})

test('GET /comentarios 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /comentarios/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${comentario.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(comentario.id)
})

test('GET /comentarios/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /comentarios/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${comentario.id}`)
    .send({ valoracion: 'test', comentario: 'test', url: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(comentario.id)
  expect(body.valoracion).toEqual('test')
  expect(body.comentario).toEqual('test')
  expect(body.url).toEqual('test')
})

test('PUT /comentarios/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ valoracion: 'test', comentario: 'test', url: 'test' })
  expect(status).toBe(404)
})

test('DELETE /comentarios/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${comentario.id}`)
  expect(status).toBe(204)
})

test('DELETE /comentarios/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
