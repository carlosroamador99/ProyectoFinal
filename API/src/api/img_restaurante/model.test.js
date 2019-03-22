import { ImgRestaurante } from '.'

let imgRestaurante

beforeEach(async () => {
  imgRestaurante = await ImgRestaurante.create({ url_rest: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = imgRestaurante.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(imgRestaurante.id)
    expect(view.url_rest).toBe(imgRestaurante.url_rest)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = imgRestaurante.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(imgRestaurante.id)
    expect(view.url_rest).toBe(imgRestaurante.url_rest)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
