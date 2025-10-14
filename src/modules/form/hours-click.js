export function hoursClick() {
  const hours = document.querySelector(".hour-available")

  hours.forEach((available) => {
    available.addEventListner("click", (selected) => {
      //Remove a calsse hour-selected de todas as li selecionadas
      hours.forEach((hour) => {
        hour.classlist.remove("hour-selected")
      })
      //adiciona a classe na li clicada
      selected.target.classList.add("hour-selected")
    })
  })
}
