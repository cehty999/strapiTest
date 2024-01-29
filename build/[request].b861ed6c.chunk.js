"use strict";(self.webpackChunktest_project=self.webpackChunktest_project||[]).push([[6750],{23455:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(74081),i=n(27279),r=n(19003),f=n(43680),l=n(73648),c=n(55534),u=n(12416),t=n(44747),o=g=>g&&g.__esModule?g:{default:g};function v(g){if(g&&g.__esModule)return g;const N=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(g){for(const k in g)if(k!=="default"){const S=Object.getOwnPropertyDescriptor(g,k);Object.defineProperty(N,k,S.get?S:{enumerable:!0,get:()=>g[k]})}}return N.default=g,Object.freeze(N)}const $=v(i),M=o(r).default.input`
  height: ${c.getCheckboxSize};
  min-width: ${c.getCheckboxSize};
  margin: 0;
  border-radius: ${({theme:g})=>g.borderRadius};
  border: 1px solid ${({theme:g})=>g.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:g})=>g.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:g})=>g.colors.primary600};
    border: 1px solid ${({theme:g})=>g.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${l}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${f}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:g})=>g.colors.neutral200};
    border: 1px solid ${({theme:g})=>g.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:g})=>g.colors.primary600};
    border: 1px solid ${({theme:g})=>g.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:g})=>g.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:g})=>g.colors.neutral200};
      border: 1px solid ${({theme:g})=>g.colors.neutral300};
      &:after {
        background-color: ${({theme:g})=>g.colors.neutral500};
      }
    }
  }
`,H=$.forwardRef(({indeterminate:g=!1,size:N="M",name:k,value:S=!1,onValueChange:b,...y},z)=>{const I=$.useRef(null),G=u.useComposedRefs(I,z);$.useEffect(()=>{I.current&&g?I.current.indeterminate=g:I.current.indeterminate=!1},[g]);const F=()=>{b&&b(!S)};return e.jsx(t.Box,{children:e.jsx(M,{size:N,checked:S,onChange:F,type:"checkbox",ref:G,name:k,...y})})});H.displayName="BaseCheckbox",s.BaseCheckbox=H},43680:j=>{const s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";j.exports=s},73648:j=>{const s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=";j.exports=s},36741:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(23455);s.BaseCheckbox=e.BaseCheckbox},55534:(j,s)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=({size:e})=>e==="M"?"18px":"20px";s.getCheckboxSize=n},44747:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(19003),i=n(83315),r=n(10547),l=(t=>t&&t.__esModule?t:{default:t})(e),c={color:!0,cursor:!0,height:!0,width:!0},u=l.default.div.withConfig({shouldForwardProp:(t,o)=>!c[t]&&o(t)})`
  // Font
  font-size: ${({fontSize:t,theme:o})=>r.extractStyleFromTheme(o.fontSizes,t,t)};

  // Colors
  background: ${({theme:t,background:o})=>r.extractStyleFromTheme(t.colors,o,o)};
  color: ${({theme:t,color:o})=>r.extractStyleFromTheme(t.colors,o,void 0)};

  // Spaces
  ${({theme:t,padding:o})=>i("padding",o,t)}
  ${({theme:t,paddingTop:o})=>i("padding-top",o,t)}
  ${({theme:t,paddingRight:o})=>i("padding-right",o,t)}
  ${({theme:t,paddingBottom:o})=>i("padding-bottom",o,t)}
  ${({theme:t,paddingLeft:o})=>i("padding-left",o,t)}
  ${({theme:t,marginLeft:o})=>i("margin-left",o,t)}
  ${({theme:t,marginRight:o})=>i("margin-right",o,t)}
  ${({theme:t,marginTop:o})=>i("margin-top",o,t)}
  ${({theme:t,marginBottom:o})=>i("margin-bottom",o,t)}

  // Responsive hiding
  ${({theme:t,hiddenS:o})=>o?`${t.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:t,hiddenXS:o})=>o?`${t.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:t,hasRadius:o,borderRadius:v})=>o?t.borderRadius:v};
  border-style: ${({borderStyle:t})=>t};
  border-width: ${({borderWidth:t})=>t};
  border-color: ${({borderColor:t,theme:o})=>r.extractStyleFromTheme(o.colors,t,void 0)};
  border: ${({theme:t,borderColor:o,borderStyle:v,borderWidth:$})=>{if(o&&!v&&typeof $>"u")return`1px solid ${t.colors[o]}`}};

  // Shadows
  box-shadow: ${({theme:t,shadow:o})=>r.extractStyleFromTheme(t.shadows,o,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:t})=>t};
  &:hover {
    ${({_hover:t,theme:o})=>t?t(o):void 0}
  }

  // Display
  display: ${({display:t})=>t};

  // Position
  position: ${({position:t})=>t};
  left: ${({left:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};
  right: ${({right:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};
  top: ${({top:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};
  bottom: ${({bottom:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};
  z-index: ${({zIndex:t})=>t};
  overflow: ${({overflow:t})=>t};

  // Size
  width: ${({width:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};
  max-width: ${({maxWidth:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};
  min-width: ${({minWidth:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};
  height: ${({height:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};
  max-height: ${({maxHeight:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};
  min-height: ${({minHeight:t,theme:o})=>r.extractStyleFromTheme(o.spaces,t,t)};

  // Animation
  transition: ${({transition:t})=>t};
  transform: ${({transform:t})=>t};
  animation: ${({animation:t})=>t};

  //Flexbox children props
  flex-shrink: ${({shrink:t})=>t};
  flex-grow: ${({grow:t})=>t};
  flex-basis: ${({basis:t})=>t};
  flex: ${({flex:t})=>t};

  // Text
  text-align: ${({textAlign:t})=>t};
  text-transform: ${({textTransform:t})=>t};
  line-height: ${({theme:t,lineHeight:o})=>r.extractStyleFromTheme(t.lineHeights,o,o)};

  // Cursor
  cursor: ${({cursor:t})=>t};
`;s.Box=u},25074:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(44747);s.Box=e.Box},35725:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(19003),i=n(83315),r=n(44747),l=(t=>t&&t.__esModule?t:{default:t})(e),c={direction:!0},u=l.default(r.Box).withConfig({shouldForwardProp:(t,o)=>!c[t]&&o(t)})`
  align-items: ${({alignItems:t="center"})=>t};
  display: ${({display:t="flex",inline:o})=>o?"inline-flex":t};
  flex-direction: ${({direction:t="row"})=>t};
  flex-shrink: ${({shrink:t})=>t};
  flex-wrap: ${({wrap:t})=>t};
  ${({gap:t,theme:o})=>i("gap",t,o)};
  justify-content: ${({justifyContent:t})=>t};
`;s.Flex=u},44076:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(74081),i=n(19003),r=n(83315),f=n(44747),u=(o=>o&&o.__esModule?o:{default:o})(i).default(f.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:o})=>o}, 1fr);
  ${({theme:o,gap:v})=>r("gap",v,o)}
`,t=o=>{const{gap:v="0",gridCols:$=12,...w}=o;return e.jsx(u,{gap:v,gridCols:$,...w})};s.Grid=t},3528:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(19003),i=n(44747),l=(c=>c&&c.__esModule?c:{default:c})(e).default(i.Box)`
  grid-column: span ${({col:c})=>c};
  max-width: 100%;

  ${({theme:c})=>c.mediaQueries.tablet} {
    grid-column: span ${({s:c})=>c};
  }

  ${({theme:c})=>c.mediaQueries.mobile} {
    grid-column: span ${({xs:c})=>c};
  }
`;s.GridItem=l},91594:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(74081),i=n(35725),r=({startActions:f,endActions:l})=>!f&&!l?null:e.jsxs(i.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[e.jsx(i.Flex,{gap:2,wrap:"wrap",children:f}),e.jsx(i.Flex,{gap:2,shrink:0,wrap:"wrap",children:l})]});s.ActionLayout=r},3823:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(74081),i=n(44747),r=({children:f})=>e.jsx(i.Box,{paddingLeft:10,paddingRight:10,children:f});s.ContentLayout=r},20285:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(19003),f=(l=>l&&l.__esModule?l:{default:l})(e).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:l})=>l.spaces[4]};
`;s.GridLayout=f},32213:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(74081),i=n(27279),r=n(19003),f=n(43809),l=n(29381),c=n(44747),u=n(35725),t=n(11880),o=g=>g&&g.__esModule?g:{default:g},v=o(i),$=o(r),w=g=>{const N=i.useRef(null),[k,S]=i.useState(null),[b,y]=f.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return l.useResizeObserver(b,()=>{b.current&&S(b.current.getBoundingClientRect())}),i.useEffect(()=>{N.current&&S(N.current.getBoundingClientRect())},[N]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:k?.height},ref:b,children:y&&e.jsx(H,{ref:N,...g})}),!y&&e.jsx(H,{...g,sticky:!0,width:k?.width})]})};w.displayName="HeaderLayout";const M=$.default(c.Box)`
  width: ${({width:g})=>g?`${g/16}rem`:void 0};
  z-index: ${({theme:g})=>g.zIndices[1]};
`,H=v.default.forwardRef(({navigationAction:g,primaryAction:N,secondaryAction:k,subtitle:S,title:b,sticky:y,width:z,...I},G)=>{const F=typeof S=="string";return y?e.jsx(M,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:z,"data-strapi-header-sticky":!0,children:e.jsxs(u.Flex,{justifyContent:"space-between",children:[e.jsxs(u.Flex,{children:[g&&e.jsx(c.Box,{paddingRight:3,children:g}),e.jsxs(c.Box,{children:[e.jsx(t.Typography,{variant:"beta",as:"h1",...I,children:b}),F?e.jsx(t.Typography,{variant:"pi",textColor:"neutral600",children:S}):S]}),k?e.jsx(c.Box,{paddingLeft:4,children:k}):null]}),e.jsx(u.Flex,{children:N?e.jsx(c.Box,{paddingLeft:2,children:N}):void 0})]})}):e.jsxs(c.Box,{ref:G,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:g?6:8,background:"neutral100","data-strapi-header":!0,children:[g?e.jsx(c.Box,{paddingBottom:2,children:g}):null,e.jsxs(u.Flex,{justifyContent:"space-between",children:[e.jsxs(u.Flex,{minWidth:0,children:[e.jsx(t.Typography,{as:"h1",variant:"alpha",...I,children:b}),k?e.jsx(c.Box,{paddingLeft:4,children:k}):null]}),N]}),F?e.jsx(t.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:S}):S]})});s.BaseHeaderLayout=H,s.HeaderLayout=w},65030:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(74081),i=n(19003),r=n(44747),l=(o=>o&&o.__esModule?o:{default:o})(i),c=l.default(r.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:o})=>o?"auto 1fr":"1fr"};
`,u=l.default(r.Box)`
  overflow-x: hidden;
`,t=({sideNav:o,children:v})=>e.jsxs(c,{hasSideNav:Boolean(o),children:[o,e.jsx(u,{paddingBottom:10,children:v})]});s.Layout=t},90493:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(74081),i=n(44076),r=n(3528),f=n(44747),l=({startCol:c,endCol:u})=>e.jsxs(i.Grid,{gap:4,children:[e.jsx(r.GridItem,{col:9,s:12,children:e.jsx(f.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:c})}),e.jsx(r.GridItem,{col:3,s:12,children:e.jsx(f.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:u})})]});s.TwoColsLayout=l},94305:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(65030),i=n(91594),r=n(3823),f=n(32213),l=n(90493),c=n(20285);s.Layout=e.Layout,s.ActionLayout=i.ActionLayout,s.ContentLayout=r.ContentLayout,s.BaseHeaderLayout=f.BaseHeaderLayout,s.HeaderLayout=f.HeaderLayout,s.TwoColsLayout=l.TwoColsLayout,s.GridLayout=c.GridLayout},12219:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(74081),i=n(27279),r=n(8876),f=n(44747),l=n(35725);function c(o){if(o&&o.__esModule)return o;const v=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const $ in o)if($!=="default"){const w=Object.getOwnPropertyDescriptor(o,$);Object.defineProperty(v,$,w.get?w:{enumerable:!0,get:()=>o[$]})}}return v.default=o,Object.freeze(v)}const u=c(i),t=({children:o,label:v="Pagination",activePage:$,pageCount:w})=>{const M=u.useMemo(()=>({activePage:$,pageCount:w}),[$,w]);return e.jsx(r.PaginationContext.Provider,{value:M,children:e.jsx(f.Box,{"aria-label":v,as:"nav",children:e.jsx(l.Flex,{as:"ol",gap:1,children:u.Children.map(o,(H,g)=>e.jsx("li",{children:H},g))})})})};s.Pagination=t},8876:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(27279),i=e.createContext({activePage:1,pageCount:1}),r=()=>e.useContext(i);s.PaginationContext=i,s.usePagination=r},80247:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(74081),i=n(71434),r=n(47533),f=n(19003),l=n(8876),c=n(5529),u=n(70321),t=n(11880),o=n(44747),$=(y=>y&&y.__esModule?y:{default:y})(f),w={active:!0},M=$.default(r.NavLink).withConfig({shouldForwardProp:(y,z)=>!w[y]&&z(y)})`
  padding: ${({theme:y})=>y.spaces[3]};
  border-radius: ${({theme:y})=>y.borderRadius};
  box-shadow: ${({active:y,theme:z})=>y?z.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${c.buttonFocusStyle}
`,H=$.default(M)`
  color: ${({theme:y,active:z})=>z?y.colors.primary700:y.colors.neutral800};
  background: ${({theme:y,active:z})=>z?y.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:y})=>y.shadows.filterShadow};
  }
`,g=$.default(M)`
  font-size: ${11/16}rem;

  svg path {
    fill: ${y=>y["aria-disabled"]?y.theme.colors.neutral300:y.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${y=>y["aria-disabled"]?y.theme.colors.neutral300:y.theme.colors.neutral700};
    }
  }

  ${y=>y["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`,N=({children:y,to:z,...I})=>{const{activePage:G}=l.usePagination(),F=G===1;return e.jsxs(g,{to:F?"#":z,"aria-disabled":F,tabIndex:F?-1:void 0,...I,children:[e.jsx(u.VisuallyHidden,{children:y}),e.jsx(i.ChevronLeft,{"aria-hidden":!0})]})};N.displayName="PreviousLink";const k=({children:y,to:z,...I})=>{const{activePage:G,pageCount:F}=l.usePagination(),q=G===F;return e.jsxs(g,{to:q?"#":z,"aria-disabled":q,tabIndex:q?-1:void 0,...I,children:[e.jsx(u.VisuallyHidden,{children:y}),e.jsx(i.ChevronRight,{"aria-hidden":!0})]})};k.displayName="NextLink";const S=({number:y,children:z,...I})=>{const{activePage:G}=l.usePagination(),F=G===y;return e.jsxs(H,{...I,active:F,children:[e.jsx(u.VisuallyHidden,{children:z}),e.jsx(t.Typography,{"aria-hidden":!0,fontWeight:F?"bold":void 0,lineHeight:"revert",variant:"pi",children:y})]})};S.displayName="PageLink";const b=({children:y,...z})=>e.jsxs(o.Box,{...z,children:[e.jsx(u.VisuallyHidden,{children:y}),e.jsx(t.Typography,{"aria-hidden":!0,lineHeight:"revert",textColor:"neutral800",variant:"pi",children:"\u2026"})]});s.Dots=b,s.NextLink=k,s.PageLink=S,s.PreviousLink=N},28211:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(12219),i=n(80247);s.Pagination=e.Pagination,s.Dots=i.Dots,s.NextLink=i.NextLink,s.PageLink=i.PageLink,s.PreviousLink=i.PreviousLink},11880:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(19003),i=n(83415),r=n(10547),l=(t=>t&&t.__esModule?t:{default:t})(e),c={fontSize:!0,fontWeight:!0},u=l.default.span.withConfig({shouldForwardProp:(t,o)=>!c[t]&&o(t)})`
  ${i.variantStyle}
  ${i.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:t,fontWeight:o})=>r.extractStyleFromTheme(t.fontWeights,o,void 0)};
  font-size: ${({theme:t,fontSize:o})=>r.extractStyleFromTheme(t.fontSizes,o,void 0)};
  line-height: ${({theme:t,lineHeight:o})=>r.extractStyleFromTheme(t.lineHeights,o,o)};
  color: ${({theme:t,textColor:o})=>t.colors[o||"neutral800"]};
  text-align: ${({textAlign:t})=>t};
  text-decoration: ${({textDecoration:t})=>t};
  text-transform: ${({textTransform:t})=>t};
`;s.Typography=u},14714:(j,s)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n="alpha",e="beta",i="delta",r="epsilon",f="omega",l="pi",c="sigma",u=[n,e,i,r,f,l,c];s.ALPHA=n,s.BETA=e,s.DELTA=i,s.EPSILON=r,s.OMEGA=f,s.PI=l,s.SIGMA=c,s.TEXT_VARIANTS=u},50568:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(11880);s.Typography=e.Typography},83415:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(14714),i=({ellipsis:f=!1})=>f&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,r=({variant:f=e.OMEGA,theme:l})=>{switch(f){case e.ALPHA:return`
        font-weight: ${l.fontWeights.bold};
        font-size: ${l.fontSizes[5]};
        line-height: ${l.lineHeights[2]};
      `;case e.BETA:return`
        font-weight: ${l.fontWeights.bold};
        font-size: ${l.fontSizes[4]};
        line-height: ${l.lineHeights[1]};
      `;case e.DELTA:return`
        font-weight: ${l.fontWeights.semiBold};
        font-size: ${l.fontSizes[3]};
        line-height: ${l.lineHeights[2]};
      `;case e.EPSILON:return`
        font-size: ${l.fontSizes[3]};
        line-height: ${l.lineHeights[6]};
      `;case e.OMEGA:return`
        font-size: ${l.fontSizes[2]};
        line-height: ${l.lineHeights[4]};
      `;case e.PI:return`
        font-size: ${l.fontSizes[1]};
        line-height: ${l.lineHeights[3]};
      `;case e.SIGMA:return`
        font-weight: ${l.fontWeights.bold};
        font-size: ${l.fontSizes[0]};
        line-height: ${l.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${l.fontSizes[2]};
      `}};s.ellipsisStyle=i,s.variantStyle=r},70321:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(19003),f=(l=>l&&l.__esModule?l:{default:l})(e).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;s.VisuallyHidden=f},83315:j=>{const s=(n,e,i)=>{if(!e)return;if(typeof e=="object")return(Array.isArray(e)?e:[e?.desktop,e?.tablet,e?.mobile]).reduce((c,u,t)=>{if(u)switch(t){case 0:return`${c}${n}: ${i.spaces[u]};`;case 1:return`${c}${i.mediaQueries.tablet}{${n}: ${i.spaces[u]};}`;case 2:return`${c}${i.mediaQueries.mobile}{${n}: ${i.spaces[u]};}`;default:return c}return c},"");const r=i.spaces[e]??e;return`${n}: ${r};`};j.exports=s},95193:(j,s)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});function n(i,r){return typeof i=="string"?!1:r in i}function e(i){return i&&typeof i=="object"&&!Array.isArray(i)}s.isKeyOf=n,s.isObject=e},10547:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(95193);function i(r,f,l){return f&&e.isKeyOf(r,f)?r[f]:l}s.extractStyleFromTheme=i},12416:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(27279);function i(u){if(u&&u.__esModule)return u;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(u){for(const o in u)if(o!=="default"){const v=Object.getOwnPropertyDescriptor(u,o);Object.defineProperty(t,o,v.get?v:{enumerable:!0,get:()=>u[o]})}}return t.default=u,Object.freeze(t)}const r=i(e);function f(u,t){typeof u=="function"?u(t):u!=null&&(u.current=t)}function l(...u){return t=>u.forEach(o=>f(o,t))}function c(...u){return r.useCallback(l(...u),u)}s.composeRefs=l,s.useComposedRefs=c},43809:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(27279),i=r=>{const f=e.useRef(null),[l,c]=e.useState(!0),u=([t])=>{c(t.isIntersecting)};return e.useEffect(()=>{const t=f.current,o=new IntersectionObserver(u,r);return t&&o.observe(f.current),()=>{t&&o.disconnect()}},[f,r]),[f,l]};s.useElementOnScreen=i},29381:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(27279),i=n(81906),r=(f,l)=>{const c=i.useCallbackRef(l);e.useLayoutEffect(()=>{const u=new ResizeObserver(c);return Array.isArray(f)?f.forEach(t=>{t.current&&u.observe(t.current)}):f.current&&u.observe(f.current),()=>{u.disconnect()}},[f,c])};s.useResizeObserver=r},5529:(j,s,n)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=n(19003),i=l=>({theme:c,size:u})=>c.sizes[l][u],r=(l="&")=>({theme:c,hasError:u=!1})=>e.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${l}:focus-within {
      border: 1px solid ${u?c.colors.danger600:c.colors.primary600};
      box-shadow: ${u?c.colors.danger600:c.colors.primary600} 0px 0px 0px 2px;
    }
  `,f=({theme:l})=>e.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${l.colors.primary600};
    }
  }
`;s.buttonFocusStyle=f,s.getThemeSize=i,s.inputFocusStyle=r},68027:(j,s,n)=>{n.r(s),n.d(s,{default:()=>Oe});var e=n(74081),i=n(27279),r=n(51447),f=n(29206);const c=a=>{const{search:h}=(0,r.TH)(),{push:d}=(0,r.k6)(),p=(0,i.useMemo)(()=>{const m=h.substring(1);return h?(0,f.parse)(m):a},[h,a]),x=(0,i.useCallback)((m,L="push")=>{let T={...p};L==="remove"?Object.keys(m).forEach(C=>{delete T[C]}):T={...p,...m},d({search:(0,f.stringify)(T,{encode:!1})})},[d,p]);return[{query:p,rawQuery:h},x]};var u=n(27625),t=n(6191);const o=()=>(0,e.jsxs)("svg",{width:"159",height:"88",viewBox:"0 0 159 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M134.933 17.417C137.768 17.417 140.067 19.7153 140.067 22.5503C140.067 25.3854 137.768 27.6837 134.933 27.6837H105.6C108.435 27.6837 110.733 29.9819 110.733 32.817C110.733 35.6521 108.435 37.9503 105.6 37.9503H121.733C124.568 37.9503 126.867 40.2486 126.867 43.0837C126.867 45.9187 124.568 48.217 121.733 48.217H114.272C110.698 48.217 107.8 50.5153 107.8 53.3503C107.8 55.2404 109.267 56.9515 112.2 58.4837C115.035 58.4837 117.333 60.7819 117.333 63.617C117.333 66.4521 115.035 68.7503 112.2 68.7503H51.3333C48.4982 68.7503 46.2 66.4521 46.2 63.617C46.2 60.7819 48.4982 58.4837 51.3333 58.4837H22.7333C19.8982 58.4837 17.6 56.1854 17.6 53.3503C17.6 50.5153 19.8982 48.217 22.7333 48.217H52.0666C54.9017 48.217 57.2 45.9187 57.2 43.0837C57.2 40.2486 54.9017 37.9503 52.0666 37.9503H33.7333C30.8982 37.9503 28.6 35.6521 28.6 32.817C28.6 29.9819 30.8982 27.6837 33.7333 27.6837H63.0666C60.2316 27.6837 57.9333 25.3854 57.9333 22.5503C57.9333 19.7153 60.2316 17.417 63.0666 17.417H134.933ZM134.933 37.9503C137.768 37.9503 140.067 40.2486 140.067 43.0837C140.067 45.9187 137.768 48.217 134.933 48.217C132.098 48.217 129.8 45.9187 129.8 43.0837C129.8 40.2486 132.098 37.9503 134.933 37.9503Z",fill:"#DBDBFA"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834ZM55.6176 21.208L58.9814 20.8306Z",fill:"white"}),(0,e.jsx)("path",{d:"M55.6176 21.208L58.9814 20.8306M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834Z",stroke:"#7E7BF6",strokeWidth:"2.5"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M93.9695 19.8144L100.144 64.9025L100.699 69.4258C100.878 70.8831 99.8559 72.2077 98.416 72.3845L59.9585 77.1065C58.5185 77.2833 57.2062 76.2453 57.0272 74.7881L51.0506 26.112C50.9519 25.308 51.5236 24.5762 52.3276 24.4775L57.0851 23.8934",fill:"#F0F0FF"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M97.701 7.33301H64.2927C63.7358 7.33301 63.2316 7.55873 62.8667 7.92368C62.5017 8.28862 62.276 8.79279 62.276 9.34967V65.083C62.276 65.6399 62.5017 66.1441 62.8667 66.509C63.2316 66.874 63.7358 67.0997 64.2927 67.0997H107.559C108.116 67.0997 108.62 66.874 108.985 66.509C109.35 66.1441 109.576 65.6399 109.576 65.083V19.202C109.576 18.6669 109.363 18.1537 108.985 17.7755L99.1265 7.92324C98.7484 7.54531 98.2356 7.33301 97.701 7.33301Z",fill:"white",stroke:"#7F7CFA",strokeWidth:"2.5"}),(0,e.jsx)("path",{d:"M98.026 8.17871V16.6833C98.026 17.8983 99.011 18.8833 100.226 18.8833H106.044",stroke:"#807EFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M70.1594 56.2838H89.2261M70.1594 18.8838H89.2261H70.1594ZM70.1594 27.6838H101.693H70.1594ZM70.1594 37.2171H101.693H70.1594ZM70.1594 46.7505H101.693H70.1594Z",stroke:"#817FFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]});var v=n(61020),$=n(32090);const M=a=>`${$.Z}.${a}`;function H(){const{formatMessage:a}=(0,v.Z)();return(0,e.jsx)("div",{children:(0,e.jsx)(t.x,{shadow:null,icon:(0,e.jsx)(o,{}),content:a({id:M("empty.state"),defaultMessage:"You haven't sent any notification yet"})})})}var g=n(71563),N=n(47853),k=n(94305),S=n(93415),b=n(21395),y=n(26322),z=n(1821),I=n(2878),G=n(77804),F=n(48102),q=n(7559),ie=n(23298),_=n(74577),ee=n(63738);function te({type:a="Content type",options:h=[],required:d,value:p,manageSelected:x,placeholder:m,loading:L}){const{formatMessage:T}=(0,v.Z)();return(0,e.jsxs)("div",{children:[(0,e.jsx)(ee.q4,{label:T({id:M(a),defaultMessage:a==="Entry"?"Entry":"Content type"}),required:d,placeholder:m,value:p,onChange:x,disabled:h.length===0,children:h.map(C=>(0,e.jsx)(ee.ag,{value:C.value,children:C.label},C.value))}),L&&(0,e.jsx)("div",{style:{paddingLeft:4,paddingTop:8},children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"neutral500",children:T({id:M(L),defaultMessage:"Loading content..."})})})]})}function ae({formik:a,label:h}){const{values:d}=a,{entryId:p}=d,{formatMessage:x}=(0,v.Z)(),m=()=>{a.setFieldValue("title",h)},L=()=>{a.setFieldValue("subtitle",h)};return!p||p===""?null:(0,e.jsxs)("div",{style:{color:"#4A45FF",marginTop:8,marginLeft:8,display:"flex"},children:[(0,e.jsx)("div",{style:{marginRight:8,cursor:"pointer"},onClick:m,children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"#4A45FF",children:x({id:M("make.title"),defaultMessage:"Make it the title "})})}),(0,e.jsx)(b.Z,{variant:"pi",textColor:"#4A45FF",children:"-"}),(0,e.jsx)("div",{style:{marginLeft:8,cursor:"pointer"},onClick:L,children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"#4A45FF",children:x({id:M("make.subtitle"),defaultMessage:" Make it the subtitle"})})})]})}const le=a=>{const h=[];return!a||a.length===0||a.forEach(d=>{h.push({label:d.globalId,value:d.uid})}),h};function re(a){let h=[];if(a)Array.isArray(a)?h=a.map(d=>({value:d.id,label:d.title||"No title"})):typeof a=="object"?"title"in a?h.push({value:a.id,label:a.title}):console.error("The object does not have a title property"):console.error("Response data is neither an array nor an object");else return h;return h}function de(a){const{formik:h}=a,[d,p]=(0,i.useState)([]),[x,m]=(0,i.useState)([]),[L,T]=(0,i.useState)(!1),{get:C}=(0,u.useFetchClient)();async function Z(){T(!0);const O=await C("/expo-notifications/get-content-types"),R=le(O.data);p(R),R.length>0&&(h.setFieldValue("contentType",R[0].value),E(R[0].value))}async function E(O){const R=await C(`/expo-notifications/get-entries/${O}`),W=re(R.data);m(W),W.length>0&&h.setFieldValue("entryId",W[0].value),T(!1)}(0,i.useEffect)(()=>{Z()},[]);const Q=O=>{h.setFieldValue("contentType",O),E(O)},Y=O=>{h.setFieldValue("entryId",O)};function V(O){const R=x.find(W=>W.value==O);return R?R.label:""}return(0,e.jsx)("div",{children:(0,e.jsxs)(ie.r,{gap:5,children:[(0,e.jsx)(_.P,{col:3,children:(0,e.jsx)(te,{type:"Content type",options:d,manageSelected:Q,value:h.values.contentType,placeholder:"Select a content type",loading:L})}),(0,e.jsxs)(_.P,{col:9,children:[(0,e.jsx)(te,{type:"Entry",options:x,manageSelected:Y,value:h.values.entryId,placeholder:"Select an entry"}),(0,e.jsx)(ae,{formik:h,label:V(h.values.entryId)})]})]})})}function ce(a){const{formik:h}=a,[d,p]=(0,i.useState)(!1),{formatMessage:x}=(0,v.Z)(),m=()=>{h.setFieldValue("contentType",""),h.setFieldValue("entryId",""),p(!1)},L=()=>{p(!0)};return d?(0,e.jsxs)("div",{children:[(0,e.jsx)(S.x,{style:{marginBottom:20},background:"neutral100",padding:"4",children:(0,e.jsx)(de,{...a})}),(0,e.jsx)("div",{style:{cursor:"pointer",color:"#4A45FF",maxWidth:150},onClick:m,children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"#4A45FF",children:x({id:M("detach.entry"),defaultMessage:"Remove attachment"})})})]}):(0,e.jsx)(S.x,{background:"neutral100",padding:"6",children:(0,e.jsxs)("div",{style:{cursor:"pointer",color:"#4A45FF",display:"flex"},onClick:L,children:[(0,e.jsx)(q.Z,{width:20,height:20,color:"neutral600"}),(0,e.jsx)("div",{style:{marginLeft:8},children:(0,e.jsx)(b.Z,{variant:"omega",textColor:"neutral600",children:x({id:M("attach.entry"),defaultMessage:"Attach an entry"})})})]})})}function ue(a){const{formik:h,sendTest:d,sendForReal:p,testToken:x}=a,{formatMessage:m}=(0,v.Z)();return(0,e.jsx)("div",{style:{height:450},children:(0,e.jsxs)(S.x,{padding:4,children:[(0,e.jsx)(S.x,{paddingTop:2,paddingBottom:4,children:(0,e.jsx)(b.Z,{variant:"beta",children:m({id:M("title.new"),defaultMessage:"New notification"})})}),(0,e.jsx)("form",{children:(0,e.jsxs)("div",{style:{height:300,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,e.jsxs)(y.K,{spacing:4,children:[(0,e.jsxs)(z.g,{name:"title",children:[(0,e.jsx)(I.Q,{children:m({id:M("title"),defaultMessage:"Title"})}),(0,e.jsx)(G._,{type:"text",placeholder:m({id:M("title.placeholder"),defaultMessage:"Chose a title"}),onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.title})]}),(0,e.jsxs)(z.g,{name:"subtitle",children:[(0,e.jsx)(I.Q,{children:m({id:M("subtitle"),defaultMessage:"Subtitle"})}),(0,e.jsx)(G._,{type:"text",placeholder:m({id:M("subtitle.placeholder"),defaultMessage:"Chose a subtitle"}),onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.subtitle})]}),(0,e.jsx)(ce,{...a})]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:24,marginBottom:14},children:[x&&(0,e.jsx)(F.z,{variant:"secondary",type:"submit",onClick:d,children:m({id:M("send.test"),defaultMessage:"Send a test"})}),(0,e.jsx)("div",{style:{marginLeft:8},children:(0,e.jsx)(F.z,{type:"submit",onClick:p,children:m({id:M("send.real"),defaultMessage:"Send"})})})]})]})})]})})}var ge=n(82284),he=n.n(ge),fe=n(77970),ne=n(84366);const ye={weekday:"short",year:"numeric",month:"long",day:"numeric"};function pe(a){if(!a)return null;const h=localStorage.getItem("strapi-admin-language")??"en-US";try{return new Date(a).toLocaleDateString(h,ye)}catch(d){return console.log(d),null}}function xe({item:a}){const{title:h,subtitle:d,createdAt:p}=a,x=pe(p);return(0,e.jsxs)(S.x,{paddingBottom:4,children:[(0,e.jsx)(b.Z,{variant:"pi",children:x}),(0,e.jsx)("br",{}),(0,e.jsx)(b.Z,{variant:"epsilon",children:h}),(0,e.jsx)("br",{}),(0,e.jsx)("div",{style:{color:"#B1B1C3"},children:(0,e.jsx)(b.Z,{variant:"omega",textColor:"textColor",children:d})})]})}var B=n(28211),me=n(70627),oe=n.n(me),J=n(47533);const se=({pagination:{pageCount:a=1}})=>{const[{query:h}]=c(),d=parseInt(h?.page||"1",10),{pathname:p}=(0,r.TH)(),{formatMessage:x}=(0,v.Z)(),m=A=>(0,f.stringify)({...h,page:A},{encode:!1}),L=m(d+(a>1?1:0)),T=m(d-1),C=[(0,e.jsx)(B.PageLink,{as:J.NavLink,number:1,to:`${p}?${m(1)}`,children:x({id:"components.pagination.go-to",defaultMessage:"Go to page {page}"},{page:1})},1)];if(a<=4){const A=Array.from({length:a}).map((P,U)=>U+1).map(P=>(0,e.jsx)(B.PageLink,{as:J.NavLink,number:P,to:`${p}?${m(P)}`,children:x({id:"components.pagination.go-to",defaultMessage:"Go to page {page}"},{page:P})},P));return(0,e.jsxs)(B.Pagination,{activePage:d,pageCount:a,children:[(0,e.jsx)(B.PreviousLink,{as:J.NavLink,to:`${p}?${T}`,children:x({id:"components.pagination.go-to-previous",defaultMessage:"Go to previous page"})}),A,(0,e.jsx)(B.NextLink,{as:J.NavLink,to:`${p}?${L}`,children:x({id:"components.pagination.go-to-next",defaultMessage:"Go to next page"})})]})}let Z=[],E=[],Q=[];const Y=[];a>1&&E.push((0,e.jsx)(B.PageLink,{as:J.NavLink,number:a,to:`${p}?${m(a)}`,children:x({id:"components.pagination.go-to",defaultMessage:"Go to page {page}"},{page:a})},a)),d===1&&a>=3&&(Z=[2]),d===2&&a>=3&&(a===5?Z=[2,3,4]:a===3?Z=[2]:Z=[2,3]),d===4&&a>=3&&(Z=[2]),d===a&&a>=3&&(Q=[a-1]),d===a-2&&a>3&&(Q=[d+1,d,d-1]),d===a-3&&a>3&&d>5&&(Q=[d+2,d+1,d,d-1]),d===a-1&&a>3&&(Q=[d,d-1]),Q.forEach(A=>{E.unshift((0,e.jsxs)(B.PageLink,{as:J.NavLink,number:A,to:`${p}?${m(A)}`,children:["Go to page ",A]},A))}),Z.forEach(A=>{C.push((0,e.jsx)(B.PageLink,{as:J.NavLink,number:A,to:`${p}?${m(A)}`,children:x({id:"components.pagination.go-to",defaultMessage:"Go to page {page}"},{page:A})},A))}),![1,2].includes(d)&&d<=a-3&&C.length+E.length<6&&[d-1,d,d+1].forEach(P=>{Y.push((0,e.jsx)(B.PageLink,{as:J.NavLink,number:P,to:`${p}?${m(P)}`,children:x({id:"components.pagination.go-to",defaultMessage:"Go to page {page}"},{page:P})},P))});const V=a>5||a===5&&(d===1||d===5),O=Y.length>2&&d>4&&a>5,R=O?a-d-1:a-C.length-E.length,W=O?a-C.length-E.length:a-d-1;return(0,e.jsxs)(B.Pagination,{activePage:d,pageCount:a,children:[(0,e.jsx)(B.PreviousLink,{as:J.NavLink,to:`${p}?${T}`,children:x({id:"components.pagination.go-to-previous",defaultMessage:"Go to previous page"})}),C,O&&(0,e.jsx)(B.Dots,{children:x({id:"components.pagination.remaining-links",defaultMessage:"And {number} other links"},{number:R})}),Y,V&&(0,e.jsx)(B.Dots,{children:x({id:"components.pagination.remaining-links",defaultMessage:"And {number} other links"},{number:W})}),E,(0,e.jsx)(B.NextLink,{as:J.NavLink,to:`${p}?${L}`,children:x({id:"components.pagination.go-to-next",defaultMessage:"Go to next page"})})]})};se.propTypes={pagination:oe().shape({pageCount:oe().number.isRequired}).isRequired};const je=se;function ve(a,h){const d=a-1;return parseInt(d/h)+1}function Me({notifications:a,isLoading:h,formatMessage:d}){const p=he().orderBy(a,["createdAt"],["desc"]);return h?(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:100},children:(0,e.jsx)(fe.a,{children:d({id:M("loading"),defaultMessage:"Loading content..."})})}):!a||!a.length||a.length===0?(0,e.jsx)(t.x,{shadow:null,icon:(0,e.jsx)(o,{}),content:d({id:M("empty.state"),defaultMessage:"You haven't sent any notification yet"})}):(0,e.jsx)("div",{children:p.map(x=>(0,e.jsx)("div",{children:(0,e.jsxs)(S.x,{paddingTop:3,paddingBottom:3,children:[(0,e.jsx)(xe,{item:x}),(0,e.jsx)(ne.i,{})]})},x.id))})}function Se({notifications:a,count:h,isLoading:d}){const{formatMessage:p}=(0,v.Z)(),x=ve(h,10);return(0,e.jsx)(S.x,{style:{backgroundColor:"white"},children:(0,e.jsxs)(S.x,{paddingTop:6,paddingBottom:6,paddingLeft:4,paddingRight:4,children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsx)(b.Z,{variant:"beta",children:p({id:M("title.sent"),defaultMessage:"Sent notifications"})}),(0,e.jsx)(je,{pagination:{pageCount:x}})]}),(0,e.jsx)(ne.i,{unsetMargin:!1}),(0,e.jsx)(Me,{notifications:a,isLoading:d,formatMessage:p})]})})}var be=n(25074),Le=n(36741),Te=n(50568);function $e({item:a,tokens:h,removeToken:d,addToken:p}){const{label:x,value:m}=a,L=()=>h.includes(m),T=()=>{L()?d(m):p(m)};return(0,e.jsx)(be.Box,{paddingBottom:2,children:(0,e.jsxs)("div",{style:{display:"flex"},children:[(0,e.jsx)(Le.BaseCheckbox,{"aria-label":"Simple checkbox",name:"default",onValueChange:T,value:!!L()}),(0,e.jsx)("div",{style:{marginLeft:6},children:(0,e.jsx)("div",{style:{fontWeight:L()?"700":"400"},children:(0,e.jsx)(Te.Typography,{variant:"omega",children:x})})})]})})}function Ce({receivers:a,tokens:h,removeAll:d,addAll:p,addToken:x,removeToken:m}){const{formatMessage:L}=(0,v.Z)();return(0,e.jsx)("div",{style:{height:450},children:(0,e.jsxs)(S.x,{padding:6,children:[(0,e.jsx)(S.x,{paddingBottom:2,children:(0,e.jsx)(b.Z,{variant:"beta",children:L({id:M("title.receivers"),defaultMessage:"Receivers"})})}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4,color:"#4A45FF"},children:[(0,e.jsx)("div",{style:{cursor:"pointer"},onClick:()=>p(),children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"#4A45FF",children:L({id:M("select.all"),defaultMessage:"Select all"})})}),(0,e.jsx)("div",{style:{cursor:"pointer"},onClick:()=>d(),children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"#4A45FF",children:L({id:M("unselect.all"),defaultMessage:"Unselect all"})})})]}),(0,e.jsx)("div",{style:{overflowY:"scroll",marginTop:16,height:160},children:a.map(T=>(0,e.jsx)("div",{children:(0,e.jsx)($e,{item:T,tokens:h,addToken:x,removeToken:m})},T.label))})]})})}function ze(a){if(!a.includes("::"))return a.trim();let h=a.split("::");return h.length<2||!h[1].includes(".")?a.trim():h[1].split(".")[1].trim()}function ke(a){let h=[];return a.forEach(d=>{h.push({label:d.username,value:d.expoPushToken})}),h}const Ae=()=>jsx(Icon,{width:`${25/16}rem`,height:`${25/16}rem`,color:"secondary500",as:Ae});function Pe({notifications:a,count:h,receivers:d,receiversCount:p,refreshNotificationsState:x,isLoading:m,testToken:L}){const[T,C]=(0,i.useState)([]),[Z,E]=(0,i.useState)(!1),{post:Q}=(0,u.useFetchClient)(),{formatMessage:Y}=(0,v.Z)(),V=D=>{C([...T,D])},O=D=>{C(T.filter(X=>X!==D))},R=()=>{const D=d.map(X=>X.value);C(D)},W=()=>{C([])},A=(0,g.TA)({initialValues:{title:"",subtitle:"",contentType:"",entryId:""},validationSchema:N.Ry({title:N.Z_().required(Y({id:M("form.required"),defaultMessage:"Required field"}))}),onSubmit:async D=>{if(D.contentType=ze(D.contentType),console.log("modified values from send test",D),Z){const X=[L];D.title=`[Test] ${D.title}`,await Q("/expo-notifications/process-notification",{data:D,tokens:X}).then(Ie=>{x(),P()});return}T.length!==0?await Q("/expo-notifications/process-notification",{data:D,tokens:T}).then(X=>{x(),P()}):console.log("no receivers")}}),P=()=>{A.handleReset(),C([])},U=D=>{D.preventDefault(),E(!0),A.handleSubmit()},K=async D=>{D.preventDefault(),E(!1),A.handleSubmit()};return(0,e.jsxs)("div",{children:[(0,e.jsx)(k.BaseHeaderLayout,{title:Y({id:M("plugin.name"),defaultMessage:"My notifications"}),subtitle:`${h} ${Y({id:M("header.subtitle"),defaultMessage:"sent notifications"})}`,as:"h2"}),(0,e.jsxs)(k.ContentLayout,{children:[(0,e.jsx)(k.TwoColsLayout,{startCol:(0,e.jsx)(ue,{formik:A,sendTest:U,sendForReal:K,testToken:L}),endCol:(0,e.jsx)(Ce,{receivers:d,receiversCount:p,tokens:T,setTokens:C,addToken:V,removeToken:O,addAll:R,removeAll:W})}),(0,e.jsx)("div",{style:{paddingTop:12},children:(0,e.jsxs)(r.rs,{children:[(0,e.jsx)(r.AW,{path:`/plugins/${$.Z}`,exact:!0,children:(0,e.jsx)(Se,{notifications:a,count:h,isLoading:m})}),(0,e.jsx)(r.AW,{component:H})]})})]})]})}function Ne(){const{get:a}=(0,u.useFetchClient)(),[h,d]=(0,i.useState)(!0),[p,x]=(0,i.useState)(0),[m,L]=(0,i.useState)(null),[T,C]=(0,i.useState)([]),[Z,E]=(0,i.useState)([]),[Q,Y]=(0,i.useState)(0),[{query:V}]=c(),O=async()=>{const P=await a("/expo-notifications/get-plugin-config");P.data&&P.data.testToken&&L(P.data.testToken)},R=async()=>{const P=await a("/expo-notifications/recipientsFrom/0"),{data:U}=P,K=ke(U.recipients?U.recipients:[]);E(K),Y(U.count)},W=async()=>{h===!1&&d(!0);let P=1,U=10;if(V&&V.page){V.pageSize&&(U=Number(V.pageSize));const K=await a(`/expo-notifications/findFrom/?page=${V.page}&pageSize=${U}`);C(K.data?.notifications),x(K.data?.count),d(!1)}else{const K=await a(`/expo-notifications/findFrom/?page=${P}&pageSize=${U}`);C(K.data?.notifications),x(K.data?.count),d(!1)}};(0,i.useEffect)(()=>{W(),R(),O()},[V]);const A=()=>{W()};return(0,e.jsx)("div",{children:(0,e.jsx)(Pe,{notifications:T,count:p,receivers:Z,receiversCount:Q,refreshNotificationsState:A,isLoading:h,testToken:m})})}const Oe=()=>(0,e.jsx)("div",{children:(0,e.jsx)(Ne,{})})}}]);
