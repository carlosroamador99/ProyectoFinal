import { Menu } from '.'

let menu

beforeEach(async () => {
  menu = await Menu.create({ entrantes: 'test', primr_plato: 'test', seg_plato: 'test', postre: 'test', bebidas: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = menu.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(menu.id)
    expect(view.entrantes).toBe(menu.entrantes)
    expect(view.primr_plato).toBe(menu.primr_plato)
    expect(view.seg_plato).toBe(menu.seg_plato)
    expect(view.postre).toBe(menu.postre)
    expect(view.bebidas).toBe(menu.bebidas)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = menu.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(menu.id)
    expect(view.entrantes).toBe(menu.entrantes)
    expect(view.primr_plato).toBe(menu.primr_plato)
    expect(view.seg_plato).toBe(menu.seg_plato)
    expect(view.postre).toBe(menu.postre)
    expect(view.bebidas).toBe(menu.bebidas)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
