import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getAuteurs } from '../../features/auteursSlice'
import AfficheAuteurs from './AfficheAuteurs'

const ListAuteurs = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuteurs())
    })
  return (
    <div>
      <AfficheAuteurs />
    </div>
  )
}

export default ListAuteurs
