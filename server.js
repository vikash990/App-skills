
var cors =require('cors');
var bodyParser=require('body-parser');
var express=require('express');
var app=express();
var port=process.env.PORT||5000;

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

app.get('/result',(req, res) => {

  var number=req.body.number;
  var newNumber=number.toString();
  var result="";
  var arr1=[];
  var arr2=[];
  var j=0;
  while(newNumber.length!=1)
   {   var n=newNumber.length;
      result="";
     for(var i=0;i<n/2;i++) {
      if(newNumber[i]>newNumber[n-i-1])
        result=result+newNumber[i];
      if(newNumber[i]<newNumber[n-i-1])
        result=result+newNumber[n-i-1];
}
   
  if((newNumber.length&1) && (newNumber.length!=1)) result=result+newNumber[(newNumber.length-1)/2];
   newNumber=result;
   arr1[j]=newNumber;
   j++;
   
}
 for(j=0;j<arr1.length-1;j++)
   arr2[j]=arr1[j];
 res.json({"strongest":arr1[arr1.length-1],"steps":arr2});
      
});

app.listen(port,function(){
    console.log('server is running a port:'+port)
})
