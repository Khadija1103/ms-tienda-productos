import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ProductoOServicio, ProductoOServicioRelations, Marca, Categoria, Foto, Proveedor} from '../models';
import {MarcaRepository} from './marca.repository';
import {CategoriaRepository} from './categoria.repository';
import {FotoRepository} from './foto.repository';
import {ProveedorRepository} from './proveedor.repository';

export class ProductoOServicioRepository extends DefaultCrudRepository<
  ProductoOServicio,
  typeof ProductoOServicio.prototype.id,
  ProductoOServicioRelations
> {

  public readonly tiene_marca: BelongsToAccessor<Marca, typeof ProductoOServicio.prototype.id>;

  public readonly tiene_categoria: BelongsToAccessor<Categoria, typeof ProductoOServicio.prototype.id>;

  public readonly fotos: HasManyRepositoryFactory<Foto, typeof ProductoOServicio.prototype.id>;

  public readonly idproveedo: BelongsToAccessor<Proveedor, typeof ProductoOServicio.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('MarcaRepository') protected marcaRepositoryGetter: Getter<MarcaRepository>, @repository.getter('CategoriaRepository') protected categoriaRepositoryGetter: Getter<CategoriaRepository>, @repository.getter('FotoRepository') protected fotoRepositoryGetter: Getter<FotoRepository>, @repository.getter('ProveedorRepository') protected proveedorRepositoryGetter: Getter<ProveedorRepository>,
  ) {
    super(ProductoOServicio, dataSource);
    this.idproveedo = this.createBelongsToAccessorFor('idproveedo', proveedorRepositoryGetter,);
    this.registerInclusionResolver('idproveedo', this.idproveedo.inclusionResolver);
    this.fotos = this.createHasManyRepositoryFactoryFor('fotos', fotoRepositoryGetter,);
    this.registerInclusionResolver('fotos', this.fotos.inclusionResolver);
    this.tiene_categoria = this.createBelongsToAccessorFor('tiene_categoria', categoriaRepositoryGetter,);
    this.registerInclusionResolver('tiene_categoria', this.tiene_categoria.inclusionResolver);
    this.tiene_marca = this.createBelongsToAccessorFor('tiene_marca', marcaRepositoryGetter,);
    this.registerInclusionResolver('tiene_marca', this.tiene_marca.inclusionResolver);
  }
}
