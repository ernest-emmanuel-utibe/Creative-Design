// import { ShowCase } from "../sections/ShowCase"
import ShowCase from "../sections/ShowCase"
import Head from "next/head"
import React from "react"

const showcase = () => {
  return (
    <>
      <Head>
        <title>ShowCase - 3Pera</title>
      </Head>
      <ShowCase />
    </>
  )
}

export default showcase