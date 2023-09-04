/* eslint-disable react/prop-types */
import User from "./User";


export default function Users({data}) {
  return (
      <div>
          {data.map((item) => {
              return <User key={item.id} {...item} />
          })}
    </div>
  )
}
