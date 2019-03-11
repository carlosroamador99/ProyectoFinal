import { Comentario } from '.'

let comentario

beforeEach(async () => {
  comentario = await Comentario.create({ valoracion: 'test', comentario: 'test', url: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = comentario.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(comentario.id)
    expect(view.valoracion).toBe(comentario.valoracion)
    expect(view.comentario).toBe(comentario.comentario)
    expect(view.url).toBe(comentario.url)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = comentario.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(comentario.id)
    expect(view.valoracion).toBe(comentario.valoracion)
    expect(view.comentario).toBe(comentario.comentario)
    expect(view.url).toBe(comentario.url)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
