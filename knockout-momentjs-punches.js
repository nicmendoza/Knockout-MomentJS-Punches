(function (root,factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['knockout','knockout.punches','moment'], factory);
    } else {
        // Browser globals
        factory(root.ko,root.ko.punches,root.moment,root.TH);
    }
}(this, function(ko,koPunches,moment){

	ko.filters = ko.filters || {};

	ko.filters.fromNow = function(date){
		return moment(date).fromNow();
	};

	ko.filters.date = function(date,format){
		return moment(date).format(format);
	};

	ko.filters.addTime = function(date,unit,qty){
		return moment(date).add(unit,qty).calendar();
	};

	ko.filters.subtractTime = function(date,unit,qty){
		return moment(date).subtract(unit,qty).calendar();
	};

}));