Knockout MomentJS Punches
=========================

A few simple [Knockout Punches](https://github.com/mbest/knockout.punches) for date/time formatting

Given the following model:

    myModel = {
    	someDate : new Date('2/12/1986'),
    	rightNow : new Date()
    };


You could uses the punches as follows in a view bound against the model:

    {{ someDate | fromNow }}  
    {{ rightNow | date:'MMMM Do YYYY, h:mm:ss a' }}
    {{ rightNow | addTime:'days':1 }}
    {{ rightNow | subtractTime:'hours':3 }}
