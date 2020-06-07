

const usuarioControl ={};

usuarioControl.getUsuarios = async (req, res)=> {

 
 res.json("get");


}

usuarioControl.Transform =async (req, res)=> {
  
  const transform = req.body;
 console.log(transform);


  res.json(transform);
}

module.exports=usuarioControl;