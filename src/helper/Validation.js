export const Validation = (data,type) =>{
    const errors ={}
    // for admin Login page
    if (type === "AdminLogin")
{
    if (!data.username.trim()){
            errors.username= "برای ورود یوزر نیم لازمه!!!"
            } else
        if(data.username!=="aliniroomand"){
            errors.username="یوزر نیم اشتباهه"
            } else{
                delete errors.username
            }
    if (!data.password.trim()){
                errors.password="رمز رو که حتما باید وارد کنی"
                }else
        if(data.password!== "aliniroomand" ){
                    errors.password="پسورد رو اشتباه وارد کردی!!"
                } else{
                    delete errors.password
                }
            }
    // for customer Login page
    if(type === "customerLogin"){
        if(!data.codeMelli.trim()){
            errors.codeMelli="برای دیدن جواب ،کد ملی ضروری هست"
        }else
        if(!(/^\d{10}$/).test(data.codeMelli.trim())){
            errors.codeMelli="کد ملی حتما باید ده رقمی باشه"
        }else{
            delete errors.codeMelli
        }

        if(!data.shomareGhabz.trim()){
            errors.shomareGhabz="برای دیدن جواب شماره قبض ضروری هست"
        }else{
            delete errors.shomareGhabz
        }
    }
    
return errors;
}
 