import React from 'react'

export default async function SpecificPageProduct ({
  params
}: {
  params: Promise<{ productId: string }>
}) {
  const productId = (await params).productId
  return <div>SpecificPageProduct - {productId}</div>
}
