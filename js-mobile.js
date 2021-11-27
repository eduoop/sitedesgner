class MobileNavbar {
    constructor(mobileMenu, navList, navLinks ) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks=  document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = '') : (link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + 0.3}s`)
            
        })
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();


var i = 0
var j = 4

const dots = document.querySelectorAll(".dot-container button")
const images = document.querySelectorAll('.img-container img')

function next () {
    console.log('hello')
    document.getElementById("content" + (i+1)).classList.remove("active")
    i = (j + i +1) % j
    document.getElementById("content" + (i+1)).classList.add("active")
    indicator( i + 1 )
}

function prev() {
    document.getElementById("content" + (i+1)).classList.remove("active") 
    i = (j + i - 1) % j
    document.getElementById("content" + (i + 1)).classList.add("active")
    indicator(i + 1)
}

function indicator(num) {
    dots.forEach(function(dot) {
        dot.style.background = "transparent"
    })
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.background = "#8052ec"
}

function dot(index) {
    images.forEach(function(image) {
        image.classList.remove("active")
    })

    document.getElementById("content" + index).classList.add("active")
    i = index - 1
    indicator(index)
}


document.querySelector("#qtde").addEventListener("change", atualizarpreco)
document.querySelector("#animete").addEventListener("change", atualizarpreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo(dias): ${prazo}`
    atualizarpreco()
})

function atualizarpreco() {
    const qtde = document.querySelector("#qtde").value
    const temAni = document.querySelector("#animete").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 50
    if (temAni) preco *= 2
    let taxaUrgencia = 0.5 - prazo*0.1
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
