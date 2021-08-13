import express from 'express'

exports.home = async (req, res) => {
    res.redirect('/sign-in')
    return
}

exports.signIn = async (req, res) => {
    if (req.session.user) {
        res.redirect('/welcome')
        return
    }

    res.render('sign-in.pug', {})
}

exports.signUp = async (req, res) => {
    if (req.session.user) {
        res.redirect('/welcome')
        return
    }

    res.render('sign-up.pug', {})
}

exports.welcome = async (req, res) => {
    if (!req.session.user) {
        res.redirect('/sign-in')
        return
      }
    
      res.render('welcome.pug', {
        currentUser: req.session.user,
      })
}