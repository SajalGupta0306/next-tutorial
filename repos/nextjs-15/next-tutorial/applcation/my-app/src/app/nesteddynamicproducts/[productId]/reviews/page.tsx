import React from 'react'

export default async function TotalReviewForSpecificPage ({
  params
}: {
  params: Promise<{ productId: string }>
}) {
  const productId = (await params).productId
  return <div>Total Reviews for product - {productId}</div>
}
