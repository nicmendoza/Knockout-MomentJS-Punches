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

which would come out looking like, for example:
28 years ago
July 10th 2014, 12:13:44 pm
Tomorrow at 12:14 PM
Yesterday at 12:14 PM