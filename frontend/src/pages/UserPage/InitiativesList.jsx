import React, { useEffect, useState } from 'react'
import InitiativeCard from './InitiativeCard'
import initiativesData from './public/initiatives.json'

const InitiativesList = () => {
  const [initiatives, setInitiatives] = useState([])

  useEffect(() => {
    setInitiatives(initiativesData)
  }, [])

  return (
    <div className="grid gap-6">
      {initiatives.map(initiative => (
        <InitiativeCard key={initiative._id} initiative={initiative} />
      ))}
    </div>
  )
}

export default InitiativesList
