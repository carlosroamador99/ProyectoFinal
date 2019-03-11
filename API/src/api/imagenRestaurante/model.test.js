import { ImagenRestaurante } from '.'

let imagenRestaurante

beforeEach(async () => {
  imagenRestaurante = await ImagenRestaurante.create({ urlRestaurante: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = imagenRestaurante.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(imagenRestaurante.id)
    expect(view.urlRestaurante).toBe(imagenRestaurante.urlRestaurante)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = imagenRestaurante.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(imagenRestaurante.id)
    expect(view.urlRestaurante).toBe(imagenRestaurante.urlRestaurante)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
