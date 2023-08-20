import React, { useEffect, useState } from 'react'

const URL_HOST = process.env.NEXT_PUBLIC_BKND_URL


export const getServerSideProps = async () => {

    const response = await fetch(URL_HOST+'api/avo')
    const data = await response.json()

    const productList = data.data
    

    return {
        props: {
            productList: productList
        }
    }
}

const Home = ({productList}) => {

    return(<div>
        <div>Hola Platzi! </div>
        {productList.map(producto => {
            return (<div>{producto.name}</div>)
        })}
    </div>)
}

export default Home