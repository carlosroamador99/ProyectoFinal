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
      .populate('menu')
      .populate('comentarios')
      .populate('url_imagen')
      .populate('categorias')
      .populate('user')
      .then((restaurantes) => ({
        count,
        rows: restaurantes.map((restaurante) => restaurante.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Restaurante.findById(params.id)
    .populate('menu')
    .populate('comentarios')
    .populate('url_imagen')
    .populate('categorias')
    .populate('user')
    .then(notFound(res))
    .then((restaurante) => restaurante ? restaurante.view() : null)
    .then(success(res))
    .catch(next)

//export const update = ({ bodymen: { body }, params }, res, next) =>
//  Restaurante.findById(params.id)
//    .then(notFound(res))
//    .populate('menu')
//    .populate('comentarios')
//    .populate('url_imagen')
//    .populate('categorias')
//    .populate('user')
//    .then((restaurante) => restaurante ? Object.assign(restaurante, body).save() : null)
//    .then((restaurante) => restaurante ? restaurante.view(true) : null)
//    .then(success(res))
//    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Restaurante.findById(params.id)
    .populate('menu')
    .populate('comentarios')
    .populate('url_imagen')
    .populate('categorias')
    .then(notFound(res))
    .then((restaurante) => restaurante ? Object.assign(restaurante, body).save() : null)
    .then((restaurante) => restaurante ? restaurante.view(true) : null)
    .then(success(res))
    .catch(next)

export const updateMenu = ({ bodymen: { body }, params }, res, next) =>
  Restaurante.findById(params.id)
    .populate('menu')
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
