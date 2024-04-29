export const register =  (req,res) =>{

  console.log(req.body);
  res.json({ok: "you are registered"});
};

export const login = (req,res) =>{
  res.json({ok: "login"});
};

