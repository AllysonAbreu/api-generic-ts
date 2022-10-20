import express,{Request,Response} from 'express'

const app = express()

app.listen(3000, () => {
    console.log('Servidor ativo na porta 3000.')
})

app.use(express.json())

app.get('/home', (req,res) => {
    return res.status(200)
            .send('Server rodando na porta 3000.')
})





