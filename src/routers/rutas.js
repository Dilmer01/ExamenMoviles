const {Router} =require('express');
 const {getPost, buscarPost, createPost, deletePost, updatepost} = require('../controller/postcontroller');

const router = Router();

router.get('/',(req,res)=>{
    
    res.send('Bienvenido');
});

//Post

router.get('/post', getPost);
router.get('/buscar/:id', buscarPost);
router.post('/create' , createPost);
router.delete('/delete/:idpost',  deletePost);
router.put('/update/:id',  updatepost);

module.exports = router;