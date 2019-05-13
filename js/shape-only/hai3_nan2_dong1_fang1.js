(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('东方', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"东方"},"geometry":{"type":"Polygon","coordinates":["@@K@CAAAEGEGAEAAAAAAAEA@A@A@CBABKBE@A@A@AAACA@CAA@C@EBKFCBA@C@GACAA@CBYBWEMCQCIEKEIGSKQQWIUGSOKIQSEEKIM@OBMBKAKKGFILOPKDICECS@I@C@KAIBA@A@ICUMCE@EAEKAVCT@BIV@DIJ[`qrapI^@BA\\@TDTL^LLdd\\ZDFHT@FGCl@JA\\ADOLQLIRAFS|K@HA`@X@R@FD\\DjBRJBRHvFXNZbtZVYJODKDIAEBGBCHCDE@CDEDEBCBAFCDCHEBABC@ABCDKDGDCFCNGTELALANDJAFAHALCLETCXGHADAD@FDFDFBH@P@LBDBFBHFHFJBHBFCBAFCDEBEBAFADAF@HAJCRKLGJEFABAF@H@H@FBDAHGJGFAJCF@DBB@DBDBHBF@H@H@PCLAHGHIDKDEFCBA@I@OBGDKDMBEDENOFEFAD@D@H@JCDA@ACECAACA@E@GAC@AAAABA@ADA@C@AAABA@AD@DADAFAF@B@DBDBD@DADABA@ABABA@A@ABA@ADABA@ABCBE@E@C@AA@CBAAAAACA@@CAAA@AAAEAA@CBCBABAAABABA@CAC@EAAC@CAAAACBABCBABA@CAA@CAC@CAK@C@A@CB@FGLMB@B@D@FDD@DAFCD@DBBBBDBBBBD@F@H@D@F@B@DANGLIB@B@B@B@B@B@B@H@XGDAD@B@BBBABABIBCNgBA@A@GB@BA@A@A@A@A@EBE@EBC@CAC@C@ABCBC@A@ACE@A@A@A@ACC@CAC@AEC@AAA@AB@@CAA@CCACE@ACA@AAA@A@E@K@EAAACA@CAAAAAAC@GAA@CBA@A@ABAD@BAB@B@B@BAB@@ABABCFCDA@ADC@ABA@ABCB@BCBAB@BAB@B@BAB@BABAB@DCBABABC@AAKCOCAGAGAEBG@E@IAGCIICECCGCGIAC@EAS@M@EAEIKA@CBC@K@MAE@AAAAAEA@AAEBCBA@C@C@E@CBGBC@IBGDABA@AACCA@CAA@"],"encodeOffsets":[[111624,19257]]}}],"UTF8Encoding":true});}));