import mongoose, { Schema } from 'mongoose'

const menuSchema = new Schema({
  tes: {
    type: String
  },
  prim_plato: {
    type: String
  },
  seg_plato: {
    type: String
  },
  postre: {
    type: String
  },
  bebidato: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

menuSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      tes: this.tes,
      prim_plato: this.prim_plato,
      seg_plato: this.seg_plato,
      postre: this.postre,
      bebidato: this.bebidato,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Menu', menuSchema)

export const schema = model.schema
export default model
