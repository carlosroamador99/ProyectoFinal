import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Comentario, { schema } from './model'

const router = new Router()
const { valoracion, comentario, usuario} = schema.tree

/**
 * @api {post} /comentarios Create comentario
 * @apiName CreateComentario
 * @apiGroup Comentario
 * @apiParam valoracion Comentario's valoracion.
 * @apiParam comentario Comentario's comentario.
 * @apiSuccess {Object} comentario Comentario's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Comentario not found.
 */
router.post('/',
  body({ valoracion, comentario, usuario }),
  create)

/**
 * @api {get} /comentarios Retrieve comentarios
 * @apiName RetrieveComentarios
 * @apiGroup Comentario
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of comentarios.
 * @apiSuccess {Object[]} rows List of comentarios.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /comentarios/:id Retrieve comentario
 * @apiName RetrieveComentario
 * @apiGroup Comentario
 * @apiSuccess {Object} comentario Comentario's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Comentario not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /comentarios/:id Update comentario
 * @apiName UpdateComentario
 * @apiGroup Comentario
 * @apiParam valoracion Comentario's valoracion.
 * @apiParam comentario Comentario's comentario.
 * @apiSuccess {Object} comentario Comentario's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Comentario not found.
 */
router.put('/:id',
  body({ valoracion, comentario }),
  update)

/**
 * @api {delete} /comentarios/:id Delete comentario
 * @apiName DeleteComentario
 * @apiGroup Comentario
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Comentario not found.
 */
router.delete('/:id',
  destroy)

export default router
