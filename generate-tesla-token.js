const Tesla = require('teslajs')
    , spin = require('ora')
    , inquirer = require('inquirer')

    , unindent = require('unindent')

function inquire(){
   console.error(unindent(`
      Hi! I'm going to generate a Tesla-login ‘token’ for you, which will allow
      services to authenticate to Tesla on your behalf without giving them your
      login information / password.

       (note: These will only be sent directly to Tesla, and not be saved anywhere!)
      `))

   return inquirer.prompt([
      {  name: 'email',
         message: 'The e-mail address you use to login on Tesla.com:' },
      {  name: 'password', type: 'password',
         message: 'The password associated with that e-mail address:' }
   ])
}

async function generate(credentials){
   const login = await Tesla.loginAsync(credentials.email, credentials.password)

   // teslaJS uses a really strange output format.
       , response = login.response
       , token    = login.authToken
       , body     = login.body

   switch (response.statusCode) {
      case 200:
         return login.authToken
      case 401:
         throw new Error('Login incorrect. Please double-check the e-mail and password.')
      default:
         throw new Error(`Unknown API response: ${response.statusCode} ${response.statusMessage}`)
   }
}

// TODO: Save to `configstore`, optionally
async function save(){

}

module.exports = generate
module.exports.save      = save
module.exports.inquire   = inquire
module.exports.generate  = generate
