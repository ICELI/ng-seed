webpackJsonp([14,22],{Wz3n:function(t,e,n){function l(t){var e=this;e.confirm=function(){t.confirm({template:'<p class="text-center text-default">确认删除？</p>'}).then(function(){alert("您点了确认"),t.close()},function(){alert("您点了取消"),t.close()})},e.alert=function(){t.alert({template:'<p class="text-center text-default">确认删除？</p>'}).then(function(){t.close()})},e.custom=function(){t.modal({method:"login",className:"login-from",backdropClass:"in",templateUrl:c,success:function(t){t.data.data;alert("tick")},controller:"loginCtrl"})}}l.$inject=["dialogs"];var o=n("eslX"),c=n("eD9V");o.registerController("DialogCtrl",l)}});