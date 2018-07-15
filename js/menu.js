export class Menu {
    constructor(){
        
        this.aMenuItems = document.querySelectorAll("nav#menu-top a");
        this.aSections = document.querySelectorAll("section");
        this.oOffsets = [];
        
        this.aMenuItems.forEach(
            (item) => { item.addEventListener('click', this.activarItem.bind(this)) };
        )
        window.addEventListener('scroll', this.changeMenuStyle.bind(this))

        this.prepararNavegacion()
    }
    
    activarItem(oE) {
        console.log('Activando Item')
        this.aMenuItems.forEach(
            (item) => { item.classList.remove('active') }
        )
        oE.target.classList.add('active')
    }

    changeMenuStyle() {
        let pageOffset = window.pageYOffset
        let menuItem = 0;
        if (pageOffset >= this.oOffsets['#home'] && pageOffset < this.oOffsets['#quien-soy']) {
            menuItem = 0;
        } else if (pageOffset >= this.oOffsets['#quien-soy'] && pageOffset < this.oOffsets['#estudios']) {
            menuItem = 1;
        } else if (pageOffset >= this.oOffsets['#estudios'] && pageOffset < this.oOffsets['#experiencia']){
            menuItem = 2;
        } else if (pageOffset >= this.oOffsets['#experiencia'] && pageOffset < this.oOffsets['#sobre-mi']) {
            menuItem = 3;
        } else if (pageOffset >= this.oOffsets['#sobre-mi'] && pageOffset < this.oOffsets['#contact']) {
            menuItem = 4;
        }
        this.aMenuItems.forEach(
            (item) => item.classList.remove('activar')
        )
        this.aMenuItems[menuItem].classList.add('activar');
    }

    prepararNavegacion() {
        this.aSections.forEach(
            (item) => {
                let cumulative = this.cumulativeOffset(item);
                this.oOffsets['#' + item.id] = cumulative;
            }
        )

    }

    cumulativeOffset(element) {
        let top = 0;
        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while (element);
        return top;
    };
}