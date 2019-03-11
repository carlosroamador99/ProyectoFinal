import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Restaurante } from '.'

const app = () => express(apiRoot, routes)

let restaurante

beforeEach(async () => {
  restaurante = await Restaurante.create({})
})

test('POST /restaurantes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ nombre: 'test', calle: 'test', descripcion: 'test', localizacion: 'test', horario: 'test', cod_postal: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.nombre).toEqual('test')
  expect(body.calle).toEqual('test')
  expect(body.descripcion).toEqual('test')
  expect(body.localizacion).toEqual('test')
  expect(body.horario).toEqual('test')
  expect(body.cod_postal).toEqual('test')
})

test('GET /restaurantes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /restaurantes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${restaurante.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(restaurante.id)
})

test('GET /restaurantes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /restaurantes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${restaurante.id}`)
    .send({ nombre: 'test', calle: 'test', descripcion: 'test', localizacion: 'test', horario: 'test', cod_postal: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(restaurante.id)
  expect(body.nombre).toEqual('test')
  expect(body.calle).toEqual('test')
  expect(body.descripcion).toEqual('test')
  expect(body.localizacion).toEqual('test')
  expect(body.horario).toEqual('test')
  expect(body.cod_postal).toEqual('test')
})

test('PUT /restaurantes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ nombre: 'test', calle: 'test', descripcion: 'test', localizacion: 'test', horario: 'test', cod_postal: 'test' })
  expect(status).toBe(404)
})

test('DELETE /restaurantes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${restaurante.id}`)
  expect(status).toBe(204)
})

test('DELETE /restaurantes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
