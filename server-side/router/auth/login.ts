import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../../models/userSchema'
const tokenExpireTime = '30 days';

const login =  async (req, res) => {

    const userLoginData = req.body.formData
    await userSchema.findOne({username:userLoginData.username})
        .then(user => {
            if (user) {
                bcrypt.compare(userLoginData.password, user.password, function (err, isCorrect) {
                    if (err || isCorrect === false) {
                        res.status(401).json({message: 'You have entered an invalid username or password'})
                    } else if (isCorrect) {
                        const token = jwt.sign({
                                username: user.username,
                                profileImage:user.profileImage,
                                email:user.email,
                                _id: user._id,
                            },
                            process.env.JWT_KEY,
                            {expiresIn: tokenExpireTime});
                        res.json({
                            token: token,
                            username: user.username,
                            role: user.role,
                            keyMaster: user.keyMaster,
                            profileImage: user.profileImage,
                            coverImage: user.coverImage,
                            _id:user._id,
                            message: 'Login successful',
                        });

                    }

                })
            } else if (!user) {
                res.status(404).json({message: 'You have entered an invalid username or password'})
            }
        }).catch(error => {
            res.status(503).json({message: 'Something went wrong please try again later'})
            res.json({response: 'server Error !', type: 'error'})
        });
};

export default login