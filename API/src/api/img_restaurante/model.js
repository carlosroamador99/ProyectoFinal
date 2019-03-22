import mongoose, { Schema } from 'mongoose'

const imgRestauranteSchema = new Schema({
  url_rest: {
    type: String
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

imgRestauranteSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      url_rest: this.url_rest,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('ImgRestaurante', imgRestauranteSchema)

export const schema = model.schema
export default model
