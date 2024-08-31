import axios from "axios";
const RESERVA_BASE_API_URL = 'http://localhost:8080/api/v1/reservas';

class ReservaService {
  getAllReservas() {
    return axios.get(RESERVA_BASE_API_URL);
  }
  getReservaByDate(reservaDate) {
    return axios.get(RESERVA_BASE_API_URL + '/day/' + reservaDate);
  }
  getReservaById(reservaId) {
    return axios.get(RESERVA_BASE_API_URL + '/' + reservaId);
  }
}
export default new ReservaService();

