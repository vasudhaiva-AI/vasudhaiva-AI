import{i as n}from"./typed.module-00a59234.js";import{f as l,e as t,m as c,L as d}from"./fetch-4937b797.js";window.Typed=n;window.fetchEventSource=l;localStorage.getItem("lqdDarkMode");const h=localStorage.getItem("docsViewMode"),f=localStorage.getItem("lqdNavbarShrinked"),o=document.querySelector("body").getAttribute("data-theme"),g=localStorage.getItem(o+":lqdFocusModeEnabled");window.collectCreditsToFormData=function(e){document.querySelectorAll('input[name^="entities"]').forEach(s=>{const a=s.name,r=s.type==="checkbox"||s.type==="radio"?s.checked:s.value;e.append(a,r)})};window.Alpine=t;t.plugin(c);document.addEventListener("alpine:init",()=>{t.store("navbarShrink",{active:t.$persist(!!f).as("lqdNavbarShrinked"),toggle(e){this.active=e?e==="shrink":!this.active,document.body.classList.toggle("navbar-shrinked",this.active)}}),t.data("navbarItem",()=>({dropdownOpen:!1,toggleDropdownOpen(e){this.dropdownOpen=e?e==="collapse":!this.dropdownOpen},item:{"x-ref":"item","@mouseenter"(){if(!t.store("navbarShrink").active)return;const e=this.$el.getBoundingClientRect(),i=this.$refs.item.querySelector(".lqd-navbar-dropdown");if(["y","height","bottom"].forEach(s=>this.$refs.item.style.setProperty(`--item-${s}`,`${e[s]}px`)),i){const s=i.getBoundingClientRect();["height"].forEach(a=>this.$refs.item.style.setProperty(`--dropdown-${a}`,`${s[a]}px`))}}}})),t.store("mobileNav",{navCollapse:!0,toggleNav(e){this.navCollapse=e?e==="collapse":!this.navCollapse},templatesCollapse:!0,toggleTemplates(e){this.templatesCollapse=e?e==="collapse":!this.templatesCollapse},searchCollapse:!0,toggleSearch(e){this.searchCollapse=e?e==="collapse":!this.searchCollapse}}),t.store("darkMode",{on:t.$persist(!0).as("lqdDarkMode"),toggle(){this.on=!this.on,document.body.classList.toggle("theme-dark",this.on),document.body.classList.toggle("theme-light",!this.on)}}),t.store("appLoadingIndicator",{showing:!1,show(){this.showing=!0},hide(){this.showing=!1},toggle(){this.showing=!this.showing}}),t.store("docsViewMode",{docsViewMode:t.$persist(h||"list").as("docsViewMode"),change(e){this.docsViewMode=e}}),t.store("generatorsFilter",{init(){const e=new URLSearchParams(window.location.search);this.filter=e.get("filter")||"all"},filter:"all",changeFilter(e){if(this.filter!==e){if(!document.startViewTransition)return this.filter=e;document.startViewTransition(()=>this.filter=e)}}}),t.store("documentsFilter",{init(){const e=new URLSearchParams(window.location.search);this.sort=e.get("sort")||"created_at",this.sortAscDesc=e.get("sortAscDesc")||"desc",this.filter=e.get("filter")||"all",this.page=e.get("page")||"1"},sort:"created_at",sortAscDesc:"desc",filter:"all",page:"1",changeSort(e){e===this.sort?this.sortAscDesc=this.sortAscDesc==="desc"?"asc":"desc":this.sortAscDesc="desc",this.sort=e},changeAscDesc(e){this.ascDesc!==e&&(this.ascDesc=e)},changeFilter(e){this.filter!==e&&(this.filter=e)},changePage(e){(e===">"||e==="<")&&(e=e===">"?Number(this.page)+1:Number(this.page)-1),this.page!==e&&(this.page=e)}}),t.store("chatsFilter",{init(){const e=new URLSearchParams(window.location.search);this.filter=e.get("filter")||"all",this.setSearchStr(e.get("search")||"")},searchStr:"",setSearchStr(e){this.searchStr=e.trim().toLowerCase()},filter:"all",changeFilter(e){if(this.filter!==e){if(!document.startViewTransition)return this.filter=e;document.startViewTransition(()=>this.filter=e)}}}),t.data("generatorV2",()=>({itemsSearchStr:"",setItemsSearchStr(e){this.itemsSearchStr=e.trim().toLowerCase(),this.itemsSearchStr!==""?this.$el.closest(".lqd-generator-sidebar").classList.add("lqd-showing-search-results"):this.$el.closest(".lqd-generator-sidebar").classList.remove("lqd-showing-search-results")},sideNavCollapsed:!1,toggleSideNavCollapse(e){var i;this.sideNavCollapsed=e?e==="collapse":!this.sideNavCollapsed,this.sideNavCollapsed&&((i=tinymce==null?void 0:tinymce.activeEditor)==null||i.focus())},generatorStep:0,setGeneratorStep(e){if(e!==this.generatorStep){if(!document.startViewTransition)return this.generatorStep=Number(e);document.startViewTransition(()=>this.generatorStep=Number(e))}},selectedGenerator:null})),t.store("mobileChat",{sidebarOpen:!1,toggleSidebar(e){this.sidebarOpen=e?!1:!this.sidebarOpen}}),t.data("dropdown",({triggerType:e="hover"})=>({open:!1,toggle(i){this.open=i?i!=="collapse":!this.open,this.$refs.parent.classList.toggle("lqd-is-active",this.open)},parent:{"@mouseenter"(){e==="hover"&&this.toggle("expand")},"@mouseleave"(){e==="hover"&&this.toggle("collapse")},"@click.outside"(){this.toggle("collapse")}},trigger:{"@click.prevent"(){e==="click"&&this.toggle()}},dropdown:{}})),t.store("notifications",{notifications:[],loading:!1,add(e){this.notifications.unshift(e)},remove(e){this.notifications.splice(e,1)},markThenHref(e){const i=this.notifications.indexOf(e);if(i!==-1){var s=new FormData;s.append("id",e.id),this.loading=!0,$.ajax({url:"/dashboard/notifications/mark-as-read",type:"POST",data:s,cache:!1,contentType:!1,processData:!1,success:a=>{},error:a=>{console.error(a)},complete:()=>{this.markAsRead(i),window.location=e.link,this.loading=!1}})}},markAsRead(e){this.notifications=this.notifications.map((i,s)=>(s===e&&(i.unread=!1),i))},markAllAsRead(){this.loading=!0,$.ajax({url:"/dashboard/notifications/mark-as-read",type:"POST",success:e=>{e.success&&this.notifications.forEach((i,s)=>{this.markAsRead(s)})},error:e=>{console.error(e)},complete:()=>{this.loading=!1}})},setNotifications(e){this.notifications=e},hasUnread:function(){return this.notifications.some(e=>e.unread)}}),t.data("notifications",e=>({notifications:e||[]})),t.store("focusMode",{active:t.$persist(!!g).as(o+":lqdFocusModeEnabled"),toggle(e){this.active=e?e==="activate":!this.active,document.body.classList.toggle("focus-mode",this.active)}})});d.start();
