(this.webpackJsonpbook_search=this.webpackJsonpbook_search||[]).push([[0],{116:function(e,t,c){e.exports={preloader:"Preloader_preloader__2o2TS"}},117:function(e,t,c){e.exports={moreResults:"MoreResults_moreResults__2E6iR"}},140:function(e,t,c){},172:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),o=c(36),r=c.n(o),s=(c(140),c(74)),i=c.n(s),l=c(10),u=c(64),j=c.n(u),b=c(24),h=c(88),m=c.n(h),O=c(246),p=c(247),d=c(243),x=c(244),k=c(19),S=function(e,t,c,a,n){return{type:"SET-BOOKS",searchStr:e,books:t,totalCount:c,currentPage:a,cleanUp:n}},g=function(e){return{type:"SET-FETCHING",fetching:e}},A=function(e,t){return{type:"SET-SHOWN",isButtonShown:e,isResultShown:t}},f=function(e,t){return{type:"SET-EXTRA-BOOKS",extraBooks:e,currentPage:t}},T=function(e){return Object(k.a)({type:"SET-SPECIFIC-BOOK"},e)},I=c(2),B=n.a.memo((function(){var e=Object(b.b)(),t=Object(a.useCallback)((function(t){e({type:"SET-CATEGORY",category:t.target.value})}),[e]);return Object(I.jsx)("div",{className:m.a.categoriesFilter,children:Object(I.jsxs)(O.a,{sx:{m:1,minWidth:120,background:"white",borderRadius:1},children:[Object(I.jsx)(p.a,{id:"CategoriesSelect",color:"success",children:"Categories"}),Object(I.jsxs)(d.a,{className:m.a.select,labelId:"CategoriesSelect",onChange:t,label:"Categories",color:"success",variant:"standard",defaultValue:"all",children:[Object(I.jsx)(x.a,{value:"all",children:"All"}),Object(I.jsx)(x.a,{value:"art",children:"Art"}),Object(I.jsx)(x.a,{value:"biography",children:"Biography"}),Object(I.jsx)(x.a,{value:"computers",children:"Computers"}),Object(I.jsx)(x.a,{value:"history",children:"History"}),Object(I.jsx)(x.a,{value:"medical",children:"Medical"}),Object(I.jsx)(x.a,{value:"poetry",children:"Poetry"})]})]})})})),H=c(91),y=c.n(H),v=n.a.memo((function(){var e=Object(b.b)(),t=Object(a.useCallback)((function(t){e({type:"SET-SORTING",sorting:t.target.value})}),[e]);return Object(I.jsx)("div",{className:y.a.sortingFilter,children:Object(I.jsxs)(O.a,{sx:{m:1,minWidth:120},children:[Object(I.jsx)(p.a,{id:"SortingSelect",color:"success",children:"Sorting by"}),Object(I.jsxs)(d.a,{className:y.a.select,labelId:"SortingSelect",onChange:t,label:"SortingBy",variant:"standard",color:"success",defaultValue:"relevance",children:[Object(I.jsx)(x.a,{value:"relevance",children:"Relevance"}),Object(I.jsx)(x.a,{value:"newest",children:"Newest"})]})]})})})),R=c(242),F=c(245),C=c(241),N=c.p+"static/media/book-dark-enlightenment-1029141-1024x683.e4e8a3f0.jpg",E=c(52),J=c.n(E),z=c(13),W=c(76),U=c(113),G="key=AIzaSyCp-HBFILbM8aF8n9Gne5SOThUHxgzuyrE",L=c.n(U).a.create({baseURL:"https://www.googleapis.com/books/v1/volumes"}),w=function(e,t,c){return L.get("?".concat(G,"&startIndex=").concat(t,"&").concat("maxResults=30","&").concat("printType=books","&orderBy=").concat(c,"&q=").concat(e))},q=function(e){return L.get("/".concat(e,"?").concat(G))},D="data:image/jpeg;base64,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",M=c.p+"static/media/empty_specific_book.bf53f95d.jpg",Q=function(e,t){return e?e.filter((function(e){return"all"===t||!!e.volumeInfo.categories&&e.volumeInfo.categories[0].toLowerCase()===t})):[]},P=function(e,t,c,a,n,o){var r,s=!1,i=t,l=function(){var t=Object(W.a)(J.a.mark((function t(c,o){var r;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=Object(z.a)(o(c,n)),!s){t.next=3;break}return t.abrupt("return",c);case 3:if(!(c.length<30)){t.next=12;break}return t.next=6,w(e,i+=30,a);case 6:if(!(r=t.sent).data.items){t.next=12;break}return s=r.data.items.length<30,t.next=11,l([].concat(Object(z.a)(c),Object(z.a)(r.data.items)),o);case 11:c=t.sent;case 12:return t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}();return function(){var t=Object(W.a)(J.a.mark((function t(u){var j,b,h,m;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(g(!0)),t.next=4,w(e,i,a);case 4:if(!(j=t.sent).data.items){t.next=13;break}if(r=[].concat(Object(z.a)(o),Object(z.a)(j.data.items)),"all"===n){t.next=11;break}return t.next=10,l(r,Q);case 10:r=t.sent;case 11:t.next=14;break;case 13:0!==o.length?r=Object(z.a)(o):(r=[],s=!0);case 14:b=r.splice(30),h=0===r.length&&s&&0===j.data.totalItems?0:j.data.totalItems,(m=r.map((function(e){return{id:(t=e).id,image:t.volumeInfo.imageLinks&&t.volumeInfo.imageLinks.thumbnail?t.volumeInfo.imageLinks.thumbnail:D,title:t.volumeInfo.title,authors:t.volumeInfo.authors?t.volumeInfo.authors:[""],categories:t.volumeInfo.categories?t.volumeInfo.categories:[""]};var t}))).length<30&&(s=!0),u(g(!1)),u(S(e,m,h,i,c)),u(f(b,i)),u(A(!(s||!h),!0)),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(0),console.log("error ",t.t0);case 27:case"end":return t.stop()}}),t,null,[[0,24]])})));return function(e){return t.apply(this,arguments)}}()},K=c(22),V=n.a.memo((function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(null),r=Object(l.a)(o,2),s=r[0],i=r[1],u=Object(b.c)((function(e){return e.books.commonSearch})),h=u.sorting,m=u.category,O=u.extraBooks,p=Object(b.b)(),d={backgroundImage:"url(".concat(N,")")},x=Object(K.f)(),k=Object(a.useCallback)((function(e){n(e.currentTarget.value)}),[]),S=Object(a.useCallback)((function(){c.trim()?(p(P(c.trim(),0,!0,h,m,O)),n(""),x.push("/common-search")):i("Title is required!")}),[p,x,c,m,O,h]),g=Object(a.useCallback)((function(e){"Enter"===e.key?c.trim()?(p(P(c.trim(),0,!0,h,m,O)),n(""),x.push("/common-search")):i("Title is required!"):null!==s&&i(null)}),[p,x,c,m,O,h,s]);return Object(I.jsxs)("div",{className:j.a.searchComponent,style:d,children:[Object(I.jsx)("h1",{children:"Search for books"}),Object(I.jsxs)("div",{className:j.a.searchContainer,children:[Object(I.jsx)(R.a,{onChange:k,value:c,onKeyPress:g,error:!!s,label:s||"Type book's title...",variant:"standard",color:"success"}),Object(I.jsx)(F.a,{onClick:S,children:Object(I.jsx)(C.a,{fontSize:"large",className:j.a.searchButton})})]}),Object(I.jsxs)("div",{className:j.a.filterContainer,children:[Object(I.jsx)(B,{}),Object(I.jsx)(v,{})]})]})})),Y=c(78),Z=c.n(Y),X=c(65),_=c.n(X),$=c(251),ee=n.a.memo((function(e){var t=e.id,c=e.image,n=e.title,o=e.authors,r=e.categories,s=!!r&&""!==r[0],i=!!o&&""!==o[0],l=Object(K.f)(),u=Object(b.b)(),j=Object(a.useCallback)((function(){var e;l.push("/specific-book"),u((e=t,function(){var t=Object(W.a)(J.a.mark((function t(c){var a,n;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(g(!0)),t.next=4,q(e);case 4:(a=t.sent).data&&(o=a.data,n={id:o.id,image:o.volumeInfo.imageLinks&&o.volumeInfo.imageLinks.small?o.volumeInfo.imageLinks.small:M,title:o.volumeInfo.title,categories:o.volumeInfo.categories?o.volumeInfo.categories:[""],authors:o.volumeInfo.authors?o.volumeInfo.authors:[""],description:o.volumeInfo.description?o.volumeInfo.description:""},c(T(n)),c(g(!1))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error ",t.t0);case 11:case"end":return t.stop()}var o}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[u,l,t]);return Object(I.jsx)($.a,{elevation:3,className:_.a.paper,children:Object(I.jsxs)("div",{className:_.a.bookCard,onClick:j,style:{padding:"20px"},children:[Object(I.jsx)("img",{src:c,alt:"book"}),Object(I.jsx)("h4",{children:n}),Object(I.jsx)("span",{className:_.a.description,children:s?"Category: ".concat(r[0]):""}),Object(I.jsx)("span",{className:_.a.description,children:i?"Authors: ".concat(o.join(", ")):""})]},t)})})),te=c.p+"static/media/loading-37.cee87e9f.gif",ce=c(116),ae=c.n(ce),ne=n.a.memo((function(){return Object(I.jsx)("div",{className:ae.a.preloader,children:Object(I.jsx)("img",{src:te,alt:""})})})),oe=n.a.memo((function(){var e=Object(b.c)((function(e){return e.books.commonSearch})),t=e.books,c=e.totalCount,n=e.isResultShown,o=e.isFetching,r=Object(a.useMemo)((function(){return t.map((function(e){return Object(I.jsx)(ee,{id:e.id,image:e.image,title:e.title,categories:e.categories,authors:e.authors})}))}),[t]);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:Z.a.searchResult,children:[Object(I.jsx)("div",{className:Z.a.totalCount,children:n?"Found ".concat(c," results"):""}),Object(I.jsx)("div",{className:Z.a.booksContainer,children:n&&r})]}),o?Object(I.jsx)(ne,{}):null]})})),re=c(117),se=c.n(re),ie=n.a.memo((function(){var e=Object(b.c)((function(e){return e.books.commonSearch})),t=e.searchStr,c=e.currentPage,n=e.sorting,o=e.category,r=e.isButtonShown,s=e.extraBooks,i=Object(b.b)(),l=Object(a.useCallback)((function(){i(P(t,c+30,!1,n,o,s))}),[i,o,c,s,t,n]);return Object(I.jsx)("div",{className:se.a.moreResults,children:r?Object(I.jsx)("button",{onClick:l,children:"Show more"}):""})})),le=c(79),ue=c.n(le),je=n.a.memo((function(){var e=Object(b.c)((function(e){return e.books.specificBook})),t=e.id,c=e.image,a=e.title,n=e.categories,o=e.authors,r=e.description,s=Object(b.c)((function(e){return e.books.commonSearch.isFetching})),i=""!==n[0],l=""!==o[0];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:ue.a.specificBook,children:[Object(I.jsx)("div",{className:ue.a.image,children:Object(I.jsx)("img",{src:c,alt:"book"})}),Object(I.jsxs)("div",{className:ue.a.body,children:[Object(I.jsx)("h3",{children:a}),Object(I.jsx)("p",{children:i?"Categories: ".concat(n.join(" / ")):""}),Object(I.jsx)("p",{children:l?"Authors: ".concat(o.join(", ")):""}),Object(I.jsx)("p",{children:r})]})]},t),s?Object(I.jsx)(ne,{}):null]})})),be=n.a.memo((function(){return Object(I.jsxs)("div",{className:i.a.App,children:[Object(I.jsx)(V,{}),Object(I.jsx)(K.a,{to:"/common-search"}),Object(I.jsx)(K.b,{path:"/common-search",children:Object(I.jsxs)("div",{className:i.a.resultsContainer,children:[Object(I.jsx)(oe,{}),Object(I.jsx)(ie,{})]})}),Object(I.jsx)(K.b,{path:"/specific-book",children:Object(I.jsx)("div",{className:i.a.specificBookContainer,children:Object(I.jsx)(je,{})})})]})})),he=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,253)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),o(e),r(e)}))},me=c(80),Oe={commonSearch:{searchStr:"",books:[],extraBooks:[],isFetching:!1,isButtonShown:!1,isResultShown:!1,totalCount:null,currentPage:0,sorting:"relevance",category:"all"},specificBook:{id:"",image:"",title:"",categories:[],authors:[],description:""}},pe=c(118),de=Object(me.b)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-BOOKS":return Object(k.a)(Object(k.a)({},e),{},{commonSearch:Object(k.a)(Object(k.a)({},e.commonSearch),{},{searchStr:t.searchStr,books:t.cleanUp?t.books:[].concat(Object(z.a)(e.commonSearch.books),Object(z.a)(t.books)),totalCount:t.totalCount,currentPage:t.currentPage})});case"SET-FETCHING":return Object(k.a)(Object(k.a)({},e),{},{commonSearch:Object(k.a)(Object(k.a)({},e.commonSearch),{},{isFetching:t.fetching})});case"SET-SORTING":return Object(k.a)(Object(k.a)({},e),{},{commonSearch:Object(k.a)(Object(k.a)({},e.commonSearch),{},{sorting:t.sorting})});case"SET-CATEGORY":return Object(k.a)(Object(k.a)({},e),{},{commonSearch:Object(k.a)(Object(k.a)({},e.commonSearch),{},{category:t.category})});case"SET-SHOWN":return Object(k.a)(Object(k.a)({},e),{},{commonSearch:Object(k.a)(Object(k.a)({},e.commonSearch),{},{isButtonShown:t.isButtonShown,isResultShown:t.isResultShown})});case"SET-EXTRA-BOOKS":return Object(k.a)(Object(k.a)({},e),{},{commonSearch:Object(k.a)(Object(k.a)({},e.commonSearch),{},{extraBooks:t.extraBooks,currentPage:t.currentPage})});case"SET-SPECIFIC-BOOK":return Object(k.a)(Object(k.a)({},e),{},{specificBook:Object(k.a)(Object(k.a)({},e.specificBook),{},{id:t.id,image:t.image,title:t.title,categories:t.categories,authors:t.authors,description:t.description})});default:return e}}}),xe=Object(me.c)(de,Object(me.a)(pe.a)),ke=c(58);r.a.render(Object(I.jsx)(ke.a,{children:Object(I.jsx)(b.a,{store:xe,children:Object(I.jsx)(be,{})})}),document.getElementById("root")),he()},64:function(e,t,c){e.exports={searchComponent:"SearchComponent_searchComponent__2caFA",searchContainer:"SearchComponent_searchContainer__O7Q10",filterContainer:"SearchComponent_filterContainer__3tjUw"}},65:function(e,t,c){e.exports={paper:"BookCard_paper__2tqye",bookCard:"BookCard_bookCard__i5epG",description:"BookCard_description__2mFW0"}},74:function(e,t,c){e.exports={resultsContainer:"App_resultsContainer__uh4o9",specificBookContainer:"App_specificBookContainer__3Howu"}},78:function(e,t,c){e.exports={searchResult:"SearchResult_searchResult__2pBgV",totalCount:"SearchResult_totalCount__2uB97",booksContainer:"SearchResult_booksContainer__3WXlp"}},79:function(e,t,c){e.exports={specificBook:"SpecificBook_specificBook__1RGQr",image:"SpecificBook_image__Ix36H",body:"SpecificBook_body__2rMlO"}},88:function(e,t,c){e.exports={categoriesFilter:"CategoriesFilter_categoriesFilter__3maDr",select:"CategoriesFilter_select__2QpRA"}},91:function(e,t,c){e.exports={sortingFilter:"SortingFilter_sortingFilter__1R1WG",select:"SortingFilter_select___PySO"}}},[[172,1,2]]]);
//# sourceMappingURL=main.da9f68fe.chunk.js.map