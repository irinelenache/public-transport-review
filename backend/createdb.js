//db creating script
var db = require('./models/index');

db.sequelize.sync({force:true}).then(async () => {
    console.log('tables created')

    let user = await db.Users.create({
        //idUser: DEFAULT,
        name: 'Irinel Enache',
        email: 'irrynel@gmail.com',
        password: 'parolamea'
    })

    let review = await db.Reviews.create({
        //idReview: DEFAULT,
        idUser: user.idUser,
        leavingPoint: 'Piata Romana',
        arrivingPoint: 'Gara de Nord',
        transport: '86 Troleibuz', //something like 133 autobuz, 41 tramvai
        leavingHour: '12:30',
        length: 25,
        levelOfCrowd: 3,
        notes: 'Not great not terrible',
        satisfaction: 7
    })
    
}).catch((e) => {
    console.log(e)
    console.log('could not create tables')
})