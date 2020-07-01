const nx = require('@feizheng/next-js-core2');
require('../src/next-spys-port-decode');

var str = '(OneSixEightTwo^Three1Four)+(ZeroNineFourOne^SevenZeroEight)+(OneSixEightTwo^Three1Four)+(ZeroNineFourOne^SevenZeroEight)';
console.log(nx.spysPortDecode(str));
