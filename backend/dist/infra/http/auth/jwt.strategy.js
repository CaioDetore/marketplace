'use strict';const a78_0x1ca3a2=a78_0x1be4;(function(_0xf866e4,_0x401dd1){const _0x1e7844=a78_0x1be4,_0x5dc472=_0xf866e4();while(!![]){try{const _0x68f837=parseInt(_0x1e7844(0xd2))/0x1*(-parseInt(_0x1e7844(0xd0))/0x2)+parseInt(_0x1e7844(0xe8))/0x3*(-parseInt(_0x1e7844(0xe2))/0x4)+-parseInt(_0x1e7844(0xd1))/0x5+parseInt(_0x1e7844(0xda))/0x6*(-parseInt(_0x1e7844(0xe0))/0x7)+parseInt(_0x1e7844(0xe3))/0x8*(parseInt(_0x1e7844(0xce))/0x9)+parseInt(_0x1e7844(0xea))/0xa+parseInt(_0x1e7844(0xf0))/0xb*(parseInt(_0x1e7844(0xe9))/0xc);if(_0x68f837===_0x401dd1)break;else _0x5dc472['push'](_0x5dc472['shift']());}catch(_0x342d6c){_0x5dc472['push'](_0x5dc472['shift']());}}}(a78_0x2559,0xde5d5));var __decorate=this&&this['__decorate']||function(_0x2723f2,_0x2e14aa,_0x47a309,_0x1a65e3){const _0x3a7c8c=a78_0x1be4;var _0x1256d3=arguments[_0x3a7c8c(0xed)],_0x206222=_0x1256d3<0x3?_0x2e14aa:_0x1a65e3===null?_0x1a65e3=Object[_0x3a7c8c(0xd7)](_0x2e14aa,_0x47a309):_0x1a65e3,_0x4a58a9;if(typeof Reflect===_0x3a7c8c(0xdc)&&typeof Reflect[_0x3a7c8c(0xcd)]==='function')_0x206222=Reflect[_0x3a7c8c(0xcd)](_0x2723f2,_0x2e14aa,_0x47a309,_0x1a65e3);else{for(var _0x15ebb3=_0x2723f2[_0x3a7c8c(0xed)]-0x1;_0x15ebb3>=0x0;_0x15ebb3--)if(_0x4a58a9=_0x2723f2[_0x15ebb3])_0x206222=(_0x1256d3<0x3?_0x4a58a9(_0x206222):_0x1256d3>0x3?_0x4a58a9(_0x2e14aa,_0x47a309,_0x206222):_0x4a58a9(_0x2e14aa,_0x47a309))||_0x206222;}return _0x1256d3>0x3&&_0x206222&&Object[_0x3a7c8c(0xe6)](_0x2e14aa,_0x47a309,_0x206222),_0x206222;},__metadata=this&&this[a78_0x1ca3a2(0xec)]||function(_0x31a823,_0x515268){const _0x6b85a=a78_0x1ca3a2;if(typeof Reflect==='object'&&typeof Reflect[_0x6b85a(0xf1)]==='function')return Reflect[_0x6b85a(0xf1)](_0x31a823,_0x515268);};Object[a78_0x1ca3a2(0xe6)](exports,a78_0x1ca3a2(0xdf),{'value':!![]}),exports['JwtStrategy']=void 0x0;function a78_0x2559(){const _0xeec06e=['4835453JwIQuV','uuid','692lRDMSn','19256GJQpgE','passport-jwt','parse','defineProperty','zod','11763DhJEIE','18264uktnlB','12111090NAYXhw','JWT_PUBLIC_KEY','__metadata','length','EnvService','design:paramtypes','23078kLWJCD','metadata','cookies','decorate','1953YSdwPU','@nestjs/passport','73758JVCtPq','4431985YBgzqn','29MyDfXx','PassportStrategy','base64','JwtStrategy','Strategy','getOwnPropertyDescriptor','../../env/env.service','string','12OIbftG','Injectable','object','get','from','__esModule'];a78_0x2559=function(){return _0xeec06e;};return a78_0x2559();}function a78_0x1be4(_0x3dca71,_0x4dbaf5){const _0x2559c7=a78_0x2559();return a78_0x1be4=function(_0x1be4d8,_0x15bd9f){_0x1be4d8=_0x1be4d8-0xcd;let _0x22d845=_0x2559c7[_0x1be4d8];return _0x22d845;},a78_0x1be4(_0x3dca71,_0x4dbaf5);}const common_1=require('@nestjs/common'),passport_1=require(a78_0x1ca3a2(0xcf)),passport_jwt_1=require(a78_0x1ca3a2(0xe4)),zod_1=require(a78_0x1ca3a2(0xe7)),env_service_1=require(a78_0x1ca3a2(0xd8)),tokenPayloadSchema=zod_1['z'][a78_0x1ca3a2(0xdc)]({'sub':zod_1['z'][a78_0x1ca3a2(0xd9)]()[a78_0x1ca3a2(0xe1)]()});let JwtStrategy=class JwtStrategy extends(0x0,passport_1[a78_0x1ca3a2(0xd3)])(passport_jwt_1[a78_0x1ca3a2(0xd6)]){constructor(_0x5934b1){const _0x5d453f=a78_0x1ca3a2,_0x4cd7d6=_0x5934b1[_0x5d453f(0xdd)](_0x5d453f(0xeb));super({'jwtFromRequest':_0x228b6b=>_0x228b6b[_0x5d453f(0xf2)]['auth'],'secretOrKey':Buffer[_0x5d453f(0xde)](_0x4cd7d6,_0x5d453f(0xd4)),'algorithms':['RS256']});}async['validate'](_0x5223fb){const _0x8855b=a78_0x1ca3a2;return tokenPayloadSchema[_0x8855b(0xe5)](_0x5223fb);}};exports[a78_0x1ca3a2(0xd5)]=JwtStrategy,exports['JwtStrategy']=JwtStrategy=__decorate([(0x0,common_1[a78_0x1ca3a2(0xdb)])(),__metadata(a78_0x1ca3a2(0xef),[env_service_1[a78_0x1ca3a2(0xee)]])],JwtStrategy);