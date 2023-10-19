export const Validation = (data,type) =>{
    const errors ={}
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
return errors;
}
 