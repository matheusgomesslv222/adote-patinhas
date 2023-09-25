import { Router } from "express";
import { createTable , insertUsuario , authUser } from './dataBase/Controller/User.js';

const router = Router();

router.get('/', (req,res) => {
    res.json({
        'statusCode': 200,
        "msg": 'API Rodando'
    });
});
const user = {
    email : 'matheusgomesslv222@gmail.com',
    senha : '5639gabi'
}
router.post('/login', authUser);
router.post('/cadastro-usuario', insertUsuario);

export default router;