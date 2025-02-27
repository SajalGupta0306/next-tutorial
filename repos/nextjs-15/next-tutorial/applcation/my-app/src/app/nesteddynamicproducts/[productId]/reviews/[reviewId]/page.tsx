import React from 'react'

export default async function SpecificReviewForSpecificPage ({
  params
}: {
  params: Promise<{ productId: string, reviewId: string }>
}) {
  const {productId, reviewId} = (await params)
  return <div>SpecificReviewForSpecificProduct for  prpduct - {productId} and review - {reviewId}</div>
}
