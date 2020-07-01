const nx = require('@feizheng/next-js-core2');
require('../src/next-spys-port-decode');

describe('api.basic test', () => {
  test('nx.spysPortDecode', function() {
    /** 用了 with，暂时无法测试 */
    var str = '(OneSixEightTwo^Three1Four)+(ZeroNineFourOne^SevenZeroEight)+(OneSixEightTwo^Three1Four)+(ZeroNineFourOne^SevenZeroEight)';
    console.log(nx.spysPortDecode(str));
  });
});
