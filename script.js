console.log('Makeup API');

//Create a Container
var container=document.createElement('div');
container.setAttribute('class','container');

async function getdata()
{
  try {
    let request=await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner')
    // console.log(request)
    let data=await request.json();//Converting the data to json format
    console.log(data);
    for(let i=0;i<data.length;i++)//use for loop
    {
      //Creating a card
      var card=document.createElement('div');
      card.setAttribute('class','card');
      card.style.borderRadius='9px';
      container.appendChild(card)
      //Displaying the Brand
      var brand=document.createElement('div');
      brand.innerHTML=`<p><b>Brand :</b> ${data[i].brand}</p>`;brand.style.fontSize='33px';
      card.appendChild(brand)
      //Displaying the Name
      var name=document.createElement('div');
      name.innerHTML=`<p><b>Name :</b> ${data[i].name}</p>`;
      card.appendChild(name);
      //Displaying the Price
      var price=document.createElement('div');
      price.innerHTML=`<p><b>Price: </b>${data[i].price} ${data[i].price_sign}</p>`;
      card.appendChild(price)
      //Creating a Box
      var box=document.createElement('div');
      box.setAttribute('class','Box-part');
      card.style.border='1px solid #50749d';card.style.backgroundColor='#f6eaea';
      card.appendChild(box);
      

      var flag=document.createElement('img');
      flag.setAttribute('src',data[i].image_link);flag.setAttribute('width','120px');//flag.style.margin='5px 160px'
      flag.style.right='0px';
      box.appendChild(flag);
      //Create address tag
      var a=document.createElement('a');
      a.setAttribute('href',data[i].product_link);a.setAttribute('target','_blank');a.style.margin='15px 0px';
      a.innerHTML='For Product Details';
      card.appendChild(a);
      //Create Description tag
      var description=document.createElement('div');
      description.innerHTML=`<p><span><b>Description :</b> <br> ${data[i].description}</span></p>`;
      description.style.margin='25px 0px';
      card.appendChild(description)

}
  } 
  catch (error) 
  {
      console.log(error)
  }
   
}
getdata()
document.body.append(container)