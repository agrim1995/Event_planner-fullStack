// const jwt = require('jsonwebtoken');
// const dotenv=require('dotenv')
// dotenv.config()
// class JWT {
//   generateAccessToken(userid,roleid) {

//     return jwt.sign({ userid: userid,roleid:roleid }, process.env.TOKEN_SECRET, { expiresIn: '5h' });
//   }


//   generateOnlyToken(userid) {
//     return jwt.sign({ userid: userid}, process.env.TOKEN_SECRET, { expiresIn: '5h' });
//   }



//   authenticateToken(req, callback) {
//     // console.log("HIiiiiiiiiiiii")
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if (token == null) {
//       callback({ status: false, msg: "Token Missing!" });
//     } else {
//       jwt.verify(token, process.env.TOKEN_SECRET, (err, tokendata) => {
//         if (err) {  
//           callback({ status: false, msg: "Invalid Token!" });
//         } else {
//     // console.log("this is token data: ",tokendata)
//           req.userid = tokendata.userid;
//           req.roleid= tokendata.roleid;

//           if(!req.roleid){
//             this.generateAccessToken(tokendata.userid,req.body.roleid)

//           }

//         //   if (!Array.isArray(req.roleid)) {
//         //     req.roleid = [req.roleid];
//         // }
//           // console.log("this is the response is:",{ status: true, code: 200 ,role:req.roleid,user:req.userid})
//           callback({ status: true, code: 200 ,role:req.roleid,user:req.userid});
//         }
//       });
//     }
//   }
// }

// module.exports = new JWT();

const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
// get config vars
dotenv.config();

class JWT {
  generateAccessToken(userid) {
    return jwt.sign({ user: userid }, process.env.TOKEN_SECRET,
      { expiresIn: '80h' });
  }

  authenticateToken(req) {
    return new Promise((resolve, reject) => {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]

      if (token == null)
        resolve({ status: false, message: "Token Not Found !" })
      else {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, tokendata) => {
          if (err)
            resolve({ status: false, message: "Invalid or Expire Token !" })
          else {
            req.user = tokendata.user
            resolve({ status: true })
          }
        })
      }
    })
  }
}

module.exports = new JWT()