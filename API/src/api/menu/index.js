import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { password as passwordAuth, master, token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Menu, { schema } from './model'

const router = new Router()
const { entrantes, primr_plato, seg_plato, postre, bebidas } = schema.tree

/**
 * @api {post} /menus Create menu
 * @apiName CreateMenu
 * @apiGroup Menu
 * @apiParam entrantes Menu's entrantes.
 * @apiParam primr_plato Menu's primr_plato.
 * @apiParam seg_plato Menu's seg_plato.
 * @apiParam postre Menu's postre.
 * @apiParam bebidas Menu's bebidas.
 * @apiSuccess {Object} menu Menu's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Menu not found.
 */
router.post('/',
  token({roles: ['admin', 'superadmin'] }),
  body({ entrantes, primr_plato, seg_plato, postre, bebidas }),
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
 * @apiParam entrantes Menu's entrantes.
 * @apiParam primr_plato Menu's primr_plato.
 * @apiParam seg_plato Menu's seg_plato.
 * @apiParam postre Menu's postre.
 * @apiParam bebidas Menu's bebidas.
 * @apiSuccess {Object} menu Menu's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Menu not found.
 */
router.put('/:id',
  token({roles: ['admin', 'superadmin'] }),
  body({ entrantes, primr_plato, seg_plato, postre, bebidas }),
  update)

/**
 * @api {delete} /menus/:id Delete menu
 * @apiName DeleteMenu
 * @apiGroup Menu
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Menu not found.
 */
router.delete('/:id',
  token({roles: ['admin', 'superadmin'] }),
  destroy)

export default router
