import sharp from 'sharp'
import fsExtra from 'fs-extra'
import UserSchema from '../../models/userSchema'

const userUploadImage = async (req, res) => {
    const file = req.files.profileImage
    const userId = req.userData._id
    fsExtra.remove('./static/uploads/users/' + userId + '/' + req.body.type + '.png')
    const directoryPath = './static/uploads/users/' + userId + '/'
    const filePath = directoryPath + file.name + '.png'
    const filePathOriginalSize = directoryPath + 'originalSize_' + file.name;
    fsExtra.ensureDir(directoryPath).then(() => {

        file.mv(filePath, function (err) {
            if (err) {
                console.log(err)
                res.json({response: 'something is wrong', type: 'error', error: err})
            } else {

                const imageUrl =  filePath.replace('.', '')

                UserSchema.findByIdAndUpdate(req.userData._id, {profileImage: imageUrl}).exec().then(() => {
                    fsExtra.remove(filePathOriginalSize)
                    res.json({response: 'Uploaded', path: imageUrl})
                }).catch(() => {
                    res.status(500);
                })
            }
        });

    }).catch(err => {
        console.log(err)
        res.end()
    })

}

export default userUploadImage



// sharp(filePathOriginalSize).resize(imageWidth, imageHeight).toFile(filePath, (err, info) => {
//     console.log(filePath)
//     if (err) {
//         console.log(err)
//         res.status(500);
//     } else {
//         const imageUrl =  filePath.replace('.', '')
//
//         UserSchema.findByIdAndUpdate(req.userData._id, {profileImage: imageUrl}).exec().then(() => {
//             fsExtra.remove(filePathOriginalSize)
//             res.json({response: 'Uploaded', path: imageUrl})
//         }).catch(() => {
//             res.status(500);
//         })
//
//     }
// })