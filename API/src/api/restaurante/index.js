import { Router } from 'express'
import { middleware as query, Schema } from 'querymen'
import { middleware as body } from 'bodymen'
import { password as passwordAuth, master, token } from '../../services/passport'
import { create, index, show, update, destroy, updateMenu } from './controller'
import { schema } from './model'
export Restaurante, { schema } from './model'

const router = new Router()
const { nombre, calle, descripcion, localizacion, horario, cod_post, categorias, url_imagen, menu, comentarios, user } = schema.tree

const restaurantsSchema = new Schema({
  user: {
    type: [String],
    paths: ['user']
  }
})

/**
 * @api {post} /restaurantes Create restaurante
 * @apiName CreateRestaurante
 * @apiGroup Restaurante
 * @apiParam nombre Restaurante's nombre.
 * @apiParam calle Restaurante's calle.
 * @apiParam descripcion Restaurante's descripcion.
 * @apiParam localizacion Restaurante's localizacion.
 * @apiParam horario Restaurante's horario.
 * @apiParam cod_post Restaurante's cod_post.
 * @apiSuccess {Object} restaurante Restaurante's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurante not found.
 */
router.post('/',
  token({ required: true, roles: ['superadmin'] }),
  body({ nombre, calle, descripcion, localizacion, horario, cod_post, categorias, url_imagen, menu, comentarios, user }),
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
  query(restaurantsSchema),
  index)

router.get('/android',
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
 * @apiParam cod_post Restaurante's cod_post.
 * @apiSuccess {Object} restaurante Restaurante's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurante not found.
 */
router.put('/:id',
  body({ nombre, calle, descripcion, localizacion, horario, cod_post, user }),
  update)

router.put('/menu/:id',
  body({ menu }),
  updateMenu)

/**
 * @api {delete} /restaurantes/:id Delete restaurante
 * @apiName DeleteRestaurante
 * @apiGroup Restaurante
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Restaurante not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['superadmin'] }),
  destroy)

export default router
