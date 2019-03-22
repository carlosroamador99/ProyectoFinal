import { Categoria } from '.'

let categoria

beforeEach(async () => {
  categoria = await Categoria.create({ categoria: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = categoria.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(categoria.id)
    expect(view.categoria).toBe(categoria.categoria)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = categoria.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(categoria.id)
    expect(view.categoria).toBe(categoria.categoria)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
