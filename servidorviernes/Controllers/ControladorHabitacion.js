import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
import { ServicioReserva } from '../services/ServiciosReserva.js'

export class ControladorHabitacion{

    constructor(){}

    async buscarHabitaciones(request,response){

        let objetoServicioHabitacion=new ServicioHabitacion()

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioHabitacion.buscarHabitaciones(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }

        
        
    }

    async buscarHabitacionPorId(request,response){
        let id=request.params.idHabitacion //recibo id de la peticion
        let objetoServicioHabitacion=new ServicioHabitacion()
        
        try{

            response.status(200).json({
                "mensaje":"exito en la consulta "+id,
                "datos":await objetoServicioHabitacion.editarHabitacion(id),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async registrarHabitacion(request,response){

        let datosHabitacion=request.body
        let objetoServicioHabitacion=new ServicioHabitacion()
        let objetoServicioReserva=new ServicioReserva()
        
        try{
            await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)
            response.status(200).json({
                "mensaje":"exito registrando habitacion",
                "datos":null
            })
        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async editarHabitacion(request,response){

        let id = request.params.idHabitacion
        let datosHabitacion = request.body

        let objetoServicioHabitacion=new ServicioHabitacion()
       

        try{

            await objetoServicioHabitacion.editarHabitacion(id,datosHabitacion)

            response.status(200).json({
                "mensaje":"exito editando"+id,
                "datos":null,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }


}