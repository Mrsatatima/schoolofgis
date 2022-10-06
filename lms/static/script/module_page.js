const expand = document.querySelectorAll(".expand")
console.log(expand)


function openPdf(event){
    const arrow = event.target

    const pdf = arrow.parentElement.nextElementSibling
    const parent = arrow.parentElement
    arrow.classList.toggle("active")
    pdf.classList.toggle("active")
    parent.classList.toggle("active")

}

for (let index = 0; index < expand.length; index++) {
    expand[index].addEventListener("click", openPdf)

}