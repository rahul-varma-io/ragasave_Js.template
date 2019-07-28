(function (Ragasave) {
    var ViewList = {},ViewData = {};
    Ragasave.App.ViewList = function(List){ 
        if(!List) {return false;}
        ViewList = {};  
        Object.assign(ViewList,List);
        Object.assign(this,ViewList);
        return this;
    };


    Ragasave.App.ViewData = function(name){
        if(ViewList[name]){
            ViewData[name] = {};
        }
        this.set = function(data){
            ViewData[name] = data;
        };
        return this;
    }
    function fecthFrom(url) {
        var data;
        Ragasave.Ajax({
            url : url,
            type : 'GET',
            dataType : 'JSON',
            async : false,
            'success' : function(response){
                data = (response);
            }
        });
        return (data);
    }
    Ragasave.App.View = function (ViewName,context){
        // if(ViewName && !ViewList[ViewName]){ throw("View : View Not Fount"); }
        
        

        

        var attr = {click : '@click',each : "@each"};
        Ragasave('*').each(function(e){
            var elem = Ragasave(e);
            if(elem.hasAttr(attr.each)){
                var reg_exp = (/(\[.*?\]|[^\s\n]+)+?[\s\t]+?as?[\s\t]+?(([^\=\>\s\t]+)?[\s\t]+?\=\>?[\s\t]+([^\s\t]+)|([^\s\t]+))/gi);
                
                var eachAttr = reg_exp.exec(elem.attr(attr.each));
                elem.delAttr(attr.each);
                var eachElam = elem[0].outerHTML;
                elem.remove();
                // console.log(eachElam); 
                var $array, $args;
                // console.log(ViewData);
                // return ;
                if(!eachAttr[5]){
                    $args = eachAttr[4]+', ' +eachAttr[3];
                }else{
                    $args = eachAttr[5];
                }
                $array = (eachAttr[1]); 
                if(!ViewData[ViewName].data[$array]){
                    $array = eval($array);
                }else{
                    $array = ViewData[ViewName].data[$array];
                }
                var loop = `$array.forEach((${$args}) => {
                    Ragasave('body').append(eachElam.replace(/-{?(.*?)?}/g,function(s,g){try{return eval(g);}catch (error){ return(arguments[0]);}}));
                });`;
                try {
                    eval(loop);
                } catch (error) {
                    throw(error);
                }
                // console.log(eval(loop),eachElam);
                // return;
                // if(eachAttr.length == 3){
                //     var vals = eachAttr[2].split(/[\s\t]+/g);
                //     if(vals.length == 2){
                        
                //     }else if(vals.length == 2){
        
                //         console.log( JSON.parse(eachAttr[0]));
                //     }
                // }
            }
        });
        Ragasave('*').each(function(e){
            var elem = Ragasave(e);
            if(elem.hasAttr(attr.click)){
                switch (elem.attr(attr.click)) {
                    case 'hide':
                            elem.click(function(){
                              
                                Ragasave(this).hide();
                            });
                            break;
                            
                            default:

                                break;
                            }
                elem.delAttr(attr.click);
            }
            
        });




        Ragasave('view').each(function(e){
            var view = Ragasave(e).clone(true,true);
            e.remove();
            ViewList[view.attr('view-id')] = view[0];
        });
        // Ragasave.ViewList();
        // console.log(ViewList);
        Ragasave('body').prepend(ViewList[ViewName]);
        this.name = ViewName;
        this.show = function(){
            return this.name;
        }
    
        this.default = function(){
    
        }


        
    };
}(Ragasave));
