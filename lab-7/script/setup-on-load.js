function setupOnLoad() {
    window.addEventListener('DOMContentLoaded', (event) => {
        // time = (event.timeStamp / 1000).toPrecision(3)
        // printLoadTime(time)
        myLocation()
    })
}

// load time
function printLoadTime(time) {
    let element = document.createElement('time-on-load')
    document.body.appendChild(element)

    let txt2 = "Page load time in JavaScript"
    let txt1 = `Page load time is ${time} seconds`


    let lbl1 = document.createTextNode(txt1)
    let div1 = document.createElement('div')
    div1.appendChild(lbl1)

    lbl2 = document.createTextNode(txt2)
    div2 = document.createElement('div')
    div2.setAttribute("style", "font-style:italic;color: blue;font-size: 18px;");
    div2.appendChild(lbl2)

    element.appendChild(div2)
    element.appendChild(div1)
}

function openMenu(x) {
    x.classList.toggle("change")
    let element = document.getElementsByName('header__menu-icon')
}

function myLocation() {
    let curLocation = document.location.pathname
    let menu = document.getElementById('menu')
    let children = menu.children
    let arr = curLocation.split('/')
    let pageName = arr.pop()
    if (pageName === 'index.html') {
        children[0].setAttribute("style", "font-weight: bolder;")
    }
    else if (pageName === 'personal-info.html') {
        children[1].setAttribute("style", "font-weight: bolder;")
    }
    else if (pageName === 'live-preview.html') {
        children[2].setAttribute("style", "font-weight: bolder;")
    }
    else if (pageName === 'fetch.html') {
        children[3].setAttribute("style", "font-weight: bolder;")
    }
}
