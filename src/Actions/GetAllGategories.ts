 export default async function GetAllGategories(details: any) {


       let res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/`, {method: 'GET' , next: {revalidate: 30}}
        
       )

   let {data} = await res.json()

return data;

}