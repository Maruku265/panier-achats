(this["webpackJsonppanier-achats"]=this["webpackJsonppanier-achats"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"nom":"Chandail \xe0 manche longue","prix":19.69,"id":"prd0001"},{"nom":"T-shirt \xe0 col roul\xe9","prix":9.69,"id":"prd0002"},{"nom":"T-shirt \xe0 col V","prix":29.69,"id":"prd0003"},{"nom":"T-shirt orange","prix":39.69,"id":"prd0004"},{"nom":"T-shirt masculin","prix":49.69,"id":"prd0005"},{"nom":"Chandail","prix":59.69,"id":"prd0006"}]')},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(16),a=n.n(i),r=n(13),o=(n(35),n(36),n(14));n(37);var j=n(26),l=n.n(j),d=n(64),u=(n(38),n(2));function b(e){var t=e.panier,n=e.affichable,c=function(e){var t=Object.values(e),n={nbArticles:0,totalItems:0,st:0,tps:0,tvq:0,total:0};n.nbArticles=t.length,n.totalItems=t.reduce((function(e,t){return e+t.qte}),0);var c=t.reduce((function(e,t){return e+t.prix*t.qte}),0);n.st=c.toFixed(2);var s=.05*c;n.tps=s.toFixed(2);var i=.09975*c;return n.tvq=i.toFixed(2),n.total=(c+s+i).toFixed(2),n}(t);return Object(u.jsxs)("div",{className:"SommairePanier"+(n?"":" cacher"),children:[Object(u.jsxs)("span",{children:["Articles diff\xe9rents : ",c.nbArticles]}),Object(u.jsxs)("span",{children:["Total # items : ",c.totalItems]}),Object(u.jsxs)("span",{children:["Sous-total : ",c.st]}),Object(u.jsxs)("span",{children:["TPS : ",c.tps]}),Object(u.jsxs)("span",{children:["TVQ : ",c.tvq]}),Object(u.jsxs)("span",{children:["Total : ",c.total]})]})}var x=function(e){var t=e.etatPanier,n=Object(o.a)(t,1)[0],s=Object.values(n),i=Object(c.useState)(!1),a=Object(o.a)(i,2),j=a[0],x=a[1];return Object(u.jsxs)("header",{className:"Entete",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(r.b,{to:"/",activeClassName:"navActive",children:"Magasin"})}),Object(u.jsxs)("ul",{className:"navPrincipale",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/nos-produits",activeClassName:"navActive",children:"Produits"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/a-propos-de-nous",activeClassName:"navActive",children:"\xc0 propos de nous"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/contactez-nous",activeClassName:"navActive",children:"Contactez-nous"})})]}),Object(u.jsxs)("ul",{className:"navUtilisateur",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)(d.a,{onClick:function(){x(!j)},badgeContent:s.reduce((function(e,t){return e+t.qte}),0),color:"secondary",children:Object(u.jsx)(l.a,{})}),Object(u.jsx)(b,{panier:n,affichable:j})]}),Object(u.jsx)("li",{children:"Mon Compte"})]})]})};n(46),n(47);function p(e){var t=e.onClick,n=e.qte,c=e.texte,s=e.classeCss;return Object(u.jsx)(d.a,{badgeContent:n,color:"primary",children:Object(u.jsx)("button",{onClick:t,className:"BtnAjoutPanier ".concat(s),children:c})})}n(48);var O=n(27),h=n.n(O);function m(e){var t=e.nom,n=e.prix,c=e.id,s=e.etatPanier,i=Object(o.a)(s,2),a=i[0],r=i[1];var j=0,l="Ajouter au panier",d="";return a[c]&&(j=a[c].qte,l=Object(u.jsx)(h.a,{}),d="rouge"),Object(u.jsxs)("li",{className:"Produit",children:[Object(u.jsx)("img",{src:"images-produits/"+c+".jpg",alt:""}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("p",{className:"nom",children:t}),Object(u.jsx)("p",{className:"prix",children:n})]}),Object(u.jsx)(p,{onClick:function(){a[c]?a[c].qte++:a[c]={nom:t,prix:n,qte:1},r(JSON.parse(JSON.stringify(a)))},qte:j,texte:l,classeCss:d})]})}var v=n(28);function f(e){return Object(u.jsxs)("div",{className:"ListeProduits",children:[Object(u.jsx)("h2",{children:"Produits disponibles"}),Object(u.jsx)("ul",{children:v.map((function(t){return Object(u.jsx)(m,{etatPanier:e.etatPanier,nom:t.nom,prix:t.prix,id:t.id},t.id)}))})]})}n(49);function N(e){var t=(new Date).getFullYear();return Object(u.jsxs)("footer",{className:"PiedDePage",children:["\xa9",t," - TIM - Tous droitsr\xe9serv\xe9s."]})}var g=n(3);function P(){return Object(u.jsxs)("div",{className:"Accueil",children:[Object(u.jsx)("h2",{children:"Magasin"}),Object(u.jsx)("p",{children:"Page d'accueil en construction"})]})}function C(){return Object(u.jsxs)("div",{className:"Apropos",children:[Object(u.jsx)("h2",{children:"Magasin"}),Object(u.jsx)("p",{children:"Page d'apropos en construction"})]})}function A(){return Object(u.jsxs)("div",{className:"Contact",children:[Object(u.jsx)("h2",{children:"Magasin"}),Object(u.jsx)("p",{children:"Formulaire de contactez-nous"})]})}function S(){var e=function(e,t){var n=Object(c.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),s=Object(o.a)(n,2),i=s[0],a=s[1];return Object(c.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(i))}),[i]),[i,a]}({},"panier");return Object(u.jsxs)("div",{className:"Appli",children:[Object(u.jsx)(x,{etatPanier:e}),Object(u.jsx)("section",{className:"contenuPrincipal",children:Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{path:"/",component:P,exact:!0}),Object(u.jsx)(g.a,{path:"/nos-produits",exact:!0,children:Object(u.jsx)(f,{etatPanier:e})}),Object(u.jsx)(g.a,{path:"/a-propos-de-nous",exact:!0,children:Object(u.jsx)(C,{})}),Object(u.jsx)(g.a,{path:"/contactez-nous",component:A,exact:!0})]})}),Object(u.jsx)(N,{})]})}a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(S,{})})}),document.getElementById("racine"))}},[[51,1,2]]]);
//# sourceMappingURL=main.140f0af2.chunk.js.map