import { Router } from "express";
import { createTable , insertUsuario } from './dataBase/Controller/User.js';

const router = Router();
router.get('/', (req,res)=>{
    res.json({
        'statusCode': 200,
        "msg": 'API Rodando'
    })
})

router.post('/cadastro-usuario', insertUsuario);

export default router;