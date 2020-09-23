module.exports = {
    authenticator: (req, res, next) => {
      if (req.isAuthenticated()) {
        return next()
      }
      req.flash('warning_msg', '登入成功!')
      res.redirect('/users/login')
    }
  } 