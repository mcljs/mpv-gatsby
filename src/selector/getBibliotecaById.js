import {BibliotecaData} from '../components/biblioteca/BibliotecaData'

export const getBibliotecaById = (id) => {


  return BibliotecaData.find(biblioteca => biblioteca.id === id);

}
