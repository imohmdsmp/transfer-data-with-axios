import { useEffect } from "react"

export default function Footer(){




    useEffect(()=>{
        const itemFooter = document.querySelectorAll("footer > div")
        const mainPage = document.querySelectorAll("main > div")
        const title = document.querySelector('header h5')
        itemFooter.forEach((index)=>{
            index.onclick = (event)=>{
                itemFooter.forEach((item)=>{
                    item.classList.remove('active')
                })
                mainPage.forEach((sum)=>{
                    sum.classList.remove('page-on')
                })
                event.target.classList.add('active')
                title.innerHTML = event.target.lastChild.innerHTML
                document.getElementById(index.getAttribute('data-target')).classList.add('page-on')
            }
        })
    })


    return(
        <footer className="d-flex justify-content-between px-4">
            <div className="d-flex flex-column justify-content-center align-items-center py-1 px-2 active" data-target='profileSec'>
                <i className="bi-person-circle"></i>
                <span>پروفایل</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center py-1 px-2" data-target='orderSec'>
                <i className="bi-clipboard2-check"></i>
                <span>ثبت سفارش</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center py-1 px-2">
                <i className="bi-clock"></i>
                <span>فعالیت های اخیر</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center py-1 px-2">
                <i className="bi-chat-left-dots"></i>
                <span>پیام ها</span>
            </div>
        </footer>
    )
}