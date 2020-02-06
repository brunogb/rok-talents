(this["webpackJsonprok-talents"]=this["webpackJsonprok-talents"]||[]).push([[4],{255:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(8),o=a(9),s=a(11),r=a(10),i=a(6),l=a(12),c=a(0),p=a.n(c),h=a(243),m=a(244),u=a.n(m),d=a(242),v=a.n(d),b=a(65),g=a.n(b),w=a(264),f=a(265),E=a(256),y=a(257),j=a(106),O=a(18),S=a(19),x=a(48),T=(a(255),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"createPopover",value:function(e){var t;return"mobile"===e?t={large:2.1,small:.8}:"desktop"===e&&(t={large:1.6,small:void 0}),p.a.createElement(f.a,{placement:this.props.placement,style:this.props.style,outOfBoundaries:this.props.outOfBoundaries,arrowProps:this.props.arrowProps,className:this.props.className},p.a.createElement(v.a,{compressor:t.large},p.a.createElement("div",null,p.a.createElement(f.a.Title,null,p.a.createElement("div",null,p.a.createElement("span",{className:"node-tooltip-title"},this.props.talentname),p.a.createElement(g.a,{minDeviceWidth:x.c+1},p.a.createElement("span",{className:"node-tooltip-title-value"},this.props.value+"/"+this.props.max)),p.a.createElement("div",{style:{clear:"both"}}))),p.a.createElement(f.a.Content,{className:"node-tooltip-body"},p.a.createElement("div",null,this.props.value!==this.props.max&&p.a.createElement("div",null,p.a.createElement("b",null,"Next point:")),this.props.text,p.a.createElement(g.a,{maxDeviceWidth:x.c},p.a.createElement(E.a,{id:"node-tooltip-assign-container"},p.a.createElement(y.a,null,p.a.createElement(j.a,null,this.props.value>0&&p.a.createElement(S.a,{className:"node-tooltip-decrease-button",icon:O.f,size:"2x",onClick:this.props.talentdecrease})),p.a.createElement(j.a,{xs:5},p.a.createElement(v.a,{compressor:t.small},p.a.createElement("span",{className:"node-tooltip-assign-value"},this.props.value+"/"+this.props.max))),p.a.createElement(j.a,null,this.props.calcPointsRemaining()>0&&this.props.value!==this.props.max&&p.a.createElement(S.a,{className:"node-tooltip-increase-button",icon:O.g,size:"2x",onClick:this.props.talentincrease}))))),this.props.isShownTalentID&&p.a.createElement("div",{className:"node-tooltip-id"},"ID: ",this.props.talentid))))))}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(g.a,{minDeviceWidth:x.c+1},this.createPopover("desktop")),p.a.createElement(g.a,{maxDeviceWidth:x.c},this.createPopover("mobile")))}}]),t}(c.Component)),P=a(17),k=(a(258),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).talentIncrease=a.talentIncrease.bind(Object(i.a)(a)),a.talentDecrease=a.talentDecrease.bind(Object(i.a)(a)),a.setTooltip=a.setTooltip.bind(Object(i.a)(a)),a.getStyle=a.getStyle.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.value!==e.value||this.props.nodeSize!==e.nodeSize||this.props.isShownValues!==e.isShownValues||this.props.isShownTalentID!==e.isShownTalentID}},{key:"getStyle",value:function(){var e={};return e.top=this.props.y,e.left=this.props.x,"node-large"===this.props.type?e.backgroundImage="url(".concat("","/images/talents/").concat(this.props.image,".png)"):e.backgroundImage="url(".concat("","/images/talents/").concat(this.props.color,"GenericSmall.png)"),e}},{key:"setTooltip",value:function(){var e=this.props.treeData[this.props.treeName][this.props.idx].values;return this.props.value===this.props.max?Object(P.e)(this.props.tooltip,e,this.props.max-1):Object(P.e)(this.props.tooltip,e,this.props.value)}},{key:"talentIncrease",value:function(){var e=this;if(this.props.calcPointsRemaining()>0){var t=this.props.treeData[this.props.treeName][this.props.idx].prereq,a=!0,n=[];t.forEach((function(t){e.props.fullTree[t-1]!==Object(P.c)(e.props.treeData[e.props.treeName][t].values)&&(a=!1,n.push(p.a.createElement("li",{key:t},p.a.createElement("strong",null,e.props.treeData[e.props.treeName][t].name))))})),a?this.props.value<this.props.max&&(this.props.changeTalentValue(this.props.color,this.props.idx,"increase"),h.jsPlumb.select({source:document.getElementById("".concat(this.props.treeName+this.props.idx))}).addClass("line-".concat(this.props.color))):this.props.showPrereqToast(n)}else this.props.showPointLimitToast()}},{key:"talentDecrease",value:function(e){var t=this.props.treeData[this.props.treeName][this.props.idx].dep,a=!0,n=!0,o=!1,s=void 0;try{for(var r,i=t[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var l=r.value;if(this.props.fullTree[l-1]>0){a=!1;break}}}catch(c){o=!0,s=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw s}}a&this.props.value>0&&(this.props.changeTalentValue(this.props.color,this.props.idx,"decrease"),1===this.props.value&&h.jsPlumb.select({source:document.getElementById("".concat(this.props.treeName+this.props.idx))}).removeClass("line-".concat(this.props.color)))}},{key:"render",value:function(){var e="node-large"===this.props.type?.3:.25;return p.a.createElement(D,Object.assign({},this.props,{talentIncrease:this.talentIncrease,talentDecrease:this.talentDecrease,setTooltip:this.setTooltip,getStyle:this.getStyle,compressor:e,nodeSize:this.props.nodeSize,isShownValues:this.props.isShownValues&&0!==this.props.value}))}}]),t}(c.Component)),D=function(e){var t,a;return Object(b.useMediaQuery)({query:"(max-width: ".concat(x.c,"px)")})?(t={trigger:"click"},a={onClick:void 0,onContextMenu:function(e){return e.preventDefault()}}):(t={trigger:"hover"},a={onClick:function(){return e.talentIncrease()},onContextMenu:function(t){t.preventDefault(),e.talentDecrease()}}),p.a.createElement(w.a,Object.assign({},t,{placement:"right",rootClose:!0,flip:!0,delay:{show:0,hide:0},overlay:p.a.createElement(T,{calcPointsRemaining:e.calcPointsRemaining,talentdecrease:e.talentDecrease,talentincrease:e.talentIncrease,isShownTalentID:e.isShownTalentID,idx:e.idx,talentid:e.treeName+e.idx,talentname:e.talentName,value:e.value,max:e.max,text:e.setTooltip()})}),p.a.createElement("div",Object.assign({},a,{"data-testid":e.treeName+e.idx,id:e.treeName+e.idx,className:"node ".concat(e.type,"-").concat(e.nodeSize," ").concat(0===e.value?"node-inactive":""),style:e.getStyle()}),e.isShownValues&&p.a.createElement(v.a,{compressor:e.compressor},p.a.createElement("div",{className:"node-value","data-testid":"node-value"},e.value+"/"+e.max))))},N=k,I=a(43),C=(a(259),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"drawNodes",value:function(){for(var e=[],t=this.props.treeName,a=1;a<this.props.data.length+1;a++){var n=this.props.treeData[t][a];e.push(p.a.createElement(N,{changeTalentValue:this.props.changeTalentValue,calcPointsRemaining:this.props.calcPointsRemaining,showPrereqToast:this.props.showPrereqToast,showPointLimitToast:this.props.showPointLimitToast,isShownValues:this.props.isShownValues,isShownTalentID:this.props.isShownTalentID,nodeSize:this.props.nodeSize,treeData:this.props.treeData,key:t+a,idx:a,treeName:t,talentName:n.name,image:n.image,tooltip:n.text,type:n.type,value:this.props.data[a-1],max:Object(P.c)(n.values),fullTree:this.props.data,x:n.pos[0]+"%",y:n.pos[1]+"%",color:this.props.color}))}return e}},{key:"render",value:function(){return p.a.createElement(I.a,null,p.a.createElement("div",{id:"tree-".concat(this.props.color),className:"tree-container"},this.drawNodes(),this.props.isShownMouseXY&&p.a.createElement("div",{id:"tree-".concat(this.props.color,"-mouse")},"X: ",parseFloat(this.props.mouseX).toFixed(1)," Y:"," ",parseFloat(this.props.mouseY).toFixed(1))))}}]),t}(c.Component)),q=(a(260),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return!!this.props.commander&&p.a.createElement("div",{id:"tree-center"},p.a.createElement("div",{id:"hexagon-bg"},p.a.createElement("img",{src:"".concat("","/images/ui/hexagon.png"),alt:"Commander Hexagon"})),p.a.createElement("img",{"data-testid":"hexagon-commander",id:"hexagon-commander",src:"".concat("","/images/commanders/").concat(this.props.commander,".png"),alt:this.props.commander,onClick:function(){e.props.toggleSelect()}}),p.a.createElement("div",{id:"hexagon-label-container"},p.a.createElement("div",{className:"hexagon-label hexagon-label-red"},p.a.createElement(v.a,{compressor:.7},p.a.createElement("div",null,this.props.isShownTotals&&p.a.createElement("div",{className:"tree-total","data-testid":"tree-total"},"(".concat(this.props.calcPointsSpent("red"),")")),Object(P.d)("red",this.props.commander)))),p.a.createElement("div",{className:"hexagon-label hexagon-label-yellow"},p.a.createElement(v.a,{compressor:.7},p.a.createElement("div",null,this.props.isShownTotals&&p.a.createElement("div",{className:"tree-total","data-testid":"tree-total"},"(".concat(this.props.calcPointsSpent("yellow"),")")),Object(P.d)("yellow",this.props.commander)))),p.a.createElement("div",{className:"hexagon-label hexagon-label-blue"},p.a.createElement(v.a,{compressor:.7},p.a.createElement("div",null,this.props.isShownTotals&&p.a.createElement("div",{className:"tree-total","data-testid":"tree-total"},"(".concat(this.props.calcPointsSpent("blue"),")")),Object(P.d)("blue",this.props.commander))))))}}]),t}(c.Component)),Y=a(263),X=(a(261),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={open:!1},a.hide=a.hide.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"show",value:function(){this.setState({open:!0})}},{key:"hide",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return p.a.createElement(Y.a,{autohide:!0,delay:2e3,show:this.state.open,onClose:this.hide},p.a.createElement(Y.a.Header,null,p.a.createElement("strong",{className:"mr-auto"},this.props.header)),p.a.createElement(Y.a.Body,null,this.props.body))}}]),t}(c.Component)),L=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={open:!1},a.hide=a.hide.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"show",value:function(){this.setState({open:!0})}},{key:"hide",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return p.a.createElement(Y.a,{autohide:!0,delay:2e3,show:this.state.open,onClose:this.hide},p.a.createElement(Y.a.Header,null,p.a.createElement("strong",{className:"mr-auto"},"Incomplete Talents")),p.a.createElement(Y.a.Body,null,"Upgrade talents to the maximum level first:",this.props.msg))}}]),t}(c.Component),M=a(13),V=(a(262),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={prereqMsg:""},a.showPrereqToast=a.showPrereqToast.bind(Object(i.a)(a)),a.showPointLimitToast=a.showPointLimitToast.bind(Object(i.a)(a)),a.setMousePosition=a.setMousePosition.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.repaint);var e=this;h.jsPlumb.ready((function(){h.jsPlumb.setContainer(document.getElementById("tree-square-content")),e.drawLines()}));var t=document.querySelector("#tree-square-content");this.panZoomInstance=u()(t,{minZoom:1,maxZoom:3,pinchSpeed:.5,zoomDoubleClickSpeed:1,bounds:!0,boundsPadding:.5,smoothScroll:!1,onTouch:function(e){return!1},filterKey:function(e){return!0}}),this.panZoomInstance.on("transform",(function(e){document.body.click()}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.repaint)}},{key:"resetPanZoom",value:function(){this.panZoomInstance.moveTo(0,0),this.panZoomInstance.zoomAbs(0,0,1)}},{key:"repaint",value:function(){h.jsPlumb.repaintEverything()}},{key:"drawLines",value:function(){var e=this;this.props.commander&&(h.jsPlumb.deleteEveryEndpoint(),h.jsPlumb.setSuspendDrawing(!0),["red","yellow","blue"].forEach((function(t){var a=Object(P.d)(t,e.props.commander);Object.keys(e.props.treeData[a]).forEach((function(n){var o=0===e.props[t][n-1]?"":"line-".concat(t);e.props.treeData[a][n].prereq.forEach((function(e){h.jsPlumb.connect({source:document.getElementById("".concat(a).concat(n)),target:document.getElementById("".concat(a).concat(e)),endpoint:["Dot",{cssClass:"line-endpoint",radius:1}],connector:["Straight",{cssClass:"line ".concat(o)}],anchors:[["Perimeter",{shape:"Circle"}],["Perimeter",{shape:"Circle"}]]})}))}))})),h.jsPlumb.setSuspendDrawing(!1,!0))}},{key:"toggleMouseListeners",value:function(){this.props.isShownMouseXY?window.addEventListener("mousemove",this.setMousePosition):window.removeEventListener("mousemove",this.setMousePosition)}},{key:"setMousePosition",value:function(e){var t=document.getElementById("tree-red").getBoundingClientRect(),a=document.getElementById("tree-yellow").getBoundingClientRect(),n=document.getElementById("tree-blue").getBoundingClientRect();setTimeout(this.setState({redX:(e.clientX-t.left+window.scrollX)/t.width*100,redY:(e.clientY-t.top+window.scrollY)/t.height*100,yellowX:(e.clientX-a.left+window.scrollX)/a.width*100,yellowY:(e.clientY-a.top+window.scrollY)/a.height*100,blueX:(e.clientX-n.left+window.scrollX)/n.width*100,blueY:(e.clientY-n.top+window.scrollY)/n.height*100}),2e3)}},{key:"showPrereqToast",value:function(e){var t=this;this.setState({prereqMsg:e},(function(){t.prereqToastRef.show()}))}},{key:"showPointLimitToast",value:function(){this.pointLimitToastRef.show()}},{key:"render",value:function(){var e=this,t={changeTalentValue:this.props.changeTalentValue,calcPointsRemaining:this.props.calcPointsRemaining,showPrereqToast:this.showPrereqToast,showPointLimitToast:this.showPointLimitToast,isShownValues:this.props.isShownValues,isShownMouseXY:this.props.isShownMouseXY,isShownTalentID:this.props.isShownTalentID,nodeSize:this.props.nodeSize,treeData:this.props.treeData,commander:this.props.commander};return p.a.createElement("div",{id:"tree-panel","data-testid":"tree-panel"},p.a.createElement(L,{ref:function(t){return e.prereqToastRef=t},msg:this.state.prereqMsg}),p.a.createElement(X,{ref:function(t){return e.pointLimitToastRef=t},header:"Talent Limit",body:"You have spent the maximum number of talent points"}),this.props.dataVersion<M.c&&p.a.createElement("div",{"data-testid":"version-warning",id:"version-warning"},"(warning: this build uses an old ",p.a.createElement("br",null)," version of the game data)"),p.a.createElement("div",{id:"tree-square-container"},p.a.createElement("div",{id:"tree-square-section"},p.a.createElement("div",{id:"tree-square-content"},p.a.createElement(C,Object.assign({},t,{color:"red",treeName:Object(P.d)("red",this.props.commander),data:this.props.red,mouseX:this.state.redX,mouseY:this.state.redY})),p.a.createElement(C,Object.assign({},t,{color:"yellow",treeName:Object(P.d)("yellow",this.props.commander),data:this.props.yellow,mouseX:this.state.yellowX,mouseY:this.state.yellowY})),p.a.createElement(C,Object.assign({},t,{color:"blue",treeName:Object(P.d)("blue",this.props.commander),data:this.props.blue,mouseX:this.state.blueX,mouseY:this.state.blueY})),p.a.createElement(q,{toggleSelect:this.props.toggleSelect,calcPointsSpent:this.props.calcPointsSpent,isShownTotals:this.props.isShownTotals&&this.props.commander,commander:this.props.commander||"unknown"})))))}}]),t}(c.Component));t.default=V}}]);
//# sourceMappingURL=4.e8eaeb52.chunk.js.map