import React, {memo} from "react";
export const MemoM = memo( //se encierra todo aqui y ahora se actualizará solo sin escuchar las actualizaciones del padre
  ({value}) => {
  console.log('Se actualiza solo sin el padre')
    return (
      <p>{value}</p>
      )}
    )
export default MemoM;