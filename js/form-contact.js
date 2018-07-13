export class FormContact {
    constructor() {
        // elementos del DOM
        this.oTextoMessageInput = document.querySelector('#message');
        this.oRestoTextoMessageInput = document.querySelector('#res');
        this.oSelectSeleccion = document.querySelector('#selection');
        this.oOtroHiden = document.querySelector('#form-otro');

        this.oFormContact = document.querySelector('#myForm');
        this.oInputName = document.querySelector('#name');
        this.oInputEmail = document.querySelector('#email');
        this.oInputPhone = document.querySelector('#telNum');
        this.oOtro = document.querySelector('#otros');
        //this.oTextMessage = document.querySelector('#message')
        //this.oSelectSeleccion = document.querySelector('#selection')
        this.oData = {
            name: '',
            email: '',
            phone: '',
            seleccion: '',
            other:'',
            message: ''
        };
        
        // Manejadores de eventos
        this.oTextoMessageInput.addEventListener('input', this.wordCount.bind(this));
        this.oTextoMessageInput.addEventListener('change', this.wordCount.bind(this));
        this.oSelectSeleccion.addEventListener('change',this.otroSlect.bind(this));

        this.oFormContact.addEventListener('submit', this.leerContact.bind(this));
        this.definirValidaciones();

    }
    leerContact(oE) {
        oE.preventDefault();
        if (this.validar()) {
            this.guardarDatos();
        }
    }
    
    validar() {
        return true;
    }

    definirValidaciones() {
        this.oInputName.setCustomValidity('El nombre es obligatorio');
        this.oTextoMessageInput.setCustomValidity('El texto introducido no puede tener más de 150 palabras.');
        console.dir(this.oInputName.validity);
        console.dir(this.oInputEmail.validity);

    }

    guardarDatos() {
        this.oData = {
            name: this.oInputName.value,
            email: this.oInputEmail.value,
            phone: this.oInputPhone.value,
            seleccion: this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value,
            other: this.oOtro.value,
            message: this.oTextoMessageInput.value            
        };

        console.dir(this.oData);
    }

    wordCount(oE) {
        console.dir(oE.target.value);
        let sCadena = oE.target.value;
        const wordTotal = 5;
        
        //Quitamos los saltos de linea
        sCadena = sCadena.replace(/(\r\n|\n|\r)/gm, ' ');
        //Reemplazamos los espacios seguidos por uno solo
        sCadena = sCadena.replace(/[ ]+/g, ' ');
        //Quitarmos los espacios del principio y del final
        sCadena = sCadena.trim();
        //Troceamos el texto por los espacios
        const aCadena = sCadena.split(' ');
        //Contamos todos los trozos de cadenas que existen
        let wordCounter = aCadena.length;
        this.oRestoTextoMessageInput.innerHTML = `${wordCounter} de un máximo de ${wordTotal} palabras`;
                
        if (wordCounter >= wordTotal ) {
            //this.oTextoMessageInput.setAttribute('disabled', true);
            alert('Alcanzó el numero máximo de Palabras');
            
        } 
        
    }
    otroSlect() {
        let valorOpcion;
        console.log(this.oOtroHiden);
        console.log(this.oSelectSeleccion);
        console.log('this.oSelectSeleccion.value', this.oSelectSeleccion.value)
        
        if (this.oSelectSeleccion.value === '') {
             valorOpcion = 'op1';
        } else {
            valorOpcion = this.oSelectSeleccion.value;
        }
        console.log('this.oOtroHiden.classList', this.oOtroHiden.classList)
        
        //this.oOtroHiden.classList.toggle('hide');
        console.log('this.oOtroHiden.classList segundo ', this.oOtroHiden.classList)
        
        if (this.oSelectSeleccion.value === 'op4') {
            
            this.oOtroHiden.classList.remove('hide');
        } else {
            this.oOtroHiden.classList.add('hide');
        }
        
        
    }
    
}