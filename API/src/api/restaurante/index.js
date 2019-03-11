import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Restaurante, { schema } from './model'

const router = new Router()
const { nombre, calle, descripcion, localizacion, horario, cod_postal } = schema.tree

/**
 * @api {post} /restaurantes Create restaurante
 * @apiName CreateRestaurante
 * @apiGroup Restaurante
 * @apiParam nombre Restaurante's nombre.
 * @apiParam calle Restaurante's calle.
 * @apiParam descripcion Restaurante's descripcion.
 * @apiParam localizacion Restaurante's localizacion.
 * @apiParam horario Restaurante's horario.
 * @apiParam cod_postal Restaurante's cod_postal.
 * @apiSuccess {Object} restaurante Restaurante's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurante not found.
 */
router.post('/',
  body({ nombre, calle, descripcion, localizacion, horario, cod_postal }),
  create)

/**
 * @api {get} /restaurantes Retrieve restaurantes
 * @apiName RetrieveRestaurantes
 * @apiGroup Restaurante
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of restaurantes.
 * @apiSuccess {Object[]} rows List of restaurantes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /restaurantes/:id Retrieve restaurante
 * @apiName RetrieveRestaurante
 * @apiGroup Restaurante
 * @apiSuccess {Object} restaurante Restaurante's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurante not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /restaurantes/:id Update restaurante
 * @apiName UpdateRestaurante
 * @apiGroup Restaurante
 * @apiParam nombre Restaurante's nombre.
 * @apiParam calle Restaurante's calle.
 * @apiParam descripcion Restaurante's descripcion.
 * @apiParam localizacion Restaurante's localizacion.
 * @apiParam horario Restaurante's horario.
 * @apiParam cod_postal Restaurante's cod_postal.
 * @apiSuccess {Object} restaurante Restaurante's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurante not found.
 */
router.put('/:id',
  body({ nombre, calle, descripcion, localizacion, horario, cod_postal }),
  update)

/**
 * @api {delete} /restaurantes/:id Delete restaurante
 * @apiName DeleteRestaurante
 * @apiGroup Restaurante
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Restaurante not found.
 */
router.delete('/:id',
  destroy)

export default router
