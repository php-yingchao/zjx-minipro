const aes = require('./aes.js');
// console.log(aes)
/**
 * 接口数据加密函数
 * @param str string 需加密的json字符串
 * @param key string 加密key(16位)
 * @param iv string 加密向量(16位)
 * @return string 加密密文字符串
 */
function encrypt(str) {
  //密钥16位
  var encrypt_key = '1519699179001WZH';
  var iv = 'ZZWBKJ_ZHIHUAWEI';
  var key = aes.CryptoJS.enc.Utf8.parse(encrypt_key);
  //加密向量16位
  var iv = aes.CryptoJS.enc.Utf8.parse(iv);
  var encrypted = aes.CryptoJS.AES.encrypt(str, key, {
    iv: iv,
    mode: aes.CryptoJS.mode.CBC,
    padding: aes.CryptoJS.pad.ZeroPadding
  });
  return encrypted.toString();
}
/**
 * 接口数据解密函数
 * @param str string 已加密密文
 * @param key string 加密key(16位)
 * @param iv string 加密向量(16位)
 * @returns {*|string} 解密之后的json字符串
 */
function decrypt(str) {
  var encrypt_key = '1519699179001WZH';
  var iv = 'ZZWBKJ_ZHIHUAWEI';
  //密钥16位
  var key = aes.CryptoJS.enc.Utf8.parse(encrypt_key);
  //加密向量16位
  var iv = aes.CryptoJS.enc.Utf8.parse(iv);
  var decrypted = aes.CryptoJS.AES.decrypt(str, key, {
    iv: iv,
    mode: aes.CryptoJS.mode.CBC,
    padding: aes.CryptoJS.pad.ZeroPadding
  });
  return decrypted.toString(aes.CryptoJS.enc.Utf8);
}

module.exports={
  encrypt:encrypt,
  decrypt:decrypt
}
