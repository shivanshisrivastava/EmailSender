const email = async(req, res, next) =>
{
try {
    const {To, Subject, Body} = req.body;
    const Time = Date();
    res.json({message : Time});
} catch (error) {
    res.json({message : 'Error'});
}
}

exports.email = email;