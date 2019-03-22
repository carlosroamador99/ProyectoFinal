import { success, notFound } from '../../services/response/'
import { ImgRestaurante } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ImgRestaurante.create(body)
    .then((imgRestaurante) => imgRestaurante.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  ImgRestaurante.count(query)
    .then(count => ImgRestaurante.find(query, select, cursor)
      .then((imgRestaurantes) => ({
        count,
        rows: imgRestaurantes.map((imgRestaurante) => imgRestaurante.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ImgRestaurante.findById(params.id)
    .then(notFound(res))
    .then((imgRestaurante) => imgRestaurante ? imgRestaurante.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ImgRestaurante.findById(params.id)
    .then(notFound(res))
    .then((imgRestaurante) => imgRestaurante ? Object.assign(imgRestaurante, body).save() : null)
    .then((imgRestaurante) => imgRestaurante ? imgRestaurante.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ImgRestaurante.findById(params.id)
    .then(notFound(res))
    .then((imgRestaurante) => imgRestaurante ? imgRestaurante.remove() : null)
    .then(success(res, 204))
    .catch(next)
