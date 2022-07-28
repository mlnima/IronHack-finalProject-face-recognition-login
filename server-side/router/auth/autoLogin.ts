import userSchema from '../../models/userSchema'

const autoLogin =  async (req, res) => {
    userSchema.findById(req.userData._id).select('username email profileImage role').exec().then(user => {
        res.json({ user });
    })
};

export default autoLogin