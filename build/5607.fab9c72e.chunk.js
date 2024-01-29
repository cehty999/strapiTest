"use strict";(self.webpackChunktest_project=self.webpackChunktest_project||[]).push([[5607],{95607:(g,d,s)=>{s.r(d),s.d(d,{LoginEE:()=>v});var t=s(74081),i=s(84366),a=s(93415),E=s(10701),P=s(32370),o=s(94050),D=s(61020),M=s(40464),l=s(19003),O=s(66333),e=s(47796),r=s(15816),h=s(97442),_=s(13576),c=s(87830),m=s(47184),n=s(364),T=s(27279),U=s(59461),W=s(71563),K=s(49204),j=s(47853),f=s(75719),u=s(74919),y=s(29206),S=s(98934),$=s(43433);const L=(0,l.default)(i.i)`
  flex: 1;
`,v=C=>{const{formatMessage:x}=(0,D.Z)(),{get:B}=(0,o.kY)(),{isLoading:A,data:R=[]}=(0,M.useQuery)(["ee","providers"],async()=>{const{data:I}=await B("/admin/providers");return I},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!A&&R.length===0?(0,t.jsx)(O.L,{...C}):(0,t.jsx)(O.L,{...C,children:(0,t.jsx)(a.x,{paddingTop:7,children:(0,t.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,t.jsxs)(E.k,{children:[(0,t.jsx)(L,{}),(0,t.jsx)(a.x,{paddingLeft:3,paddingRight:3,children:(0,t.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:x({id:"Auth.login.sso.divider"})})}),(0,t.jsx)(L,{})]}),(0,t.jsx)(e.S,{providers:R,displayAllProviders:!1})]})})})}},47796:(g,d,s)=>{s.d(d,{S:()=>O});var t=s(74081),i=s(23298),a=s(74577),E=s(2981),P=s(10701),o=s(32370),D=s(61020),M=s(47533),l=s(19003);const O=({providers:_,displayAllProviders:c})=>{const{formatMessage:m}=(0,D.Z)();return c?(0,t.jsx)(i.r,{gap:4,children:_.map(n=>(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(r,{provider:n})},n.uid))}):_.length>2&&!c?(0,t.jsxs)(i.r,{gap:4,children:[_.slice(0,2).map(n=>(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(r,{provider:n})},n.uid)),(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(E.u,{label:m({id:"global.see-more"}),children:(0,t.jsx)(h,{as:M.Link,to:"/auth/providers",children:(0,t.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,t.jsx)(e,{justifyContent:"center",children:_.map(n=>(0,t.jsx)(r,{provider:n},n.uid))})},e=(0,l.default)(P.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:_})=>_.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:_})=>_.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:_})=>_.spaces[2]};
  }
`,r=({provider:_})=>(0,t.jsx)(E.u,{label:_.displayName,children:(0,t.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${_.uid}`,children:_.icon?(0,t.jsx)("img",{src:_.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,t.jsx)(o.Z,{children:_.displayName})})}),h=l.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:_})=>_.colors.neutral150};
  border-radius: ${({theme:_})=>_.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:_})=>_.colors.neutral600};
`}}]);
