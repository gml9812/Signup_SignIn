export const home = async (req, res) => {
    res.redirect('/api/page/signIn')
    return
}

export const signIn = async (req, res) => {
    if (req.session.user) {
        res.redirect('/api/page/welcome')
        return
    }

    res.render('sign-in.pug', {})
}

export const signUp = async (req, res) => {
    if (req.session.user) {
        res.redirect('/api/page/welcome')
        return
    }

    res.render('sign-up.pug', {})
}

export const welcome = async (req, res) => {
    if (!req.session.user) {
        res.redirect('/api/page/signIn')
        return
      }
    
      res.render('welcome.pug', {
        currentUser: req.session.user,
      })
}
