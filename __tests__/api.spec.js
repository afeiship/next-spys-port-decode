const nx = require('@feizheng/next-js-core2');
require('../src/next-spys-port-decode');

describe('api.basic test', () => {
  test('nx.spysPortDecode', function () {
    var str = '(FourOneNineOne^One5Two)+(ZeroOneTwoNine^Eight8Eight)+(ZeroOneTwoNine^Eight8Eight)+(Three4ZeroSix^NineSixFour)+(EightEightThreeFive^Nine6Five)';

    expect(
      nx.spysPortDecode({
        key: 'g=D^C;l=B^E;i=F^A;t=6;h=1;f=H^G;j=0;k=2;o=J^y;r=7;m=u^x;c=4;a=z^w;s=v^I;p=9;q=T^S;n=8;b=3;e=5;d=R^M;K=j^l;L=h^i;O=k^g;P=b^a;N=c^d;Q=e^m;W=t^s;X=r^q;V=n^o;U=p^f;',
        value: '^^^^^^^^^^One5Two^Zero^Five^Nine0Three^Three^OneSixOne^ThreeEightZero^Eight^Nine6Five^Two^Four^NineSixFour^Zero9Nine^Seven^Eight8Eight^Six^Five3Six^Nine^One3Seven^One^270^10009^6588^8909^8090^8335^3127^3823^80^4663^808^1513^8118^8724^8088^5609^Three4ZeroSix^EightEightThreeFive^8888^OneOneSevenZero^NineTwoFourThree^FourOneNineOne^Seven4EightTwo^9152^81^525^Zero5SixSeven^ZeroOneTwoNine^FourZeroFiveFour^EightTwoOneEight',
        data: str,
      })
    ).toBe("38801");
  });
});
