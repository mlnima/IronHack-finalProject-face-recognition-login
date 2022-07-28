import * as bcrypt from 'bcryptjs';
import UserSchema from '../../models/userSchema'

const register = async (req, res) => {

    try{
        const userToRegisterData = await req.body.formData;

        const isUserExist = !!await UserSchema.findOne(
            {$or: [{username:userToRegisterData.username}, {email:userToRegisterData.email}]}
        ).exec();

        if (isUserExist){
            res.status(409).json({message: 'This username already exists'})
        }else if(userToRegisterData.password !== userToRegisterData.password2){
            res.status(400).json({message: 'Passwords are not matched'})
        }else {
            const hashedPassword = await bcrypt.hash(userToRegisterData.password, 10);
            if (!hashedPassword) {
                res.status(503).json({
                    message: 'Something went wrong please try again later',
                    hashedPassword: hashedPassword
                })
            } else {
                let userData = {
                    username: userToRegisterData.username,
                    email: userToRegisterData.email,
                    role: 'subscriber',
                    password: hashedPassword,
                    keyMaster: false
                };
                let newUserData = new UserSchema(userData);
                newUserData.save().then(() => {
                    res.json({message: 'Your account has been successfully created you can login now'})
                }).catch(error => {
                    res.status(503).json({message: 'Something went wrong please try again later', error})
                });
            }
        }
    }catch (error){
        console.log(error)
        res.status(503).json({message: 'Something went wrong please try again later', error:JSON.stringify(error)})
    }

}

export default register