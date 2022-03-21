import { json, useLoaderData } from 'remix'
import Item from '~/components/Item'
import { getItem } from '~/helper/fetch'

export const loader = async (params) => {
  console.log('====================================');
  console.log(params);
  console.log('====================================');
  // const res = await getItem(params.slug)

  return params;

}

export default function Post() {
  const items = useLoaderData()
  console.log('====================================');
  console.log(items);
  console.log('====================================');
    return (
    <div className="divide-y">

      {
        items.length>0 && items.slice(0,10).map((itemId)=>{
          // console.log(itemId)
          return(
            <Item item={itemId} key={itemId}/>
          )
        })
      }
    </div>
  );
}
