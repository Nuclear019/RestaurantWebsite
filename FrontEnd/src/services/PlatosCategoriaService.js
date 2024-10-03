import axios from "axios";
const RESERVA_BASE_API_URL = 'http://localhost:8080/api/v1/plato-categorias';

class PlatosCategoriaService {
    getAllCategorias() {
        return axios.get(RESERVA_BASE_API_URL);
    }
 
    getCategoriaById(idCategoria) {
        return axios.get(RESERVA_BASE_API_URL + '/' + idCategoria);
    }
}
export default new PlatosCategoriaService();

