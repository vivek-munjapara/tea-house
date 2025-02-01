async function secdata(end) {
    const res = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + `api/${end}` , { next: { revalidate: 10 } });
    const secdata = await res.json();
    return secdata;
} 
 export default secdata 

//  async function secdata() {
//     const response = await fetch(process.env.NEXT_APP_URL + `api/home/contact` , { next: { revalidate: 10 } });
//     const secdata = await res.json();
//     return secdata;
// }

// const Resdata = async () => {
//     const datares = await secdata();
//     return datares;
//  }
 
//  export default secdata 


// const FetchData = async (endpoint) => {
//     try {
//       // Your logic to fetch data based on the provided endpoint
//       const response = await fetch(process.env.NEXT_APP_URL + `api/home/${endpoint}` , { next: { revalidate: 10 } });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       // Handle any errors here
//       console.error('Error fetching data:', error);
//       return null;
//     }
//   };
  
//   export default FetchData; 