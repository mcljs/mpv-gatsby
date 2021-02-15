import { BibliotecaData } from '../data/biblioteca'


export const getBibliotecaByPublisher = (publisher) => {

  const validPublishers = ['Planes y Programas', 'Vivencia Paz y Vida'];

  if(!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`)

  }

  return BibliotecaData.filter(biblioteca => biblioteca.publisher === publisher);

}
