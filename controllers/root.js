const home =  (req, res) => {
    res.render('index');
}
const permainan = (req, res) => {
    res.render('suit');
}
const masuk = (req, res) => {
   if (req.body.email == 'binar@academy.co.id' && req.body.password == 'keren') {
         res.render('index');
         console.log('berhasil');
    } else {
        res.render('login');
        console.log('gagal');
    }

    return res.json({ email: email, password: password });
    res.render('login');
}
module.exports = {
    home,
    permainan,
    masuk,
}

