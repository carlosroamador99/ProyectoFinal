import { Menu } from '.'

let menu

beforeEach(async () => {
  menu = await Menu.create({ tes: 'test', prim_plato: 'test', seg_plato: 'test', postre: 'test', bebidato: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = menu.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(menu.id)
    expect(view.tes).toBe(menu.tes)
    expect(view.prim_plato).toBe(menu.prim_plato)
    expect(view.seg_plato).toBe(menu.seg_plato)
    expect(view.postre).toBe(menu.postre)
    expect(view.bebidato).toBe(menu.bebidato)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = menu.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(menu.id)
    expect(view.tes).toBe(menu.tes)
    expect(view.prim_plato).toBe(menu.prim_plato)
    expect(view.seg_plato).toBe(menu.seg_plato)
    expect(view.postre).toBe(menu.postre)
    expect(view.bebidato).toBe(menu.bebidato)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
