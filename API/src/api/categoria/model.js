import mongoose, { Schema } from 'mongoose'

const categoriaSchema = new Schema({
  categoria: [{
    type: String
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

categoriaSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      categoria: this.categoria,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Categoria', categoriaSchema)

export const schema = model.schema
export default model
