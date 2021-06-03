import { Schema, model } from 'mongoose';

const AccidentesDataSchema = new Schema({
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
    arl:{
        type:String,
        default:null
        },
    eps: {
        type:String,
        default:null
        },
    fecha_accidente: Date,
    tipo_contrato:{
        type:String,
        default:null
        },
    cargo_del_accidentado: {
        type:String,
        default:null
        },
    estado_arl: {
        type:String,
        default:null
        },
    tipo_de_lesion: {
        type:String,
        default:null
        },
    evaluacion_medica: {
        type:String,
        default:null
        },
    calificaciones: {
        type:String,
        default:null
        },
    sst:{
        type:String,
        default:null
        },
    anexos:[{
        type:String
    }]
}, {
    timestamps: true
});

export default model("AccidentesData", AccidentesDataSchema);