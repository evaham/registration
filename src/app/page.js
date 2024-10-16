'use client'

import Image from "next/image";
import { useState } from 'react';
// import Modal from "./component/modal";

export default function Home() {
  const tabs = [
    { id: 1, name: '일반회원',},
    { id: 2, name: '사업자회원',},
  ];

  const terms = `회원가입 및 개인정보 제공 동의 고객님의 방문에 감사드립니다.

우리 매장은 개인정보보호법에 따라 고객님의 개인정보를 보호하고 이와 관련한 고
충을 신속하고 원활하게 처리할수 있도록 하기 위하여 최소한의 개인정보를 수집하
고 있으며 다음과 같이 고객님의 동의가필요합니다.

1.개인정보 수집 및 이용목적
① 회원가입. 회원 식별, 포인트 적립 등 기본적인 서비스 제공 및 마케칭 활용을 위하여 아래와 같이 개인정보를 수집합니다.
- 개인정보 수집 및 활용 주체 : 투게더마트 (TEL. 1577-4550)
- 수집항목과 이용목적
② 회원가입. 회원 식별, 포인트 적립 등 기본적인 서비스 제공 및 마케칭 활용을 위하여 아래와 같이 개인정보를 수집합니다.
③ 회원가입. 회원 식별, 포인트 적립 등...
 
  `

  // 탭 클릭시 컨텐츠변경
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  
  // 화면 숨기기
  const [isHidden, setIsHidden] = useState(false);
  const handleHide = () => {
    setIsHidden(true)
  }


  // 입력완료 버튼 스타일변경
  const [isOn, setIsOn] = useState(false);
  const handleButtonClick = () => {
    setIsOn(!isOn);
  };
  

  // 현재 창 닫기
  const handleClose = () => {
    window.close(); 
  };


  // 모달창
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };


  // 약관동의
  // const [agreeAll, setAgreeAll] = useState(false);
  // const [requiredAgreed, setRequiredAgreed] = useState(true);
  // const [optionalAgreed, setOptionalAgreed] = useState(false);

  // const handleAgreeAllChange = () => {
  //   const newAgreeAll = !agreeAll;
  //   setAgreeAll(newAgreeAll);
  //   setRequiredAgreed(newAgreeAll);
  //   setOptionalAgreed(newAgreeAll);
  // };

  // const handleRequiredChange = () => {
  //   const newRequiredAgreed = !requiredAgreed;
  //   setRequiredAgreed(newRequiredAgreed);
  //   setAgreeAll(newRequiredAgreed && optionalAgreed);
  // };

  // const handleOptionalChange = () => {
  //   const newOptionalAgreed = !optionalAgreed;
  //   setOptionalAgreed(newOptionalAgreed);
  //   setAgreeAll(newOptionalAgreed && requiredAgreed);
  // };





  return (
    <div className="">
      <div className="mx-4 pt-4 pb-6">
        <p className="text-4xl leading-tight font-bold tracking-tighter text-emerald-600/95">투게더마트</p>
        <p className="text-4xl leading-tight font-bold tracking-tighter text-slate-600"><span className="text-[#06CC99] italic mr-3">SPEED</span> 회원가입</p>
        {/* <p className="text-slate-500">137-81-39709</p> */}
      </div>

      {!isHidden && (
        <div className="overflow-y-scroll mt-4 mx-4 ">
          <p className="flex items-center text-slate-600 tracking-tighter">
            <svg xmlns="http://www.w3.org/2000/svg" className="flex w-3 h-3 mr-1 items-center fill-[#06CC99]" viewBox="0 -960 960 960">
              <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/>
            </svg>
            이용약관
          </p>
          <div className="overflow-y-scroll h-96 mt-2 p-4 bg-slate-100 rounded-md">
            <pre className=" font-sans ">{terms}</pre>
          </div>
        </div>
      )}

      {isHidden &&(
        <div className="mt-4">
          <div className="flex mx-4 rounded-full border font-bold border-slate-200 overflow-hidden">
            {tabs.map((tab) => (
              <a key={tab.id} className={`flex-1 py-3 text-center ${activeTab === tab.id ? 'bg-[#06CC99] text-white' : 'bg-slate-100 text-slate-400'}`} onClick={() => handleTabClick(tab.id)}>
                {tab.name}
              </a>
            ))}
          </div>
          

          {tabs.map((tab) => (
            <div key={tab.id} className="my-4" style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
              <form style={{display: 1 === tab.id ? 'block' : 'none'}}>
                <div className="mx-4 p-4 bg-slate-100 rounded-md">
                  <p className="flex items-center text-slate-600 tracking-tighter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex w-3 h-3 mr-1 items-center fill-[#06CC99]" viewBox="0 -960 960 960">
                      <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/>
                    </svg>
                    필수입력
                  </p>
                  <div className="my-4">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">고객명
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-pink-500 ml-1">
                        <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                      </svg>
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="text" name="name" id="name" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="고객명을 입력하세요"/>
                    </div>
                  </div>
                  <div className="my-4">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">휴대폰 번호
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-pink-500 ml-1">
                        <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                      </svg>
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="tel" name="phone" id="phone" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="휴대폰 번호를 입력하세요"/>
                      <div className="absolute inset-y-0 right-0 flex items-center"></div>
                    </div>
                  </div>
                  <p className="flex mt-32 mb-3 text-slate-600 items-center tracking-tighter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex w-3 h-3 mr-1 items-center fill-[#06CC99]" viewBox="0 -960 960 960">
                      <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/>
                    </svg>
                    선택입력
                  </p>
                  <div className="my-4">
                    <label className="block text-sm leading-6 text-slate-500 font-bold">주소</label>
                    {/* <div className="mt-1">
                      <a href="" className="block w-2/4 p-2 border text-center bg-blue-500 text-white rounded-md">우편번호 검색</a>
                    </div> */}
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="text" name="price" id="adress" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                    </div>
                    {/* <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="text" id="adressText" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="상세주소를 입력해주세요"/>
                    </div> */}
                  </div>
                </div>
              </form>
              <form style={{display: 2 === tab.id ? 'block' : 'none'}}>
                <div className="mx-4 p-4 bg-slate-100 rounded-md">
                  <p className="flex items-center text-slate-600 tracking-tighter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex w-3 h-3 mr-1 items-center fill-[#06CC99]" viewBox="0 -960 960 960">
                      <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/>
                    </svg>
                    필수입력
                  </p>
                  <div className="my-4">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold ">고객명
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-pink-500 ml-1">
                        <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                      </svg>
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="text" name="name" id="name" autoFocus className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="고객명을 입력하세요"/>
                    </div>
                  </div>
                  <div className="my-4">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">휴대폰 번호
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-pink-500 ml-1">
                        <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                      </svg>
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="tel" name="phone" id="phone" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="휴대폰 번호를 입력하세요"/>
                    </div>
                  </div>
                  <div className="my-4">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자명
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-pink-500 ml-1">
                        <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                      </svg>
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="tel" name="text" id="phone" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="사업자 상호를 입력하세요"/>
                    </div>
                  </div>
                  <div className="my-4">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자번호
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-pink-500 ml-1">
                        <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                      </svg>
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="tel" name="phone" id="phone" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="휴대폰 번호를 입력하세요"/>
                    </div>
                  </div>

                  <p className="flex mt-32 mb-3 text-slate-600 items-center tracking-tighter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex w-3 h-3 mr-1 items-center fill-[#06CC99]" viewBox="0 -960 960 960">
                      <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/>
                    </svg>
                    선택입력
                  </p>
                  <div className="my-4">
                    <label className="block text-sm leading-6 text-slate-500 font-bold">주소</label>
                    {/* <div className="mt-1">
                      <a href="" className="block w-2/4 p-2 border text-center bg-blue-500 text-white rounded-md">우편번호 검색</a>
                    </div> */}
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="text" name="price" id="adress" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                    </div>
                    {/* <div className="relative mt-1 rounded-md shadow-sm">
                      <input type="text" id="adressText" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="상세주소를 입력해주세요"/>
                    </div> */}
                  </div>
                </div>
              </form>
            </div>
          ))}
        </div>
      )}

      {/* <div className="mt-3 p-4">
        <p className="flex my-3 text-slate-600 items-center tracking-tighter">약관동의</p>
        <div className="mt-1 border rounded-md bg-slate-100">
          <div className="flex border-b p-4">
            <label className="flex">
              <input type="checkbox" checked={agreeAll} onChange={handleAgreeAllChange} className="hidden peer"/>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="fill-slate-300 mr-2 peer-checked:fill-blue-500" >
                <path d="M423.28-291.22 708.87-576.8l-62.46-62.7-223.13 223.13L312.15-527.5l-62.45 62.7 173.58 173.58ZM480-71.87q-84.91 0-159.34-32.12-74.44-32.12-129.5-87.17-55.05-55.06-87.17-129.5Q71.87-395.09 71.87-480t32.12-159.34q32.12-74.44 87.17-129.5 55.06-55.05 129.5-87.17 74.43-32.12 159.34-32.12t159.34 32.12q74.44 32.12 129.5 87.17 55.05 55.06 87.17 129.5 32.12 74.43 32.12 159.34t-32.12 159.34q-32.12 74.44-87.17 129.5-55.06 55.05-129.5 87.17Q564.91-71.87 480-71.87Z"/>
              </svg>
              모두동의
            </label>
          </div>
          <ul className="p-4">
            <li className="flex items-center">
              <label className="flex items-center">
                <input type="checkbox" checked={requiredAgreed} onChange={handleRequiredChange} className="hidden peer" />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-slate-300 mr-2 peer-checked:fill-blue-500" >
                  <path d="M423.28-291.22 708.87-576.8l-62.46-62.7-223.13 223.13L312.15-527.5l-62.45 62.7 173.58 173.58ZM480-71.87q-84.91 0-159.34-32.12-74.44-32.12-129.5-87.17-55.05-55.06-87.17-129.5Q71.87-395.09 71.87-480t32.12-159.34q32.12-74.44 87.17-129.5 55.06-55.05 129.5-87.17 74.43-32.12 159.34-32.12t159.34 32.12q74.44 32.12 129.5 87.17 55.05 55.06 87.17 129.5 32.12 74.43 32.12 159.34t-32.12 159.34q-32.12 74.44-87.17 129.5-55.06 55.05-129.5 87.17Q564.91-71.87 480-71.87Z"/>
                </svg>                   
                이용약관 <span className="ml-1 text-[#06CC99]">(필수)</span>
              </label>
              <button className="text-xs ml-auto underline" onClick={handleOpenModal}>내용보기</button>
            </li>
            <li className="flex items-center mt-4">
              <label className="flex items-center">
                <input type="checkbox" checked={optionalAgreed} onChange={handleOptionalChange} className="hidden peer" />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-slate-300 mr-2 peer-checked:fill-blue-500">
                  <path d="M423.28-291.22 708.87-576.8l-62.46-62.7-223.13 223.13L312.15-527.5l-62.45 62.7 173.58 173.58ZM480-71.87q-84.91 0-159.34-32.12-74.44-32.12-129.5-87.17-55.05-55.06-87.17-129.5Q71.87-395.09 71.87-480t32.12-159.34q32.12-74.44 87.17-129.5 55.06-55.05 129.5-87.17 74.43-32.12 159.34-32.12t159.34 32.12q74.44 32.12 129.5 87.17 55.05 55.06 87.17 129.5 32.12 74.43 32.12 159.34t-32.12 159.34q-32.12 74.44-87.17 129.5-55.06 55.05-129.5 87.17Q564.91-71.87 480-71.87Z"/>
                </svg>
                <span>쿠폰, 특가상품 이벤트 등 <br/>혜택/정보 수신<span className="ml-1 text-[#06CC99]">(선택)</span></span>
              </label>
              <button className="text-xs ml-auto underline" onClick={handleOpenModal}>내용보기</button>
            </li>
          </ul>
        </div>
      </div> */}
      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal> */}
      <div className="flex mt-5 p-4 gap-2 bg-white">
        <button className="block w-full p-3 border border-[#06CC99] rounded-md text-slate-600">취소</button>
        {!isHidden && (
          <button onClick={handleHide} className="block w-full p-3 border bg-[#06CC99] rounded-md text-white">동의하고 회원가입</button>
        )}
        {isHidden &&(
          <button onClick={handleButtonClick} className={`block w-full p-3 border text-center rounded-md ${isOn ? 'bg-[#06CC99] text-white' : 'bg-slate-100 text-slate-400'}`} >저장</button>
        )}
      </div>
    </div>
  );
}
