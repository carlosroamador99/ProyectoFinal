import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Menu, { schema } from './model'

const router = new Router()
const { tes, prim_plato, seg_plato, postre, bebidato } = schema.tree

/**
 * @api {post} /menus Create menu
 * @apiName CreateMenu
 * @apiGroup Menu
 * @apiParam tes Menu's tes.
 * @apiParam prim_plato Menu's prim_plato.
 * @apiParam seg_plato Menu's seg_plato.
 * @apiParam postre Menu's postre.
 * @apiParam bebidato Menu's bebidato.
 * @apiSuccess {Object} menu Menu's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Menu not found.
 */
router.post('/',
  body({ tes, prim_plato, seg_plato, postre, bebidato }),
  create)

/**
 * @api {get} /menus Retrieve menus
 * @apiName RetrieveMenus
 * @apiGroup Menu
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of menus.
 * @apiSuccess {Object[]} rows List of menus.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /menus/:id Retrieve menu
 * @apiName RetrieveMenu
 * @apiGroup Menu
 * @apiSuccess {Object} menu Menu's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Menu not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /menus/:id Update menu
 * @apiName UpdateMenu
 * @apiGroup Menu
 * @apiParam tes Menu's tes.
 * @apiParam prim_plato Menu's prim_plato.
 * @apiParam seg_plato Menu's seg_plato.
 * @apiParam postre Menu's postre.
 * @apiParam bebidato Menu's bebidato.
 * @apiSuccess {Object} menu Menu's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Menu not found.
 */
router.put('/:id',
  body({ tes, prim_plato, seg_plato, postre, bebidato }),
  update)

/**
 * @api {delete} /menus/:id Delete menu
 * @apiName DeleteMenu
 * @apiGroup Menu
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Menu not found.
 */
router.delete('/:id',
  destroy)

export default router
