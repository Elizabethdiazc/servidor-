
import { ServicioReserva } from '../services/ServiciosReserva.js'
import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

export class ControladorReserva{

    constructor(){}

    async buscarReservas(request,response){

        let objetoServicioReserva=new ServicioReserva()

        try{

            response.status(200).json({
                "mensaje":"exito en la reserva",
                "datos":await objetoServicioReserva.buscarReservas(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la reserva  "+error,
                "datos":null,
            })

        }

        
        
    }

    async buscarReservaPorid(request,response){
        let id=request.params.idHabitacion //recibo id de la peticion
        let objetoServicioReserva=new ServicioReserva()
        try{

            response.status(200).json({
                "mensaje":"exito en la reserva por id "+id,
                "datos":await objetoServicioReserva.buscarReservaPorid(id),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async agregarReservaEnBD(request,response){

        let datosReserva=request.body
        let objetoServicioHabitacion=new ServicioHabitacion()
        let objetoServicioReserva=new ServicioReserva()

        try{

            let habitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosReserva.idHabitacion)
        

            if(datosReserva.numeroAdultos+datosReserva.numeroNinos<=habitacion.numeroMaximoPersonas){

                await objetoServicioReserva.agregarReservaEnBD(datosReserva)

            response.status(200).json({
                "mensaje":"exito registrando la reserva",
                "datos":null
            })
            }else{
                response.status(400).json({
                "mensaje":"No tenemos capacidad para el numero de personas ingresadas'",
                "datos":null
                })
            }
            
            
        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async editarReserva(request,response){

        let id = request.params.idHabitacion
        let datosReserva = request.body

        let objetoServicioReserva=new ServicioReserva()
       

        try{

            await objetoServicioReserva.editarReserva(id,datosReserva)

            response.status(200).json({
                "mensaje":"exito editando la reserva"+id,
                "datos":null,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
            })

        }
    }


}