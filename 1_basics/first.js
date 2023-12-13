// in javascript datatypes are classified into two types primitive and non primitive 
//primitive are just like call by value and non primitive are just like call ny reference 
//in primitive you dont get the refrences of the values you only get the values in primitive there are 7 datatypes =>number,string,boolean,null,undefine d,symbol,bigint
//REference (non primitive )
//isme hme memory ke refrences milte ha 
//Array,Objects,Functions

//agr hm kisi variable  ko null define krte ha  to uska datatype null nhi object aayega 
//hamare jitne bhi non premitive datatypes ha unka return type object hi aata ha 
/* ====================================================================
 Memories

 stack (primitive),Heap (Non primitive) 
 */
let myname="mukul"
let anothername=myname
anothername="thakur"
console.log(myname);
console.log(anothername);
//ye ik primitive datatype ha to isme hme reference ni original data ki copy milegi to hm usme changes kr rhe honge 
//pehle hmne my name me value assign ki phir ik or datatype bnaya another usme bhi myname walivalue assign ki lekin is another name ko stack me alg jgh mili isne copy me changes kiye na ki original myname me to jb hm original value print krwayge  myname ki to whi print hoga jo changes hue ha wo copy me hue ha 

//Heap
let userone ={
    email:"ffdbj@gmail.com",
    age:34
}
let usertwo=userone
usertwo.age=23;

console.log(userone.age)
console.log(usertwo.age)

// ab yha pr  ik non primitive datatype tha to isme memory heap me allocate hoti ha jaise userone to stack me i allocate hoga lekin jo iske data ko memory ha wo heap me allocate hogi or jo stack me userone ha us eiska  reference milega  phir uske bad hm usertwo ko bhi userone ki hi memory assign krege to ab jo reference  userone ko  mila ha whi reference mila whi user two ko bhi milega heap me copy nhi milte to agr hm koi bbhi changes krte ha in dono usr me se kisi me bhi to wo donome reflect hoga 