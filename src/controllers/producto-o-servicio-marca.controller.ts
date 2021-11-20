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
  Marca,
} from '../models';
import {ProductoOServicioRepository} from '../repositories';

export class ProductoOServicioMarcaController {
  constructor(
    @repository(ProductoOServicioRepository)
    public productoOServicioRepository: ProductoOServicioRepository,
  ) { }

  @get('/producto-o-servicios/{id}/marca', {
    responses: {
      '200': {
        description: 'Marca belonging to ProductoOServicio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Marca)},
          },
        },
      },
    },
  })
  async getMarca(
    @param.path.string('id') id: typeof ProductoOServicio.prototype.id,
  ): Promise<Marca> {
    return this.productoOServicioRepository.tiene_marca(id);
  }
}
