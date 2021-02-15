import {BibliotecaData} from '../data/biblioteca'

export const getBibliotecaById = (id) => {


  return BibliotecaData.find(biblioteca => biblioteca.id === id);

}
