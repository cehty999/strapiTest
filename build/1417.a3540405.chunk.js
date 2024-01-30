"use strict";(self.webpackChunktest_project=self.webpackChunktest_project||[]).push([[1417],{79211:(Z,L,e)=>{e.d(L,{F:()=>C});var t=e(74081),d=e(27279),f=e(93415),y=e(48102),p=e(27625),D=e(57121),E=e(70627),P=e(61020);const C=({displayedFilters:u})=>{const[T,R]=(0,d.useState)(!1),{formatMessage:A}=(0,P.Z)(),U=(0,d.useRef)(),c=()=>{R(B=>!B)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(f.x,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(y.z,{variant:"tertiary",ref:U,startIcon:(0,t.jsx)(D.Z,{}),onClick:c,size:"S",children:A({id:"app.utils.filters",defaultMessage:"Filters"})}),T&&(0,t.jsx)(p.FilterPopoverURLQuery,{displayedFilters:u,isVisible:T,onToggle:c,source:U})]}),(0,t.jsx)(p.FilterListURLQuery,{filtersSchema:u})]})};C.propTypes={displayedFilters:E.arrayOf(E.shape({name:E.string.isRequired,metadatas:E.shape({label:E.string}),fieldSchema:E.shape({type:E.string})})).isRequired}},91417:(Z,L,e)=>{e.r(L),e.d(L,{default:()=>me});var t=e(74081),d=e(27625),f=e(59461),y=e(38178),p=e(10701),D=e(21395),E=e(77970),P=e(93415),C=e(23298),u=e(28502),T=e(5938),R=e(6918),A=e(15244),U=e(86967),c=e(93153),B=e(50086),Y=e(4987),J=e(8295),G=e(61121),X=e(27997),$=e(74758),w=e(9941),k=e(27875),q=e(37472),v=e(61020),ee=e(79211),Q=e(40464),te=e(51447),se=e(11266),ae=e(89486),ne=e(82298),n=e(70627),ie=e(33866),oe=e(98264),ue=e(27279),ge=e(64797),Ee=e(85811),ce=e(55108),pe=e(15816),Me=e(97442),De=e(13576),Pe=e(87830),Oe=e(47184),Le=e(364),fe=e(71563),ye=e(49204),Ce=e(47853),Te=e(75719),he=e(74919),Re=e(29206),Ae=e(98934),Ue=e(43433),ve=e(8175);const re=({canReadAuditLogs:s,canReadUsers:l})=>{const{get:m}=(0,d.useFetchClient)(),{search:i}=(0,te.TH)(),_=(0,d.useNotification)(),[{query:r}]=(0,d.useQueryParams)(),a={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:M=>_({type:"warning",message:M.message})},{users:o,isError:g,isLoading:O}=(0,se.u)({},{...a,enabled:l,staleTime:2*(1e3*60)}),{data:h,isLoading:x,isError:W}=(0,Q.useQuery)(["auditLogs",i],async()=>{const{data:M}=await m("/admin/audit-logs",{params:r});return M},{...a,enabled:s});return{auditLogs:h,users:o,isLoading:O||x,hasError:W||g}},V=()=>{const{formatDate:s}=(0,v.Z)();return m=>{const i=(0,ie.Z)(m),_=s(i,{dateStyle:"long"}),r=s(i,{timeStyle:"medium",hourCycle:"h24"});return`${_}, ${r}`}},z={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},K=s=>z[s]||s,I=({actionLabel:s,actionName:l})=>(0,t.jsxs)(p.k,{direction:"column",alignItems:"baseline",gap:1,children:[(0,t.jsx)(D.Z,{textColor:"neutral600",variant:"sigma",children:s}),(0,t.jsx)(D.Z,{textColor:"neutral600",children:l})]});I.propTypes={actionLabel:n.string.isRequired,actionName:n.string.isRequired};const S=({status:s,data:l,formattedDate:m})=>{const{formatMessage:i}=(0,v.Z)();if(s==="loading")return(0,t.jsx)(p.k,{padding:7,justifyContent:"center",alignItems:"center",children:(0,t.jsx)(E.a,{children:"Loading content..."})});const{action:_,user:r,payload:a}=l;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.x,{marginBottom:3,children:(0,t.jsx)(D.Z,{variant:"delta",id:"title",children:i({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"})})}),(0,t.jsxs)(C.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0,children:[(0,t.jsx)(I,{actionLabel:i({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:i({id:`Settings.permissions.auditLogs.${_}`,defaultMessage:K(_)},{model:a?.model})}),(0,t.jsx)(I,{actionLabel:i({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:m}),(0,t.jsx)(I,{actionLabel:i({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:r?.displayName||"-"}),(0,t.jsx)(I,{actionLabel:i({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:r?.id.toString()||"-"})]}),(0,t.jsx)(u.V,{value:JSON.stringify(a,null,2),disabled:!0,label:i({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})})]})};S.defaultProps={data:{}},S.propTypes={status:n.oneOf(["idle","loading","error","success"]).isRequired,data:n.shape({action:n.string,date:n.string,payload:n.object,user:n.object}),formattedDate:n.string.isRequired};const b=({handleClose:s,logId:l})=>{const{get:m}=(0,d.useFetchClient)(),i=(0,d.useNotification)(),_=async O=>{const{data:h}=await m(`/admin/audit-logs/${O}`);if(!h)throw new Error("Audit log not found");return h},{data:r,status:a}=(0,Q.useQuery)(["audit-log",l],()=>_(l),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),s()}}),o=V(),g=r?o(r.date):"";return(0,t.jsxs)(T.P,{onClose:s,labelledBy:"title",children:[(0,t.jsx)(R.x,{children:(0,t.jsx)(ae.O,{label:g,id:"title",children:(0,t.jsx)(ne.$,{isCurrent:!0,children:g})})}),(0,t.jsx)(A.f,{children:(0,t.jsx)(S,{status:a,data:r,formattedDate:g})})]})};b.propTypes={handleClose:n.func.isRequired,logId:n.string.isRequired};const F=({pagination:s})=>(0,t.jsx)(P.x,{paddingTop:4,children:(0,t.jsxs)(p.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(d.PageSizeURLQuery,{}),(0,t.jsx)(d.PaginationURLQuery,{pagination:s})]})});F.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},F.propTypes={pagination:n.shape({page:n.number,pageCount:n.number,pageSize:n.number,total:n.number})};const N=({headers:s,rows:l,onOpenModal:m})=>{const{formatMessage:i}=(0,v.Z)(),_=V(),r=({type:a,value:o,model:g})=>a==="date"?_(o):a==="action"?i({id:`Settings.permissions.auditLogs.${o}`,defaultMessage:K(o)},{model:g}):o||"-";return(0,t.jsx)(U.p,{children:l.map(a=>(0,t.jsxs)(c.Tr,{...(0,d.onRowClick)({fn:()=>m(a.id)}),children:[s.map(({key:o,name:g,cellFormatter:O})=>(0,t.jsx)(B.Td,{children:(0,t.jsx)(D.Z,{textColor:"neutral800",children:r({type:o,value:O?O(a[g]):a[g],model:a.payload?.model})})},o)),(0,t.jsx)(B.Td,{...d.stopPropagation,children:(0,t.jsx)(p.k,{justifyContent:"end",children:(0,t.jsx)(Y.h,{onClick:()=>m(a.id),"aria-label":i({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${a.action} action`}),noBorder:!0,icon:(0,t.jsx)(oe.Z,{})})})})]},a.id))})};N.defaultProps={rows:[]},N.propTypes={headers:n.array.isRequired,rows:n.array,onOpenModal:n.func.isRequired};const j=({value:s,options:l,onChange:m})=>{const{formatMessage:i}=(0,v.Z)(),_=i({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return(0,t.jsx)(J.hQ,{"aria-label":_,value:s,onChange:m,children:l.map(({label:r,customValue:a})=>(0,t.jsx)(G.O,{value:a,children:r},a))})};j.defaultProps={value:null},j.propTypes={value:n.string,options:n.arrayOf(n.shape({label:n.string.isRequired,customValue:n.string.isRequired}).isRequired).isRequired,onChange:n.func.isRequired};const H=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],de=({formatMessage:s,users:l,canReadUsers:m})=>{const i=Object.keys(z).map(r=>({label:s({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:K(r)},{model:void 0}),customValue:r})),_=[{name:"action",metadatas:{customOperators:H,label:s({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),customInput:j,options:i},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:s({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(m&&l){const r=o=>o.username?o.username:o.firstname&&o.lastname?s({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:o.firstname,lastname:o.lastname}):o.email,a=l.map(o=>({label:r(o),customValue:o.id.toString()}));return[..._,{name:"user",metadatas:{customOperators:H,label:s({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:a,customInput:j},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return _},le=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:s=>s?s.displayName:""}],_e=()=>{const{formatMessage:s}=(0,v.Z)(),l=(0,f.v9)(y.s),{allowedActions:{canRead:m,canReadUsers:i}}=(0,d.useRBAC)({...l.settings.auditLogs,readUsers:l.settings.users.read}),[{query:_},r]=(0,d.useQueryParams)(),{auditLogs:a,users:o,isLoading:g,hasError:O}=re({canReadAuditLogs:m,canReadUsers:i});(0,d.useFocusWhenNavigate)();const h=de({formatMessage:s,users:o,canReadUsers:i}),x=s({id:"global.auditLogs",defaultMessage:"Audit Logs"}),W=le.map(M=>({...M,metadatas:{...M.metadatas,label:s(M.metadatas.label)}}));return O?(0,t.jsx)(X.A,{children:(0,t.jsx)($.D,{children:(0,t.jsx)(P.x,{paddingTop:8,children:(0,t.jsx)(d.AnErrorOccurred,{})})})}):(0,t.jsxs)(w.o,{"aria-busy":g,children:[(0,t.jsx)(d.SettingsPageTitle,{name:x}),(0,t.jsx)(k.T,{title:x,subtitle:s({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),(0,t.jsx)(q.Z,{startActions:(0,t.jsx)(ee.F,{displayedFilters:h})}),(0,t.jsxs)($.D,{canRead:m,children:[(0,t.jsx)(d.DynamicTable,{contentType:"Audit logs",headers:W,rows:a?.results||[],withBulkActions:!0,isLoading:g,children:(0,t.jsx)(N,{headers:W,rows:a?.results||[],onOpenModal:M=>r({id:M})})}),(0,t.jsx)(F,{pagination:a?.pagination})]}),_?.id&&(0,t.jsx)(b,{handleClose:()=>r({id:null},"remove"),logId:_.id})]})},me=()=>{const s=(0,f.v9)(y.s);return(0,t.jsx)(d.CheckPagePermissions,{permissions:s.settings.auditLogs.main,children:(0,t.jsx)(_e,{})})}},11266:(Z,L,e)=>{e.d(L,{u:()=>y});var t=e(27279),d=e(27625),f=e(40464);function y(p={},D={}){const{id:E="",...P}=p,{get:C}=(0,d.useFetchClient)(),{data:u,isError:T,isLoading:R,refetch:A}=(0,f.useQuery)(["users",E,P],async()=>{const{data:{data:c}}=await C(`/admin/users/${E}`,{params:P});return c},D);return{users:t.useMemo(()=>{let c=[];return u&&("results"in u?Array.isArray(u.results)&&(c=u.results):c=[u]),c},[u]),pagination:t.useMemo(()=>(u&&"pagination"in u)??null,[u]),isLoading:R,isError:T,refetch:A}}}}]);