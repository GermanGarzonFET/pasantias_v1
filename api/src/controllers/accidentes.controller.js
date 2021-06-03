import AcidentesSchema from '../models/acidentesData.model';

const getAll= async(req,res)=>{
    const Data = await AcidentesSchema.find();
    res.status(200).json(Data);
}

const getOne = async(req,res)=>{
    let id= req.params.id;
    const data = await AcidentesSchema.findById(id,(err,data)=>{
        if(err){
            res.status(400).json({ message: "datos no encontrados" });
            return;
        }
        if(!data){
            res.status(400).json({ message: "datos no existentes" });    
        }else{
            return data
        }


    });

    res.status(200).json(data)
}

const addAccidente = async(req, res) => {
    const { 
        nombres,
        apellidos,
        cc,
        arl,
        eps,
        fecha_accidente,
        tipo_contrato,
        cargo_del_accidentado,
        estado_arl,
        tipo_de_lesion,
        evaluacion_medica,
        calificaciones,
        sst

    } = req.body;
/*     const {file}= req.files
    file.mv(`../files/${file.name}`,err => {
        if(err) return res.status(500).send({ message : err })
    }) */
    const newData=  new AcidentesSchema({
        nombres,
        apellidos,
        cc,
        arl,
        eps,
        fecha_accidente,
        tipo_contrato,
        cargo_del_accidentado,
        estado_arl,
        tipo_de_lesion,
        evaluacion_medica,
        calificaciones,
        sst
    })


    const saveAccidenteData =await newData.save();
    res.status(200).json(saveAccidenteData);
}

const editAccidente = async(req,res)=>{

    let id = req.params.id;
    try {
        const upData= await AcidentesSchema.findByIdAndUpdate(id,req.body, {
            new: true
        });
        res.status(200).json(upData);

    } catch (error) {
        res.status(400).json({message:"error al editar"});
        return

    }
}

const deleteAccidente = async(req,res)=>{
    let id = req.params.id;
    try {
        await AcidentesSchema.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)
        res.status(200).json({ message: "error al eliminar" });
    }
    res.status(200).json({ message: "ok" });

}
 

const addFiles = async(req,res)=>{
    let imageFile = req.files.file;
    let id_accidente = req.params.id
    const name=imageFile.name
    let lastIndex = name.lastIndexOf(".");
    let extencion = name.substring(lastIndex)
    let newName = `file-${Date.now()}${extencion}`;
    const baseURL = `http://localhost:5000`;
    let path = __dirname+"public/uploads/"+newName;
    let imagePath = path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);
    let link = imagePath.substring(11)
    const dataAccidente = await AcidentesSchema.findById(id_accidente)
    const anexos = dataAccidente.anexos
    anexos.push(link)
    const unUpData={
        anexos:anexos
    }
    await AcidentesSchema.findByIdAndUpdate(id_accidente, unUpData, {
        new: true
    });
    imageFile.mv(`${__dirname}/public/uploads/${newName}`, err => {
     if (err) {
         console.log(err)
      return res.status(500).send(err);
     }
    });
    return res.json({
        link
    });
}

module.exports={
    getAll,
    getOne,
    addAccidente,
    editAccidente,
    deleteAccidente,
    addFiles
}