let date = new Date();

let currentHour = date.getHours();
let currentDay = date.getDay();

const logger = (req,res,next)=>{
    if (currentHour >8 && currentHour<17 && currentDay >0 && 
        currentDay < 6) {
            next();
        }else{
            res.send("<img src='https://www.thesignmaker.co.nz/wp-content/uploads/2020/12/FA88_Closed.png' alt='closed' />")
        }
}

module.exports = logger