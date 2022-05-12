1. `app.use(bodyParser.json());` - shob *request* ei `bodyParser.json()` er moddho diye jabe

2. path define kore dile, kebol oi *path* a j shob url hit korbe, shei *request* gula oi middleware er moddho diye jabe. xmpl:-

    `app.use('/api/student', studentRouter);`

    *'/api/student'* path a j req gula ashbe, tara `studentRouter` middleware er moddho diye jabe

3.