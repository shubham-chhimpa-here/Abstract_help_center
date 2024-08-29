import React from 'react'

const Footer = () => {
    const obj = [
        {title: "Abstract", subtitle: ['Brancehs']},
        {title: "Resources", subtitle: ['Blog', 'Help Center', 'Release Notes','Status']},
        {title: "Community", subtitle: ['Twitter', 'LinkedIn', 'Facebook','Dribble','Podcast']},
        {title: "Company", subtitle: ['About Us', 'Careers', 'Legal']},
    ]
  return (
    <footer>
        <div className='topFooter'>
            {
                obj.map((ele, i) => {
                    return <div className="row" key={i}>
                        <h2>{ele.title}</h2>
                        {
                            ele?.subtitle?.map((subele, subi) => {
                                return <a href='#' key={subi}>{subele}</a>
                            })
                        }
                    </div>
                })
            }





        </div>
        <div className='bottomFooter'>
            <p>@ Copywrite 2022 Abstract Studio Design Inc. All rights reserved</p>
            <p>Contact Us-  <a href="mailto:info@abstract.com">info@abstract.com</a></p>
        </div>
    </footer>
  )
}

export default Footer;