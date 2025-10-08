import { hoursLoad } from "../form/hours-load.js"
//Seleciona o input de data.
const selectedDate = document.getElementById("date")
export function scheduleDays() {
  // Obtém a data do input
  const data = selectedDate.value
  // Renderiza as horas disponiveis
  hoursLoad({ date })
}
