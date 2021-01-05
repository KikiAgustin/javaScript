const judulHeading = (title) => {
    const projectTitle = document.querySelector("#project-title");

    if (typeof title === "string") {
        projectTitle.textContent = title;
    } else {
        alert("Yang anda masukan bukan String");
    }
}

judulHeading("Kembali benar");




