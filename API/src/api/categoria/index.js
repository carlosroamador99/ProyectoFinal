import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { password as passwordAuth, master, token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Categoria, { schema } from './model'

const router = new Router()
const { categoria } = schema.tree

/**
 * @api {post} /categorias Create categoria
 * @apiName CreateCategoria
 * @apiGroup Categoria
 * @apiParam categoria Categoria's categoria.
 * @apiSuccess {Object} categoria Categoria's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Categoria not found.
 */
router.post('/',
  token({ required: true, roles: ['superadmin'] }),
  body({ categoria }),
  create)

/**
 * @api {get} /categorias Retrieve categorias
 * @apiName RetrieveCategorias
 * @apiGroup Categoria
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of categorias.
 * @apiSuccess {Object[]} rows List of categorias.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /categorias/:id Retrieve categoria
 * @apiName RetrieveCategoria
 * @apiGroup Categoria
 * @apiSuccess {Object} categoria Categoria's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Categoria not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /categorias/:id Update categoria
 * @apiName UpdateCategoria
 * @apiGroup Categoria
 * @apiParam categoria Categoria's categoria.
 * @apiSuccess {Object} categoria Categoria's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Categoria not found.
 */
router.put('/:id',
  token({ required: true, roles: ['superadmin'] }),
  body({ categoria }),
  update)

/**
 * @api {delete} /categorias/:id Delete categoria
 * @apiName DeleteCategoria
 * @apiGroup Categoria
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Categoria not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['superadmin'] }),
  destroy)

export default router
