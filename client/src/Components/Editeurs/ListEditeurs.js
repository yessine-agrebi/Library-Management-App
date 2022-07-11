import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getEditeurs } from '../../features/editeurSlice'
import AfficheEditeurs from './AfficheEditeurs'

const ListAuteurs = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEditeurs())
    })
  return (
    <div>
      <AfficheEditeurs />
    </div>
  )
}

export default ListAuteurs
