import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ProductoOServicio,
  Categoria,
} from '../models';
import {ProductoOServicioRepository} from '../repositories';

export class ProductoOServicioCategoriaController {
  constructor(
    @repository(ProductoOServicioRepository)
    public productoOServicioRepository: ProductoOServicioRepository,
  ) { }

  @get('/producto-o-servicios/{id}/categoria', {
    responses: {
      '200': {
        description: 'Categoria belonging to ProductoOServicio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Categoria)},
          },
        },
      },
    },
  })
  async getCategoria(
    @param.path.string('id') id: typeof ProductoOServicio.prototype.id,
  ): Promise<Categoria> {
    return this.productoOServicioRepository.tiene_categoria(id);
  }
}
