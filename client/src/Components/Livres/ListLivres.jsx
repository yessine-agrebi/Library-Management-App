import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import { getLivres } from '../../features/livreSlice';
import AfficheLivres from './AfficheLivres';
const ListLivres = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLivres())
  })
  return (
    <div>
      <AfficheLivres />
    </div>
  )
}

export default ListLivres
