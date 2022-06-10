/*
 * @Author: losting
 * @Date: 2022-05-26 10:41:36
 * @LastEditTime: 2022-05-26 12:01:46
 * @LastEditors: losting
 * @Description:
 * @FilePath: \moe-admin-template\src\utils\rsa.js
 */
import JSEncrypt from 'jsencrypt';

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIh2dg1SvYLO9/F+n/geDD3x5W\n'
+ '9fl1nkAAhGsILw3VFlAeQ9EUo62Or34/zY6SxcvgiExLBS79l1CWTmT1DCNdxAWu\n'
+ 'RE5v1PuI9JwWVspCuSzCYCEs2MnqYymKv68GzQ+9M7xmmzE0cXfkDqlMmJjm7LAl\n'
+ 'Cko5rHiyWWI7PTfHowIDAQAB';

const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMiHZ2DVK9gs738X\n'
+ '6f+B4MPfHlb1+XWeQACEawgvDdUWUB5D0RSjrY6vfj/NjpLFy+CITEsFLv2XUJZO\n'
+ 'ZPUMI13EBa5ETm/U+4j0nBZWykK5LMJgISzYyepjKYq/rwbND70zvGabMTRxd+QO\n'
+ 'qUyYmObssCUKSjmseLJZYjs9N8ejAgMBAAECgYEAkJJWbNCjcJJNBLMoCAcKFg05\n'
+ 'IXbrJ+o0uGq/g8Hw1gzlLDy2c4vh5/oMKlG3lYe3CiUZ5AhTrY63EfZpAOaEY6Gd\n'
+ '0z9T+hxmqiJVulfnLcY0Vb1njGHUdZbO6bxrq47a7Uv0z3BW6Ojc39JXgGmM4fT2\n'
+ 'F+SgXLod+lIcu1yRTLkCQQDsYL1nXjxupGn/fliOxoxdVdPthhIKcpLOnQXgns+a\n'
+ '4x9jACLBK67skmzUH0h771mEaMAIls4pxJXe8qOOHEdVAkEA2SzWp6OhN58IU3kk\n'
+ 'HXMjLIMISx9iKnMmpd4sHZYINRTICg7xc8p34guqQrf9cSaPwRTSoJMVMpOqTreJ\n'
+ 'dbnjFwJAJZnJ5zyFTnBW8C5v9d49i8dQW/M8wW6yTa2Kts1sZs4EOyJVZPcG71jn\n'
+ 'eOK1DAnp6ncjPPqINvqvgHSGcd+rtQJANjCzCzeQRdHAARwsP9D4COZVTnFxTEhZ\n'
+ 'b3AFsAg82gnqdGAQLaVqzpO8k1NXwUEvA63PdNPeqTUhfOzdNuwAVwJBALxxgjBp\n'
+ 'RIVHktb1xP2Ft/I/ZH/64bUqH/+1NcVqBj6GPvjdkhf6U5DVCpC/jSCtwvZBPcix\n'
+ 'F0/2z9cidraPAZE=';

// rsa加密
export const encrypt = (data) => {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  return jsEncrypt.encrypt(data);
};

// rsa解密
export const decrypt = (data) => {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPrivateKey(privateKey);
  return jsEncrypt.decrypt(data);
};
