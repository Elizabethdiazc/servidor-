import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const EsquemaReserva = new Schema({

    idHabitacion:{
        required:true,
        type:String
    },
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },
    numeroAdultos:{
        required:true,
        type:Number
    },
    numeroNinos:{
        required:true,
        type:Number
    },
    costoReserva:{
        required:true,
        type:Number
    }
    
});

export const modeloReserva=mongoose.model('reservas',EsquemaReserva)

//idHabitacion:String
//fechaEntrada:Date
//fechaSalida:Date
//numeroadultos:Number
//numeroninos:Number
//costoreserva:Number