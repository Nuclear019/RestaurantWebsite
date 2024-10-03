import axios from "axios";
const RESERVA_BASE_API_URL = 'http://localhost:8080/api/v1/platos';

class PlatosService {
  getAllPlatos() {
    return axios.get(RESERVA_BASE_API_URL);
  }
  getPlatoByCategoria(idPlatoCategoria) {
    return axios.get(RESERVA_BASE_API_URL,{params: {idPlatoCategoria: idPlatoCategoria}});
  }
    getPlatoById(platoId) {
        return axios.get(RESERVA_BASE_API_URL + '/' + platoId);
    }
}
export default new PlatosService();

