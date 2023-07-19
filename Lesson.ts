// Type Script nedir ? : TypeScript gibi diller, büyük ekiplerle çalışırken, özellikle Backend ve API ile veri işlemlerinde,
// Dinamik Tip (Dynamic Typing) dilinden kaynaklanan potansiyel hataları en aza indirgemek için tercih edilir. TypeScript, 
//tip güvenliği sağlayarak projeye sonradan dahil olan veya JavaScript konularında deneyimi olmayan geliştiricilerin yapabileceği hataları minimize etmeye yardımcı olur.


let variable = "hello" //  variable: string  >> Type Script bunun bir string değeri olduğunu anlıyor


variable = "hi"

// hem Türkçe hem de ingilizce örnek vermek istdim burada çünkü genelde tanımlamalar ingilizce yapılıyor.

let Merhaba = "hello"


Merhaba = "hi"


let age = 18
// age = "Eighteen"   There is an error because we have already defined the variable as a Number, and we cannot change it to a String."
//Burada bir değişkene yaptığımız tanımlamada, değişkenin atayacağı değeri anlayarak otomatik olarak onun sayı mı yoksa karakter dizisi mi olduğunu belirliyor!




let TypeOfNumber: Number;

// TypeOfNumber, = "18" Burada tanımlıyamayız Yukarıda numara olarak tanımladık
TypeOfNumber = 18



let TypeOfString: String;

TypeOfString = "TypeOfDeneme"

// TypeOfString = 18 >> Burada Eror alıcaksınz

let TypeOfBoolean: Boolean;
TypeOfBoolean = false || true

// TypeOfBoolean=""
// TypeOfBoolean= 18
// Aynı şeklde burada da aynı hataları alıcaksınız,


// Peki bir değer nasıl hem String hem de Numara alıcak


let TypeOfBoth: String | Number

TypeOfBoth = "TRY"
TypeOfBoth = 20
// TypeOfBoth = {} >> Type '{}' is not assignable to type 'String | Number'  başka bir formatta tanımlamaya çalışırsanız bu şekidle hata alırınız

//Burada Gördüğünüz gibi iki şekilde tanımlıyabildik yukarıda hata almıştık



//<<<<<<<<< DİZİ (ARRAY) >>>>>>>>>>>>

let CustomerNames = ["Taha", "Buruc", "Ömer"]

// CustomerNames.push(16) >> rgument of type 'number' is not assignable to parameter of type 'string'. || Array içinde sadece Stirng Değerleri olduğu için bizden sadece String Değerleri istedi,

let CustomerNames2 = ["Taha", "Buruc", 15, 20]

CustomerNames2.push(10) //Burada Hata almadık neden Çünkü Customer2 üzerine geldiğinizde "let CustomerNames2: (string | number)[]" bunu göstericektir otomatik olarak ne istediğini görebilrisniz 

//Define Array Type || Dizi Tipi tanımlama

let ArrayTypes: String[] // String tanımladık array içine artık saece String girilebilir 

// ArrayTypes = [16,20] >> Type 'number' is not assignable to type 'String'.

ArrayTypes = ["Taha"] // We Can do this like that || Bu şekilde yapabilirz.

let ArrayTypes2: (String | Number)[
]

// ArrayTypes2 = [true]  >> Type 'boolean' is not assignable to type 'String | Number'.
ArrayTypes2 = ["a", 1] 


// <<<<<<<  OBJELER  >> (Objects) >>>>>>>>>>


let Student = {

    name :"Taha",
    Surname : "Caglar",
    age : 21,
    isStudent: true
}

// Student.name = 16 >> Type 'number' is not assignable to type 'string'.
Student.name = "Muhammed"

// age = "" >> Type 'string' is not assignable to type 'number'.
Student.age =20 

// Student.isStudent = "" || 12 >> Type 'number' is not assignable to type 'boolean'.
Student.isStudent = true

// Tanımlam yapmanıza gerek yok TypeScript anlıyor bunun obje olduğunu



let NewObject : {
  objeString:string,
  objeNumber :Number,
  objeBoolean:Boolean

}

// NewObject ={
//     objeString : "Taha"
// }
// Type '{ objeString: string; }' is missing the following properties from type '{ objeString: string; objeNumber: Number; objeBoolean: Boolean; }': objeNumber, objeBoolean

//Tanımladığın bütün objeleri girmek zorundasın


 NewObject  =  {
    objeString:"Taha",
    objeNumber : 16,
    objeBoolean:true
  
  }
  
//Eger bir değerin girilmesinin zorunlu olmasını istemiyorsanız aşağıda ki gibi yapın

let NewObject2 : {
    objeString:string,
    objeNumber :Number,
    objeBoolean:Boolean
    objectAny?:String
  
  }


  NewObject2 = {
    objeString:"taha",
    objeNumber :12,
    objeBoolean:false,
    
  } //objectAny Girmediğimiz halde  hata mesajı almadık


  NewObject2 = {
    objeString:"taha",
    objeNumber :12,
    objeBoolean:false,
    objectAny:"Hata yok"
  } 

  //Bu şekilde tanımlayabiliyoruz 



// <<<<<<< Any (Type Any ) >>>>>>>

  let exampleAny;  // let exampleAny: any
 
exampleAny = "Taha"
exampleAny = 16
exampleAny = true
exampleAny = []
exampleAny = {}

// Any olduğunda istediğin gibi tanımlayabilirsin 


//Genelde Type olarak emin olmadığımız şeylerde kullanırız :

let examampleAnyArray : any []

examampleAnyArray = ["taha",1,true,{},[]] // Bu şekilde 


//<<<<<<< FUNCTİON >>>>>>> (Funksiyonlar)

//Kolay bir şeyle başlayalım

let HelloWorld = () => {
    console.log("Hello World ")

}

// HelloWorld = "Hello World" >> Type 'string' is not assignable to type '() => void'.


// let FunctionTypeString = () : string => {
// console.log("hello")
// } // u nneed return the string >> String return etmeniz gerkyior


let FunctionTypeString = () :string => {
    return "taha"

}


let functionTypeNumber = (num:number) => {
    return 16
}


let functionMulti = (num:number) => {
    return num * 12;
}


let subs = (num1:number , num2:number, newnumber ?:number ) => {

    return num1-num2
}


subs(3,2)// 1 

let func = (user:{username:string,age:number}) =>{

    return user.username + "" + age
} 


//Type A.


type UserType ={
    username:string,
    age:string,
    exampleBool:boolean
}
// we can Create this for use everywhere >>  her yerde kullanabilimek için bunu yazıyoruz .


let exampleFunctionType = (user:UserType) =>
{

console.log(user.username)

} //Tek bir sefer yazıp istediğimiz yerde call ettik


type myFunc = (a:number ,b:string) => void



let writeTyeps : myFunc = (num,str) =>{ // thats writeTypes is Function  and the function type is myFunc >> bu yeni fonksiyonun type myFunc ondan dolayı onu her yerde kullanabiliriz.
    console.log (num,str);
}


type TypeSometihng = {
    Theme : "Dark"| "Ligth"
    Language : "TR" | "ENG"
}


const Client : TypeSometihng = {
    Theme:"Dark",
    Language: "TR"
}



//InterFaces 

interface IUSER  {
id?:number,
name:string,
surname: string,



}

interface ICUSTOMER extends IUSER {
    icustomerId: number
}


const IUSER : ICUSTOMER ={
    icustomerId : 1,
    name:"taha",
    surname:"caglar"
}

const app : IUSER = {
    id:1,
    name:"Ahmet",
    surname:"kovac,"
}

// Burada iki farklı interface girdim bir interface  içinde diğerini çağırıdğımda girmek zorundaydım ama sadece user istediğimde  user istenenleri girdim.



// <<<<<<<< GENERİCS >>>>>>


interface auth {
    id:number;
    username:string;
}

interface Category {
    id :number;
    title:string;
}

interface Post {
    id:number;
    title:string;
    desc:string;
    exttra: auth[] | Category[];
}
///Buraya kadar bildiiğimiz İnterface


interface PostBetter <T> {
    id:number
    title:string
    extra: T[]
}
//Burada <T> ile gördüğünüz bize bir parametrle döndürmemizi istiyor >> Type Parameter
const testGenerics : PostBetter<String> = { // Burada o Beklediği Type Parametreyi giriyoruz <String> olarak 
    id:1,
    title:"Big Titlle",
    extra : ["extra1","extra2"] // Burada tanımlamamız bu şekilde
}


interface UpgradePostWithObject <T extends Object> {
    id:number
    title:string
    extra: T[]
}

const test2Generics : UpgradePostWithObject<{id:number, username:string}> = {

    id:1,
    title:"Big Titlle",
    extra : [{id:1,username:"taha"}]
}// Burada Obje çağırdık çüngü UpgradePotWithObject interface kısmıbnda T nin üzerine  bir de obje ekle dedik