async function createTable() {
    let json
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        json = await response.json()
    } catch (ex) {
        let preloaderBox = document.getElementById("preloader-box")
        preloaderBox.replaceChildren()
        let el = document.createElement("div")
        el.textContent = "Failed to load data, try reloading the page"
        el.className = "text__main__Hattori-28"
        preloaderBox.appendChild(el)
        return
    }
    let preloaderBox = document.getElementById("preloader-box")
    preloaderBox.style.display = "none"
    let table = document.getElementById("todos")
    let caption = document.createElement("caption")
    caption.textContent = "Todos"
    table.appendChild(caption)
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
    let ar = ["userId","id", "title", "completed"]
    for (let el of ar) {
        let th = document.createElement("th")
        th.textContent = el
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    let tbody = document.createElement("tbody")
    const generateArray = (length, max) => (
        [...new Array(length)]
            .map(() => Math.round(Math.random() * max))
    );
    let ids = generateArray(100, 200)
    json.forEach(todo => {
        if (ids.includes(todo["id"])) {
            let tr1 = document.createElement("tr")
            for (let el in todo) {
                let td = document.createElement("td")
                td.textContent = todo[el]
                tr1.appendChild(td)
            }
            tbody.appendChild(tr1)
        }
    })
    table.appendChild(tbody)
}