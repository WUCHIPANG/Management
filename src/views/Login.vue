<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1><strong>管理中心登入</strong></h1>
                  <!-- <p class="text-muted">Sign In to your account</p> -->
                  <!-- <CSelect :options="['護理站', '接單人員', '派遣公司']" placeholder="Please select" /> -->
                  <CInput placeholder="帳號" autocomplete="username" v-model="username">
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput placeholder="密碼" type="password" autocomplete="curent-password" v-model="password">
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" id="bind" size="lg" class="px-4" @click="registeFCM(username, password)">登入</CButton>
                    </CCol>
                    <button @click="unbind">Unbind</button>

                    <!-- <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <CButton color="link" class="d-lg-none">Register now!</CButton>
                    </CCol> -->
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import 'firebase/messaging';
import Global from '@/Global';
const CryptoJS = require('crypto-js');
import secret from '../utils/secret';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      token: '',
    };
  },
  mounted() {
    this.initFCM();
  },

  methods: {
    initFCM() {
      console.log('initFCM');
      this.$messaging.onTokenRefresh(() => {
        this.$messaging.getToken().then((refreshedToken) => {
          console.log('Token refreshed.');
          this.setTokenSentToServer(false);
          this.sendTokenToServer(refreshedToken);
        });
      });
    },
    registeFCM(username, password) {
      console.log('data', username, password);
      let data = {
        user: username,
        password: secret.Encrypt(password),
      };
      console.log('dataArr', data);

      this.$messaging
        .requestPermission()
        .then(() => {
          console.log('Notification permission granted.');
          this.getToken(data);
        })
        .catch((err) => {
          console.log('Unable to get permission to notify.', err);
        });
    },
    getToken(data) {
      this.$messaging
        .getToken(data)
        .then((currentToken) => {
          // console.log('getToken', data);
          // console.log('currentToken1', currentToken);
          if (currentToken) {
            // console.log('currentToken2', currentToken);
            this.sendTokenToServer(currentToken, data);
            console.log('send');
          } else {
            console.log('No Instance ID token available. Request permission to generate one.');
            console.log('false');
            // Show permission UI.
            this.setTokenSentToServer(false);
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          this.setTokenSentToServer(false);
        });
    },
    sendTokenToServer(token, data) {
      sessionStorage.setItem('token', token);
      console.log('Sending token to server...');
      // TODO: Send Token To Your Server
      console.log('token', token, data);
      $.post(
        'https://porter-alpha.dynacloud.co/ajax.php',
        {
          username: this.username,
          device_id: token,
          action: 'bind',
        },
        function(result) {
          if (result.status == true) {
            window.location.reload();
          } else {
            alert(result.message);
          }
        },
        'json'
      );
      this.$store.dispatch('userLogin', data);
      // setTokenSentToServer(true);
    },
    setTokenSentToServer(type) {
      if (type) return;
      // TODO: Delete Register Token From Your Server
    },

    // login() {
    //   setTimeout(() => {
    //     let data = {
    //       user: this.username,
    //       password: secret.Encrypt(this.password),
    //     };
    //     this.$store.dispatch('userLogin', data);
    //   }, 3000);
    // },

    unbind() {
      console.log('456');
      this.$messaging
        .getToken()
        .then((currentToken) => {
          console.log('currentToken1', currentToken);
          $.post(
            'https://porter-alpha.dynacloud.co/ajax.php',
            {
              device_id: currentToken,
              action: 'unbind',
            },
            function(result) {
              console.log(result);
              if (result.status == true) {
                alert(result.message);
                sessionStorage.removeItem('token');
                window.location.reload();
              } else {
                alert(result.message);
              }
            },
            'json'
          );
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // this.setTokenSentToServer(false);
        });
    },
  },
};
</script>
<style>
input::placeholder {
  font-size: 20px;
}
</style>
