import userSchema from '../../models/userSchema';
import {PythonShell} from 'python-shell'
import path from "path";
import * as jwt from 'jsonwebtoken';
const tokenExpireTime = '30 days';

const loginByFace = async (req, res) => {
    try {
        await userSchema.findOne({username: req.body.username}).select('username email profileImage role').exec().then(async user => {
            if (!user.profileImage) {
                res.status(401).json({message: 'cant find any profile image to match'})
            } else {
                const unknownImagePath = path.join(__dirname, '../../pyScripts/temp/unknown.jpg')
                const file = req.files.unknown
                file.mv(unknownImagePath, (error) => {
                    if (error) throw error

                    const scriptPath = path.join(__dirname, '../../pyScripts/faceMatcher.py')
                    let pyShell = new PythonShell(scriptPath);
                    pyShell.send('start ma boy');
                    pyShell.on('message', function (message) {
                        if (message === 'True'){
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
                        }else{
                            res.status(401).json({message: 'can not verify your image'})
                        }
                        // return message === 'True'
                    });
                    pyShell.end(function (err, code, signal) {
                        if (err) throw err;
                    });


                })
            }
        })
    } catch (error) {

    }

};

const faceMatcherRunner = async () => {
    try {
        const scriptPath = path.join(__dirname, '../../pyScripts/faceMatcher.py')
        let pyShell = new PythonShell(scriptPath);
        await pyShell.send('start ma boy');
        await pyShell.on('message', function (message) {
            return message === 'True'
        });
        pyShell.end(function (err, code, signal) {
            if (err) throw err;
        });
    } catch (error) {
        console.log(error)
    }

}

export default loginByFace