import { success, notFound } from '../../services/response/'
import { Restaurante } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Restaurante.create(body)
    .then((restaurante) => restaurante.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Restaurante.count(query)
    .then(count => Restaurante.find(query, select, cursor)
      .then((restaurantes) => ({
        count,
        rows: restaurantes.map((restaurante) => restaurante.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Restaurante.findById(params.id)
    .then(notFound(res))
    .then((restaurante) => restaurante ? restaurante.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Restaurante.findById(params.id)
    .then(notFound(res))
    .then((restaurante) => restaurante ? Object.assign(restaurante, body).save() : null)
    .then((restaurante) => restaurante ? restaurante.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Restaurante.findById(params.id)
    .then(notFound(res))
    .then((restaurante) => restaurante ? restaurante.remove() : null)
    .then(success(res, 204))
    .catch(next)
