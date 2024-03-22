export default async function loader() {
  try {
    const itemsPromise = await fetch('https://fakestoreapi.com/products?limit=20');
    const items = await itemsPromise.json();
    return {items};
  } catch(err) {
    throw new Response('', {
      status:404,
      statusText: 'Not Found'
    })
  }

}