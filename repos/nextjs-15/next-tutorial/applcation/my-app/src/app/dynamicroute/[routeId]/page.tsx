import React from 'react'

export default async function SpecificPage ({
  params
}: {
  params: Promise<{ routeId: string }>
}) {
  const routeId = (await params).routeId
  return <div>SpecificPage - {routeId}</div>
}
