/**
 * jQuery serializeJSON
 * 
 * @author guorui
 * @date 2015-7-1
 */
;(function($){
	$.fn.serializeJSON = function() {
		var result = {};
		
		$.each($(this).serializeArray(), function(index, item){
			var object = result[item.name];
			
			if(typeof object !== 'undefined') {
				if($.isArray(object)) {
					object.push(item.value);
				} else {
					result[item.name] = [object, item.value];
				}
			} else {
				result[item.name] = item.value;
			}
		});
		
		return result;
	};
})(jQuery);
