function preview(event) {
    event.preventDefault()
    let previewForm = document.personalInfoForm
    for (let previewFormElement of previewForm.elements) {
        if (previewFormElement.name !== "previewButton" && (previewFormElement.value == null || previewFormElement.value === "")) {
            alert(`field ${previewFormElement.name} must not be empty`)
            return
        }
    }
    let preview = document.getElementById("live-preview__preview")
    preview.replaceChildren()
    for (let previewFormElement of previewForm.elements) {
        let element = document.createElement("div")
        element.textContent = previewFormElement.value
        element.className = "text__main__Hattori-28"
        preview.appendChild(element)
        if (previewFormElement.name !== "previewButton") {
            localStorage.setItem(previewFormElement.name, previewFormElement.value)
        }
    }
}
let sendButton = document.personalInfoForm.previewButton;
sendButton.addEventListener("click", preview)