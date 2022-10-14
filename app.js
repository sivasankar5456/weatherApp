 const express=require('express')
const app=express()
const hbs=require('hbs')

app.set('view engine','hbs')

app.use(express.static('public'))

hbs.registerPartials('./views/components')

app.get('/',(req,res)=>{



    res.render('home')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.use((req,res)=>{
    res.render('404')
})


app.listen(3000,()=>{
    console.log('listening at localhost  --port 3000');
})


/* got chrome type json fromatter chrome extension 

click one first link and click on extension side nav will open
 type json formatter  and add that formatter  to ur chrome extension



*/






