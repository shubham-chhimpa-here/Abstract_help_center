import React, { useEffect, useState } from 'react'

export const CardsContainer = ({obj}) => {
   
    const {cardData, setCardData} = obj;

    const getData = async () => {
        let headersList = {

        }

        let response = await fetch("http://localhost:3000/cards/", {
            method: "GET",
            headers: headersList
        });

        let data = await response.json();
        setCardData(data)
       

    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <div id='cardsContainer'>

            {
                cardData && cardData?.map((ele, i) => {
                    return <div id='card' key={i}>
                        <p id='title'>
                            {ele?.title}
                        </p>
                        <hr />
                        <p id='description'>
                            {
                                ele?.description
                            }
                        </p>
                    </div>
                })
            }
            {
                cardData?.length == 0 && <div id='card'>
                <p id='title' style={{color: 'red'}}>
                    card not found
                </p>
               
            </div>
            }


        </div>
    )
}
