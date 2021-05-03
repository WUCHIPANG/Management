import Global from '@/Global'
import axios from 'axios'
import * as types from '../mutations_type'
import router from '@/router'
// npm i --save crypto-js
const CryptoJS = require('crypto-js')
import secret from '../../../utils/secret'
const state = {
  token: '',
  usp: '',
  password: '',
  passwordErr:false //密碼驗證錯誤訊息
}

const actions = {
  userLogin({commit}, data) {
    const usn1 = '62'
    const usn2 = '42'
    const usn3 = '02'
    const usn4 = '38'
    let usp = usn1 + usn2 + usn3 + usn4
    let user = usp
      .split('')
      .reverse()
      .join('')

    if (data.user == 'demo' && secret.Decrypt(data.password) == user) {
      commit(types.SETTOKEN, data)
      window.sessionStorage.setItem('user', data.user)
      router.push('/distribution')
    } else {
      console.log('err')
    }
  },
  userLogout({commit}) {
    commit(types.DELTOKEN)
  },
  checkPW({ commit }, pw) {
    const usn1 = '62'
    const usn2 = '42'
    const usn3 = '02'
    const usn4 = '38'
    let usp = usn1 + usn2 + usn3 + usn4
    let user = usp
      .split('')
      .reverse()
      .join('')
    if (secret.Decrypt(pw) == user) {
      commit(types.CHECKPW, pw)
      commit(types.HIDE_PASSWORDERR)

     console.log('check')
    } else {
      console.log('err')
       commit(types.PASSWORDERR)
    }
   }
}

const mutations = {
  [types.SETTOKEN](state, token) {
    state.token = token


  },
  [types.DELTOKEN](state) {
    console.log('1')
    state.token = ''
    sessionStorage.removeItem('user')
    window.location.assign('/Login')
  },
  [types.CHECKPW](state, password) {
    state.password = password
  },
  [types.PASSWORDERR](state) {
    state.passwordErr = true
  },
  [types.HIDE_PASSWORDERR](state) {
    state.passwordErr = false
  },
}

const getters = {
  get_passwordErr: state => state.passwordErr
}

export default {
  state,
  actions,
  mutations,
  getters,
}
