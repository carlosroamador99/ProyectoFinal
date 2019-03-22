import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ImgRestaurante, { schema } from './model'

const router = new Router()
const { url_rest } = schema.tree

/**
 * @api {post} /img_restaurantes Create img restaurante
 * @apiName CreateImgRestaurante
 * @apiGroup ImgRestaurante
 * @apiParam url_rest Img restaurante's url_rest.
 * @apiSuccess {Object} imgRestaurante Img restaurante's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Img restaurante not found.
 */
router.post('/',
  body({ url_rest }),
  create)

/**
 * @api {get} /img_restaurantes Retrieve img restaurantes
 * @apiName RetrieveImgRestaurantes
 * @apiGroup ImgRestaurante
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of img restaurantes.
 * @apiSuccess {Object[]} rows List of img restaurantes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /img_restaurantes/:id Retrieve img restaurante
 * @apiName RetrieveImgRestaurante
 * @apiGroup ImgRestaurante
 * @apiSuccess {Object} imgRestaurante Img restaurante's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Img restaurante not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /img_restaurantes/:id Update img restaurante
 * @apiName UpdateImgRestaurante
 * @apiGroup ImgRestaurante
 * @apiParam url_rest Img restaurante's url_rest.
 * @apiSuccess {Object} imgRestaurante Img restaurante's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Img restaurante not found.
 */
router.put('/:id',
  body({ url_rest }),
  update)

/**
 * @api {delete} /img_restaurantes/:id Delete img restaurante
 * @apiName DeleteImgRestaurante
 * @apiGroup ImgRestaurante
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Img restaurante not found.
 */
router.delete('/:id',
  destroy)

export default router
