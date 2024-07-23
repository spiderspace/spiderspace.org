import{s as w,e as a0,a as q,b as f,t as V,c as H,d as E,f as k}from"./string.YsXLJ4p3.js";import{c as _,a as g,K as X,r as c,s as e,t as M,I as z,f as G,b as s0}from"./disclose-version.Bb4Q7r27.js";import{t as y,v as L,x as T,p as r0,a as o0}from"./runtime.DGcgR5j2.js";import{p as x,i as b}from"./props.D1o3zmor.js";const b0=(a,t)=>{const{name:d}=a,l=(i=>i?q(w(q(i,".git"),"git+"),"/"):null)(a.repository?typeof a.repository=="string"?a.repository:a.repository.url:null);if(!l)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const o=a.homepage??null,v=!a.private&&!!a.exports&&a.version!=="0.0.1",r=v?"https://www.npmjs.com/package/"+a.name:null,u=v&&l?l+"/blob/main/CHANGELOG.md":null,h=l0(d),m=l?w(l,"https://github.com/").split("/")[0]:null,n=o?a0(o,"/")+(a.logo?w(a.logo,"/"):"favicon.png"):null,s=a.logo_alt??`logo for ${h}`;return{package_json:a,src_json:t,name:d,repo_name:h,repo_url:l,owner_name:m,homepage_url:o,logo_url:n,logo_alt:s,npm_url:r,changelog_url:u,published:v}},l0=a=>a[0]==="@"?a.split("/")[1]:a,i0=a=>q(w(w(a,"https://"),"www."),"/");var n0=X(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>`);function d0(a,t){const d=x(t,"fill",3,"var(--text_color, #000)"),p=x(t,"size",3,"var(--space_xl7, 64px)"),l=x(t,"label",3,"the GitHub icon, an octocat silhouette"),o=T(()=>t.width??p()),v=T(()=>t.height??p());var r=n0();let u;var h=_(r);c(r),y(()=>{u=f(r,u,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t.attrs,"aria-label":l(),class:t.classes},!1,"svelte-16ciom8"),V(r,"inline",t.inline),H(r,"width",L(o)),H(r,"height",L(v)),E(h,"fill",d())}),g(a,r)}var p0=M('<div class="root_url svelte-cs8o0f"><a> </a></div>'),_0=M('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function w0(a,t){r0(t,!0);const d=x(t,"root_url",3,null);var p=_0(),l=_(p);b(l,()=>t.children,n=>{var s=z(),i=G(s);k(i,()=>t.children),g(n,s)});var o=e(e(l,!0)),v=_(o);b(v,()=>t.logo_header,n=>{var s=z(),i=G(s);k(i,()=>t.logo_header),g(n,s)});var r=e(e(v,!0)),u=_(r);b(u,()=>t.logo,n=>{var s=z(),i=G(s);k(i,()=>t.logo),g(n,s)},n=>{d0(n,{})}),c(r);var h=e(e(r,!0));b(h,()=>t.logo_footer,n=>{var s=z(),i=G(s);k(i,()=>t.logo_footer),g(n,s)}),c(o);var m=e(e(o,!0));b(m,d,n=>{var s=p0(),i=_(s),C=_(i);y(()=>s0(C,i0(d()))),c(i),c(s),y(()=>E(i,"href",d())),g(n,s)}),c(p),y(()=>E(r,"href",t.pkg.repo_url)),g(a,p),o0()}const y0={name:"spiderspace.org",version:"0.0.1",description:"community website with a YouTube channel about building it",motto:"weaving web community",glyph:"🕸️",logo:"logo.svg",logo_alt:"a galaxy full of twinkling star spiders",license:"MIT",public:!0,homepage:"https://www.spiderspace.org/",repository:"https://github.com/ryanatkn/spiderspace.org",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/spiderspace.org/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},devDependencies:{"@ryanatkn/belt":"^0.24.11","@ryanatkn/eslint-config":"^0.4.2","@ryanatkn/fuz":"^0.118.2","@ryanatkn/gro":"^0.133.4","@ryanatkn/moss":"^0.11.1","@sveltejs/adapter-static":"^3.0.2","@sveltejs/kit":"^2.5.18","@sveltejs/vite-plugin-svelte":"^3.1.1",eslint:"^9.7.0","eslint-plugin-svelte":"^2.43.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.6",svelte:"^5.0.0-next.195","svelte-check":"^3.8.4",tslib:"^2.6.3",typescript:"^5.5.4","typescript-eslint":"^8.0.0-alpha.44",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist"]},x0={name:"spiderspace.org",version:"0.0.1"};var c0=X('<svg><defs><radialGradient id="spiderspace_logo_galaxy_radial_gradient"><stop offset="0%" stop-color="#397fc6"></stop><stop offset="50%" stop-color="#5040bf"></stop><stop offset="70%" stop-color="#2e669e"></stop><stop offset="90%" stop-color="#8866cc"></stop><stop offset="95%" stop-color="#5040bf"></stop><stop offset="100%" stop-color="#6a40bf"></stop></radialGradient><radialGradient id="spiderspace_logo_spider_radial_gradient" cx="0.55" cy="0.53"><stop offset="0%" stop-color="#ff901a"></stop><stop offset="35%" stop-color="#e5c005"></stop><stop offset="70%" stop-color="#ceac00"></stop><stop offset="100%" stop-color="#ec8134"></stop></radialGradient></defs><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>');function v0(a,t){const d=x(t,"label",3,"a galaxy full of twinkling star spiders"),p=T(()=>t.width??t.size),l=T(()=>t.height??t.size);var o=c0();let v;var r=_(o),u=_(r),h=_(u),m=e(h),n=e(m),s=e(n),i=e(s);e(i),c(u);var C=e(u),j=_(C),$=e(j),t0=e($);e(t0),c(C),c(r);var A=e(r);let B;var I=e(A);let S;var Z=e(I);let D;var F=e(Z);let K;var N=e(F);let O;var Q=e(N);let R;var W=e(Q);let Y;var J=e(W);let P;var e0=e(J);let U;c(o),y(()=>{v=f(o,v,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...t.attrs,"aria-label":d(),class:t.classes},!1,"svelte-16ciom8"),V(o,"inline",t.inline),H(o,"width",L(p)),H(o,"height",L(l)),B=f(A,B,{...t.path_attrs,d:"m 24.4585,64.970717 -0.930962,-2.241324 -0.224544,-2.918957 -0.304656,-0.347669 -0.278169,0.03594 -1.592326,1.40895 -1.191021,1.478973 -0.467224,1.045104 -0.259107,0.07189 0.266678,-1.255052 1.037223,-1.74184 1.64018,-1.725952 -0.02215,-0.368073 -0.274852,-0.131558 -2.190347,-0.270682 -1.670993,0.337187 -0.953319,0.148773 -0.178034,-0.160885 1.021237,-0.497411 1.810539,-0.481202 2.299845,0.130503 0.127035,-0.218522 -0.07993,-0.170527 -1.376599,-1.056429 -1.369186,-0.625465 -0.491568,-0.521398 0.03733,-0.226693 0.776326,0.509595 1.272685,0.27188 1.429846,0.920058 0.34613,-0.167324 0.385057,-0.51644 -0.507846,-1.109613 -0.04766,-1.437916 -0.228535,-0.998702 0.207214,0.03989 0.27946,0.720271 0.412455,1.586861 0.597116,0.990816 0.113807,0.119774 0.28822,0.07792 0.437823,-2.14204 0.433085,-1.743293 0.691342,-1.08962 0.06641,0.190647 -0.343996,0.770599 -0.310789,2.058743 0.0125,2.31944 0.0764,0.217499 0.238771,0.10859 2.208552,-0.948814 1.580988,0.01918 0.83258,0.177777 0.143991,0.159779 -1.005217,0.01058 -1.538265,0.25429 -1.862719,1.084909 -0.0025,0.197317 0.285853,0.23216 2.32098,1.054317 1.764918,1.638937 0.805362,1.161766 -0.09835,0.266702 -0.934868,-0.884911 -1.954205,-1.44216 -2.685667,-0.973353 -0.502084,0.270421 -0.569458,0.921912 0.07444,2.789455 0.671329,2.538031 0.38061,0.950549 -0.344995,-0.006 z",fill:"url('#spiderspace_logo_spider_radial_gradient')"},!1,"svelte-16ciom8"),S=f(I,S,{...t.path_attrs,d:"m 26.7296,29.884698 -2.320885,0.49838 -2.80025,-0.352714 -0.396099,0.239774 -0.02879,0.289202 0.968893,1.894849 1.125181,1.501825 0.87937,0.681576 0.0094,0.277041 -1.12227,-0.519968 -1.407397,-1.398139 -1.256758,-2.006406 -0.351724,-0.05074 -0.185828,0.252502 -0.747951,2.167283 -0.05842,1.761503 -0.07437,0.996301 -0.191635,0.148522 -0.238738,-1.134485 -0.04584,-1.931652 0.640522,-2.306192 -0.177192,-0.172312 -0.178626,0.04715 -1.304991,1.185874 -0.897272,1.264098 -0.601792,0.394801 -0.205109,-0.08306 0.654829,-0.685851 0.542527,-1.236505 1.188505,-1.266976 -0.07971,-0.384266 -0.399845,-0.493146 -1.159576,0.294331 -1.365278,-0.237588 -0.992232,0.03317 0.0843,-0.202166 0.741411,-0.140174 1.587682,-0.102722 1.067761,-0.408472 0.138519,-0.09156 0.138253,-0.276782 -1.919314,-0.869899 -1.544754,-0.785805 -0.87085,-0.917705 0.194539,-0.02953 0.648498,0.502081 1.869425,0.724525 2.187783,0.448488 0.222075,-0.03419 0.156022,-0.220553 -0.396756,-2.428234 0.37387,-1.599381 0.354858,-0.808922 0.182967,-0.114177 -0.216296,1.021432 -0.106646,1.610431 0.602776,2.104599 0.185346,0.04172 0.283019,-0.243744 1.515503,-2.143963 1.941107,-1.463819 1.275661,-0.585672 0.22911,0.152752 -1.043997,0.772043 -1.798389,1.694838 -1.521352,2.529838 0.141752,0.5629 0.740307,0.760759 2.644484,0.47917 2.54196,-0.176105 0.9811,-0.196917 -0.08396,0.348504 z",fill:"url('#spiderspace_logo_spider_radial_gradient')"},!1,"svelte-16ciom8"),D=f(Z,D,{...t.path_attrs,d:"m 55.788199,11.366192 2.350612,-0.586417 2.862956,0.227733 0.396802,-0.251787 0.02119,-0.284726 -1.040466,-1.8167425 -1.188746,-1.4247826 -0.915114,-0.6311097 -0.01738,-0.2711951 1.158049,0.462445 1.473267,1.3113167 1.336897,1.9139692 0.359783,0.03491 0.182208,-0.255394 0.70105,-2.1561917 0.01,-1.7293284 0.04771,-0.9798424 0.191075,-0.1536727 0.27515,1.1021105 0.10105,1.891732 -0.587714,2.2878377 0.185394,0.161434 0.180669,-0.05374 1.296226,-1.217564 0.878625,-1.2770591 0.60203,-0.4124016 0.211325,0.072723 -0.647865,0.699974 -0.517952,1.2350596 -1.175264,1.2921591 0.09205,0.373344 0.421256,0.466589 1.173153,-0.337421 1.397692,0.175361 1.010004,-0.07434 -0.08014,0.201757 -0.751447,0.168663 -1.614716,0.16763 -1.076393,0.445454 -0.138545,0.09561 -0.133071,0.277165 1.979972,0.77188 1.595977,0.705243 0.913089,0.862945 -0.197366,0.03713 -0.67485,-0.464864 -1.925052,-0.63147 -2.241641,-0.347445 -0.225295,0.04287 -0.152762,0.222791 0.472543,2.363757 -0.335908,1.58369 -0.338785,0.807975 -0.18323,0.119603 0.191636,-1.010462 0.06334,-1.583255 -0.673349,-2.037806 -0.190021,-0.03307 -0.281518,0.250853 -1.483749,2.165684 -1.936511,1.516864 -1.283227,0.62793 -0.23775,-0.140042 1.041949,-0.80087 1.784611,-1.737312 1.478838,-2.544223 -0.160261,-0.545862 -0.77567,-0.714583 -2.707809,-0.358275 -2.584921,0.279792 -0.994056,0.234407 0.07573,-0.345193 z",fill:"url('#spiderspace_logo_spider_radial_gradient')"},!1,"svelte-16ciom8"),K=f(F,K,{...t.path_attrs,d:"m 83.118615,67.384674 0.62104,2.273532 -0.195632,2.849118 0.259268,0.370803 0.288028,-0.0032 1.823586,-1.182818 1.425757,-1.295927 0.626814,-0.958133 0.273895,-0.0402 -0.453425,1.18391 -1.307567,1.567608 -1.918309,1.484016 -0.03095,0.358574 0.260313,0.158411 2.187711,0.509725 1.747939,-0.137088 0.990895,-0.0361 0.157628,0.175793 -1.110579,0.365603 -1.910741,0.260604 -2.319397,-0.386512 -0.160944,0.196949 0.05649,0.174012 1.246219,1.177749 1.301319,0.759923 0.424077,0.560006 -0.07098,0.215053 -0.715265,-0.580929 -1.254513,-0.407007 -1.320161,-1.051846 -0.376225,0.122716 -0.466501,0.456012 0.355187,1.130882 -0.160382,1.396388 0.08733,0.991976 -0.204881,-0.06207 -0.179528,-0.728405 -0.188904,-1.581754 -0.463198,-1.026065 -0.09826,-0.128839 -0.281736,-0.107968 -0.756251,2.022592 -0.693527,1.637397 -0.861158,0.975824 -0.04,-0.191907 0.461707,-0.706519 0.614993,-1.956385 0.324124,-2.245171 -0.04606,-0.219044 -0.227012,-0.132063 -2.38333,0.667905 -1.604677,-0.197457 -0.820704,-0.266202 -0.12307,-0.170956 1.023578,0.103565 1.600953,-0.07192 2.051471,-0.838687 0.03107,-0.19063 -0.256968,-0.256909 -2.206741,-1.282541 -1.55644,-1.785177 -0.650121,-1.214999 0.138692,-0.246887 0.822003,0.961826 1.777428,1.616306 2.589262,1.245535 0.54976,-0.204789 0.712882,-0.827382 0.329438,-2.706854 -0.313968,-2.531179 -0.248904,-0.962615 0.349805,0.04547 z",fill:"url('#spiderspace_logo_spider_radial_gradient')"},!1,"svelte-16ciom8"),O=f(N,O,{...t.path_attrs,d:"m 63.126698,59.930492 -1.457655,1.884072 -2.411576,1.598041 -0.14286,0.431059 0.175554,0.223693 2.047571,0.701697 1.899748,0.320437 1.147922,-0.09787 0.196867,0.189865 -1.225591,0.372501 -2.04751,-0.06084 -2.347008,-0.590707 -0.307297,0.196172 0.02877,0.301318 0.903451,2.027304 1.160147,1.285175 0.624177,0.754132 -0.04682,0.23156 -0.961364,-0.645364 -1.357379,-1.336803 -1.081754,-2.054731 -0.255246,-0.0051 -0.106182,0.15122 -0.199874,1.700308 0.16965,1.486646 -0.196222,0.676476 -0.215771,0.07662 0.03816,-0.917443 -0.4257,-1.233049 0.05408,-1.680846 -0.324754,-0.219319 -0.647345,-0.08518 -0.697264,0.973408 -1.22068,0.732692 -0.746292,0.678168 -0.07307,-0.198684 0.478687,-0.588398 1.160161,-1.120278 0.548003,-0.993609 0.04466,-0.156207 -0.08226,-0.28709 -2.082758,0.650767 -1.734932,0.463136 -1.302914,-0.07485 0.130492,-0.149294 0.846167,-0.07257 1.94462,-0.720745 2.002452,-1.12614 0.148654,-0.170776 -0.03,-0.259033 -1.969161,-1.456694 -0.804703,-1.378587 -0.278548,-0.806617 0.06366,-0.201527 0.531341,0.865591 1.019411,1.210062 1.907348,1.091739 0.172175,-0.09283 0.05252,-0.359247 -0.292623,-2.517253 0.502654,-2.316735 0.587863,-1.256182 0.282085,-0.04314 -0.280782,1.235228 -0.233962,2.386062 0.552155,2.794191 0.495065,0.304841 1.094343,0.04993 2.377393,-1.405763 1.849523,-1.801865 0.625602,-0.786711 0.173431,0.302034 z",fill:"url('#spiderspace_logo_spider_radial_gradient')"},!1,"svelte-16ciom8"),R=f(Q,R,{...t.path_attrs,d:"m 62.102874,37.816738 1.065395,-2.189224 2.035598,-2.104555 0.06013,-0.460695 -0.209289,-0.186442 -2.098287,-0.269378 -1.887384,0.08031 -1.088071,0.3397 -0.223723,-0.148187 1.113521,-0.630395 1.983063,-0.370763 2.366744,0.0954 0.260737,-0.260718 -0.08188,-0.294916 -1.234511,-1.834674 -1.348384,-1.039249 -0.736695,-0.621782 0.0036,-0.241179 1.041942,0.442027 1.547638,1.049244 1.411176,1.824489 0.246741,-0.0488 0.07505,-0.173454 -0.113049,-1.740566 -0.430559,-1.449258 0.06742,-0.717097 0.194051,-0.122029 0.128129,0.924482 0.631631,1.141969 0.249965,1.690402 0.352217,0.150643 0.638825,-0.05134 0.496654,-1.1193 1.044066,-0.989153 0.596941,-0.834708 0.106046,0.183061 -0.355324,0.688636 -0.916124,1.363567 -0.349263,1.108016 -0.01498,0.165454 0.130822,0.269447 1.889127,-1.089017 1.587826,-0.828283 1.268405,-0.199779 -0.09889,0.176609 -0.801972,0.250823 -1.743494,1.129805 -1.726347,1.546947 -0.112467,0.201927 0.07547,0.252422 2.158436,1.040077 1.022849,1.207451 0.413241,0.747028 -0.02513,0.214724 -0.667325,-0.752654 -1.199328,-0.993905 -2.033327,-0.688511 -0.149143,0.129015 0.01398,0.369914 0.734221,2.452817 -0.06781,2.420132 -0.340464,1.378711 -0.263959,0.102505 0.04846,-1.293053 -0.203448,-2.432754 -1.033965,-2.674759 -0.531598,-0.2002 -1.063021,0.180765 -2.037232,1.905293 -1.457615,2.189695 -0.461192,0.9177 -0.221298,-0.265177 z",fill:"url('#spiderspace_logo_spider_radial_gradient')"},!1,"svelte-16ciom8"),Y=f(W,Y,{...t.path_attrs,d:"m 46.131527,47.070508 -1.381955,-1.93615 -0.792213,-2.712142 -0.377797,-0.269413 -0.276778,0.08753 -1.352158,1.637268 -0.929381,1.625933 -0.274857,1.076719 -0.25039,0.11786 0.02991,-1.236202 0.721781,-1.844401 1.339782,-1.945758 -0.09367,-0.343184 -0.30568,-0.0712 -2.286151,0.167102 -1.639165,0.640727 -0.943572,0.324438 -0.212597,-0.117553 0.945584,-0.666593 1.753713,-0.803592 2.370782,-0.320562 0.08749,-0.230726 -0.114326,-0.145579 -1.607822,-0.731657 -1.517135,-0.326173 -0.601949,-0.397338 -0.006,-0.221204 0.890085,0.331309 1.350462,0.01109 1.63582,0.592624 0.320721,-0.22476 0.293074,-0.561808 -0.732042,-0.949483 -0.326043,-1.348183 -0.425781,-0.898674 0.219026,-0.0024 0.424005,0.62602 0.726846,1.418394 0.800158,0.820125 0.139275,0.09115 0.308984,0.01793 0.03323,-2.106547 0.10527,-1.729222 0.494853,-1.161979 0.104665,0.16709 -0.202186,0.793814 0.0802,2.003397 0.460311,2.187112 0.119952,0.190557 0.264493,0.05639 2.06942,-1.321799 1.616124,-0.286997 0.883459,0.0071 0.17761,0.123154 -1.023185,0.203902 -1.519801,0.536849 -1.69046,1.38353 0.03567,0.186744 0.336369,0.163964 2.570594,0.547395 2.116262,1.206594 1.045542,0.941305 -0.04876,0.270745 -1.124211,-0.654953 -2.271319,-0.98439 -2.926901,-0.400648 -0.459895,0.352151 -0.40289,0.980154 0.614138,2.61886 1.174395,2.266342 0.571572,0.823893 -0.353157,0.06024 z",fill:"url('#spiderspace_logo_spider_radial_gradient')"},!1,"svelte-16ciom8"),P=f(J,P,{...t.path_attrs,d:"m 45.945462,79.913836 1.411293,1.974457 0.875407,2.793632 0.375055,0.270233 0.262948,-0.09762 1.234572,-1.731035 0.827801,-1.70899 0.220151,-1.12342 0.236283,-0.128352 0.02248,1.282873 -0.618812,1.930522 -1.209885,2.050678 0.104382,0.353658 0.297402,0.06636 2.195098,-0.228975 1.552315,-0.704439 0.895418,-0.359408 0.209659,0.116708 -0.88317,0.714387 -1.65589,0.876151 -2.270252,0.390196 -0.07464,0.241491 0.116251,0.148176 1.578961,0.719684 1.474791,0.301433 0.596268,0.397444 0.01462,0.229274 -0.871067,-0.3219 -1.301225,0.02138 -1.600168,-0.57483 -0.299617,0.240897 -0.259016,0.589826 0.744438,0.966932 0.3699,1.390342 0.447337,0.921696 -0.21087,0.0077 -0.434326,-0.638951 -0.758851,-1.453407 -0.804696,-0.831098 -0.137842,-0.0911 -0.298358,-0.01111 0.05525,2.185628 -0.02983,1.796035 -0.42851,1.217208 -0.107598,-0.170824 0.161834,-0.828234 -0.160293,-2.075887 -0.533941,-2.257183 -0.123369,-0.194739 -0.257078,-0.05211 -1.938508,1.421314 -1.544781,0.336956 -0.851231,0.01407 -0.176242,-0.12329 0.977073,-0.236434 1.441632,-0.593816 1.570922,-1.476122 -0.04195,-0.192827 -0.330752,-0.161903 -2.498665,-0.505187 -2.088364,-1.199912 -1.046063,-0.950822 0.03583,-0.281987 1.109974,0.651924 2.228532,0.965598 2.83579,0.344261 0.428385,-0.376436 0.347479,-1.026383 -0.700023,-2.701216 -1.225057,-2.321962 -0.584683,-0.84057 0.337505,-0.07176 z",fill:"url('#spiderspace_logo_spider_radial_gradient')"},!1,"svelte-16ciom8"),U=f(e0,U,{...t.path_attrs,d:"M 41.391236,63.051146 C 33.101277,59.381253 25.468093,45.742926 25.968903,40.864718 26.47209,33.815832 38.701833,22.418881 41.51038,20.969358 c 3.812312,-2.29735 23.213922,-2.657575 33.693681,2.03222 11.179251,4.788744 20.431016,18.081407 21.06409,20.733048 2.198069,8.91408 7.241359,29.651079 -3.162658,39.721942 -17.30326,13.408505 -20.524186,13.050253 -41.904718,16.413145 -8.814053,0.617557 -21.078868,-1.583172 -31.58609,-4.471823 -0.97087,-0.420143 -2.274673,-1.71451 -1.625837,-1.661149 18.282473,2.687822 15.269024,2.607025 31.6774,0.887128 C 73.483357,93.85536 76.00865,92.487339 88.202493,79.794536 95.264786,70.763831 98.219325,71.369947 90.726804,46.036416 86.486072,30.899346 80.838557,30.73624 72.72026,27.076918 63.988942,23.141276 56.075126,19.998521 44.238428,25.98457 c -5.498722,3.347106 -10.804182,2.46512 -11.364155,15.00928 0.834256,10.377361 2.640093,12.680871 9.795913,14.221232 12.169687,0.693813 12.056629,-15.713913 20.41488,-14.809854 8.798827,0.995591 15.825208,8.671317 16.154942,18.135372 -0.1498,5.614338 -6.300267,13.188764 -13.294214,17.625334 -9.314739,5.391697 -22.317147,1.772039 -32.536635,0.520804 C 16.927476,72.824023 4.869592,57.793694 3.6601863,54.998722 -0.29148097,43.060661 3.3014798,21.244121 8.8379156,14.335408 13.006415,7.5990804 32.225731,3.0503398 44.931515,1.3218515 54.244736,0.05050865 60.822588,-2.0470513 88.833256,4.9704431 89.580618,5.1617117 90.517033,6.5621811 90.034535,6.4934482 66.295051,3.077785 62.514079,3.0931959 45.950985,6.5403681 37.778696,7.5648832 19.035412,6.4179932 13.476809,17.898834 4.2612823,36.638405 4.3827466,37.458254 9.6277911,53.123189 13.765209,63.514895 12.709091,63.459113 35.008252,70.980947 43.888711,73.624142 49.51008,78.877631 63.132495,71.39185 68.152511,67.563314 72.325339,68.471179 72.090999,58.848803 72.86057,44.801893 65.67137,47.553592 62.194729,47.369105 53.522898,46.908938 48.591134,65.048567 41.391236,63.051146 Z",fill:"url('#spiderspace_logo_galaxy_radial_gradient')"},!1,"svelte-16ciom8")}),g(a,o)}var f0=M('<header class="box"><h1 class="my_xl5">spiderspace</h1> <!> <div class="mt_xl4 shadow_outset_xs p_sm radius_md"><blockquote class="shadow_inset_xs px_xl">weaving web community 🕸️</blockquote></div></header>');function C0(a){var t=f0(),d=_(t),p=e(e(d,!0));v0(p,{size:"var(--icon_size_xl3)"});var l=e(e(p,!0));_(l),c(l),c(t),g(a,t)}export{C0 as H,w0 as L,y0 as a,i0 as f,b0 as p,x0 as s};
