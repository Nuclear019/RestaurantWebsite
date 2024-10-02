import axios from "axios";
const RESERVA_BASE_API_URL = 'http://localhost:8080/api/v1/platos';

class CartaService {
  getAllPlatos() {
    return axios.get(RESERVA_BASE_API_URL);
  }
  getPlatoByCategoria(categoria) {
    return axios.get(RESERVA_BASE_API_URL,{params: {categoria: categoria}});
  }
    getPlatoById(platoId) {
        return axios.get(RESERVA_BASE_API_URL + '/' + platoId);
    }
}
export default new CartaService();

