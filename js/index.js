(function() {
    
    
    
    
    var UIController = (function(){
        
        var DOMStrings = {
            modal_1: 'modal_1',
            modal_2: 'modal_2',
            modal_3: 'modal_3',
            modal_4: 'modal_4',
            modal_5: 'modal_5',
            modal_6: 'modal_6',
            modal_7: 'modal_7',
            modal_8: 'modal_8',
        };
        
        return {
            getDOMStrings: function() {
                return DOMStrings;
            }
        }
    })();
    
    
    
    
    
    var Controller = (function(UICtrl) {
        
                
        var setupEventListeners = function() {
            
        var DOMStrings = UICtrl.getDOMStrings();
        
        document.getElementById(DOMStrings.modal_1).addEventListener('click', function(){
            document.getElementById(DOMStrings.modal_1).style.filter = 'none';
            document.getElementById(DOMStrings.modal_1).style.filter = 'blur(5px)';
        });
        document.getElementById(DOMStrings.modal_2).addEventListener('click', function(){
            document.getElementById(DOMStrings.modal_2).style.filter = 'none';
            document.getElementById(DOMStrings.modal_2).style.filter = 'blur(5px)';
        });
        document.getElementById(DOMStrings.modal_3).addEventListener('click', function(){
            document.getElementById(DOMStrings.modal_3).style.filter = 'none';
            document.getElementById(DOMStrings.modal_3).style.filter = 'blur(5px)';
        });
        document.getElementById(DOMStrings.modal_4).addEventListener('click', function(){
            document.getElementById(DOMStrings.modal_4).style.filter = 'none';
            document.getElementById(DOMStrings.modal_4).style.filter = 'blur(5px)';
        });
        document.getElementById(DOMStrings.modal_5).addEventListener('click', function(){
            document.getElementById(DOMStrings.modal_5).style.filter = 'none';
            document.getElementById(DOMStrings.modal_5).style.filter = 'blur(5px)';
        });
        document.getElementById(DOMStrings.modal_6).addEventListener('click', function(){
            document.getElementById(DOMStrings.modal_6).style.filter = 'none';
            document.getElementById(DOMStrings.modal_6).style.filter = 'blur(5px)';
        });
        document.getElementById(DOMStrings.modal_7).addEventListener('click', function(){
            document.getElementById(DOMStrings.modal_7).style.filter = 'none';
            document.getElementById(DOMStrings.modal_7).style.filter = 'blur(5px)';
        });
        document.getElementById(DOMStrings.modal_8).addEventListener('click', function(){
            document.getElementById(DOMStrings.modal_8).style.filter = 'none';
            document.getElementById(DOMStrings.modal_8).style.filter = 'blur(5px)';
        });
            
            
        };
        
        return {
            init: function(){
                console.log('Application has started;');
                setupEventListeners();
            }
        }
        
        
    })(UIController);
    
    
 Controller.init();   
    
    
    
})();