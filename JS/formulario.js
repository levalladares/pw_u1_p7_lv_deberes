const app = Vue.createApp({
    templates:{
    },
    methods: {
        agregarPersona(){
            console.log(this.nombre)
            const nuevaPersona = {
                nombre: this.nombre,
                apellido: this.apellido,
                hobby: this.hobby,
                lugNacimiento: this.lugNacimientooo
            }

            this.listaPersonas.unshift(nuevaPersona)

            this.nombre = ''
            this.apellido = ''
            this.hobby = ''
            this.lugNacimientooo = ''
        }
    
    },
    data() {
        return {
            listaPersonas: [],
            nombre: '',
            apellido: '',
            hobby: '',
            lugNacimiento: ''
        }
    }
})
app.mount('#myApp')