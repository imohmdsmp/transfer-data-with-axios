import { useEffect } from "react"

function InsideCompany(){
    return(
        <form action="#" className="flex-column px-2 form-on" id="inside">
            <label htmlFor="companyName"></label>
            <input className="text-end" type="text" id="companyName" placeholder="نام شرکت"/>

            <label htmlFor="companyNum"></label>
            <input className="text-end" type="text" id="companyNum" placeholder="شماره ملی شرکت"/>
            
            <label htmlFor="companyRecord"></label>
            <input className="text-end" type="text" id="companyRecord" placeholder="شماره ثبت شرکت"/>

            <label htmlFor="phoneNum"></label>
            <input className="text-end" type="text" id="phoneNum" placeholder="شماره تماس"/>


            <label htmlFor="faxNum"></label>
            <input className="text-end" type="text" id="faxNum" placeholder="شماره فکس"/>


            <label htmlFor="webNum"></label>
            <input className="text-end" type="text" id="webNum" placeholder="شماره اینترنتی"/>
            
            <label htmlFor="address"></label>
            <input className="text-end" type="text" id="address" placeholder="آدرس"/>
            
            <label htmlFor="seoName"></label>
            <input className="text-end" type="text" id="seoName" placeholder="نام و نام خوانوادگی مدیر عامل"/>
            
            <label htmlFor="agentName"></label>
            <input className="text-end" type="text" id="agentName" placeholder="نام و نام خوانوادگی نماینده"/>
            
            <label htmlFor="agentNum"></label>
            <input className="text-end" type="text" id="agentNum" placeholder="شماره تماس نماینده"/>
            
        </form>
    )
}

function OuterCompany(){
    return(
        <form action="#" className="flex-column px-2" id="outer">
            <label htmlFor="companyName1"></label>
            <input className="text-end" type="text" id="companyName1" placeholder="نام شرکت خارجی"/>

            <label htmlFor="companyNum1"></label>
            <input className="text-end" type="text" id="companyNum1" placeholder="شماره ملی شرکت خارجی"/>
            
            <label htmlFor="companyRecord1"></label>
            <input className="text-end" type="text" id="companyRecord1" placeholder="شماره ثبت شرکت خارجی"/>

            <label htmlFor="phoneNum1"></label>
            <input className="text-end" type="text" id="phoneNum1" placeholder="شماره تماس"/>


            <label htmlFor="faxNum1"></label>
            <input className="text-end" type="text" id="faxNum1" placeholder="شماره فکس"/>


            <label htmlFor="webNum1"></label>
            <input className="text-end" type="text" id="webNum1" placeholder="شماره اینترنتی"/>
            
            <label htmlFor="address1"></label>
            <input className="text-end" type="text" id="address1" placeholder="آدرس"/>
            
            <label htmlFor="seoName1"></label>
            <input className="text-end" type="text" id="seoName1" placeholder="نام و نام خوانوادگی مدیر عامل"/>
            
            <label htmlFor="agentName1"></label>
            <input className="text-end" type="text" id="agentName1" placeholder="نام و نام خوانوادگی نماینده"/>
            
            <label htmlFor="agentNum1"></label>
            <input className="text-end" type="text" id="agentNum1" placeholder="شماره تماس نماینده"/>
        </form>
    )
}






export default function ProfileSec(){
    

    useEffect(()=>{
        const switchBtn = document.querySelectorAll('.switch > div')
        const formUi = document.querySelectorAll('.profile-sec-form form')
        const footerHeight = document.querySelector('footer').scrollHeight
        const formHeight = document.getElementsByClassName('form-on')[0].style.cssText='height:calc(100vh - '+(footerHeight + formUi[0].offsetTop)+'px)'
        console.log(formHeight)


        switchBtn.forEach((item)=>{
            item.onclick = ()=>{
                for(let i =0;i<switchBtn.length;i++){
                    switchBtn[i].classList.remove('switch-on')
                }
                const switchId = item.getAttribute('data-target')
                formUi.forEach((index)=>{
                    index.classList.remove('form-on')
                    index.style.cssText=''
                })
                document.getElementById(switchId).classList.add('form-on')
                document.getElementById(switchId).style.cssText=formHeight
                item.classList.add('switch-on')
                
            }
        })
    })



    return(
        <div className="container-fluid page-on" id="profileSec">
            <div className="row">
                <div className="col-12 profile-img my-1">
                    <i className="bi-person"></i>
                </div>


                <div className="col d-flex switch">
                    <div className="col ps-2" data-target="outer">
                        نماینده شرکت خارجی
                    </div>
                    <div className="col text-center switch-on" data-target="inside">
                        شرکت ایرانی
                    </div>
                </div>


                <div className="mt-2 profile-sec-form" >
                    <InsideCompany/>
                    <OuterCompany/>
                </div>
            </div>
        </div>
    )
}