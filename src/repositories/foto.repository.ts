import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Foto, FotoRelations, ProductoOServicio} from '../models';
import {ProductoOServicioRepository} from './producto-o-servicio.repository';

export class FotoRepository extends DefaultCrudRepository<
  Foto,
  typeof Foto.prototype.id,
  FotoRelations
> {

  public readonly produvtoservicio: BelongsToAccessor<ProductoOServicio, typeof Foto.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ProductoOServicioRepository') protected productoOServicioRepositoryGetter: Getter<ProductoOServicioRepository>,
  ) {
    super(Foto, dataSource);
    this.produvtoservicio = this.createBelongsToAccessorFor('produvtoservicio', productoOServicioRepositoryGetter,);
    this.registerInclusionResolver('produvtoservicio', this.produvtoservicio.inclusionResolver);
  }
}
