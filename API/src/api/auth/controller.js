import { sign } from '../../services/jwt'
import { success } from '../../services/response/'
import { userInfo } from 'os';

export const login = ({ user }, res, next) =>
  sign(user.id)
    .then((token) => ({ token, user: user.view(true) }))
    .then(success(res, 201))
    .catch(next)

//export const login2 = ({ user }, res, next) => {
//  console.log(user.role);
//  if (user.role == 'admin') {
//    sign(user.id)
//      .then((token) => ({ token, user: user.view(true) }))
//      .then(success(res, 201))
//      .catch(next)
//  } else {
//    console.error('ha llegado hasta aqui pero no ha cogido el role')
//  }
//}