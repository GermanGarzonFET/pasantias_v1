import { Schema, model } from 'mongoose';

const EnfermedadesDataSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    cc: {
        type: String,
        required: true
    },
    cargo:{
        type:String,
        default:null
        },
    fecha_ingreso_a_la_empresa: Date,
    eps:{
        type:String,
        default:null
        },
    fondo_pension:{
        type:String,
        default:null
        },
    arl:{
        type:String,
        default:null
        },
    diagnostico:{
        type:String,
        default:null
        },
    evaluacion_medica:{
        type:String,
        default:null
        },
    medico_general:{
        type:String,
        default:null
        },
    medico_especialista:{
        type:String,
        default:null
        },
    apoyo_diagnostico:{
        type:String,
        default:null
        },
    medico_laboral:{
        type:String,
        default:null
        },
    fecha_entrega_arl:Date,
    estado_arl:{
        type:String,
        default:null
        },
    calificacion:{
        type:String,
        default:null
        },
    area_sst:{
        type:String,
        default:null
        },
        anexos:[{
            type:String
        }]
    
}, {
    timestamps: true
});

export default model("EnfermedadesData", EnfermedadesDataSchema);