import React from 'react'
import CarlistCard from '../../components/Card/cardCarListUser'
import EventListCard from '../../components/Card/eventCardlistUser'
import RecentCard from '../../components/Card/recentBookingCardListUser'

export const CarList = () => {
  return (
    <>
      <CarlistCard/> 
      <EventListCard/>
      <RecentCard/>
    </>
    
  )
}
