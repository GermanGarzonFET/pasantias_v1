import RolesSchema from '../models/roles.model';

const gerRoles= async (req,res)=>{

    let data = await RolesSchema.find()
    res.json(data);


}


module.exports = {  
    gerRoles

}