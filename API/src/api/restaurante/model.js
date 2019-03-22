import mongoose, { Schema } from 'mongoose'

const restauranteSchema = new Schema({
  nombre: {
    type: String
  },
  calle: {
    type: String
  },
  descripcion: {
    type: String
  },
  localizacion: {
    type: String
  },
  horario: {
    type: String
  },
  cod_post: {
    type: String
  },
  categorias: [{
    type: Schema.ObjectId,
    ref: 'Categoria'
  }],
  url_imagen: [{
    type: Schema.ObjectId,
    ref: 'ImgRestaurante'
  }],
  menu: {
    type: Schema.ObjectId,
    ref: 'Menu'
  },
  comentarios: [{
    type: Schema.ObjectId,
    ref: 'Comentario'
  }],
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

restauranteSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nombre: this.nombre,
      calle: this.calle,
      descripcion: this.descripcion,
      localizacion: this.localizacion,
      horario: this.horario,
      cod_post: this.cod_post,
      categorias: this.categorias,
      url_imagen: this.url_imagen,
      menu: this.menu,
      //menuId: this.menu.id,
      comentarios: this.comentarios,
      user: this.user,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Restaurante', restauranteSchema)

export const schema = model.schema
export default model
