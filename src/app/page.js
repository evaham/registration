'use client'

import Image from "next/image";
import { useState,useRef } from 'react';
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

  // 휴대전호 입력값 넘기기
  const input2Ref = useRef(null); // 두 번째 input 필드를 참조
  const input3Ref = useRef(null); // 세 번째 input 필드를 참조

  // 첫 번째 입력 필드에서 3자리 입력되면 두 번째 필드로 이동
  const handleInput1Change = (e) => {
    if (e.target.value.length >= 3) {
      input2Ref.current.focus();
    }
  };

  // 두 번째 입력 필드에서 4자리 입력되면 세 번째 필드로 이동
  const handleInput2Change = (e) => {
    if (e.target.value.length >= 4) {
      input3Ref.current.focus();
    }
  };

  return (
    <div className="">
      <div className="mx-4 py-4">
        <p className="text-4xl leading-tight font-bold tracking-tighter text-emerald-600/95">투게더마트</p>
        <p className="text-4xl leading-tight font-bold tracking-tighter text-slate-600"><span className="text-[#06CC99] italic mr-3">SPEED</span> 회원가입</p>
      </div>

      {!isHidden && (
        <div className="mt-4 mx-4 ">
          <p className="flex items-center text-slate-600 tracking-tighter">
            <svg xmlns="http://www.w3.org/2000/svg" className="flex w-3 h-3 mr-1 items-center fill-[#06CC99]" viewBox="0 -960 960 960">
              <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/>
            </svg>
            이용약관
          </p>
          <div className="overflow-y-scroll flex h-96 mt-2 p-4 bg-slate-100 rounded-md">
            <pre className="flex flex-1 font-sans whitespace-pre-wrap">{terms}</pre>
          </div>
        </div>
      )}

      {isHidden &&(
        <div className="">
          <div className="flex mx-4 rounded-full border font-bold border-slate-200 overflow-hidden">
            {tabs.map((tab) => (
              <a key={tab.id} className={`flex-1 py-3 text-center ${activeTab === tab.id ? 'bg-[#06CC99] text-white' : 'bg-slate-100 text-slate-400'}`} onClick={() => handleTabClick(tab.id)}>
                {tab.name}
              </a>
            ))}
          </div>
          

          {tabs.map((tab) => (
            <div key={tab.id} className="mt-4 my-2" style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
              <form style={{display: 1 === tab.id ? 'block' : 'none'}}>
                <div className="mx-4 p-4 bg-slate-100 rounded-md">
                  <div className="mb-2">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">고객명<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                    <div className="relative mt-1">
                      <input type="text" name="name" id="name" className="block w-full p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="고객명을 입력하세요"/>
                    </div>
                  </div>
                  <div className="my-2">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">휴대폰 번호<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                    <div className="relative mt-1">
                      <input type="tel" name="phone" id="phone" className="block w-full p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="휴대폰 번호를 입력하세요"/>
                      <div className="absolute inset-y-0 right-0 flex items-center"></div>
                    </div>
                  </div>

                  <div className="my-2">
                    <label className="block text-sm leading-6 text-slate-500 font-bold">주소</label>
                    <div className="relative mt-1">
                      <input type="text" name="price" id="adress" className="block w-full p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                    </div>
                  </div>
                </div>
              </form>
              <form style={{display: 2 === tab.id ? 'block' : 'none'}}>
                <div className="mx-4 p-4 bg-slate-100 rounded-md">
                  <div className="mb-2">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold ">고객명<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                    <div className="relative mt-0.5">
                      <input type="text" name="name" id="name" autoFocus className="block w-full p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="고객명을 입력하세요"/>
                    </div>
                  </div>
                  <div className="my-2">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">휴대폰 번호<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                    <div className="relative flex mt-0.5 gap-1 items-center">
                      <input type="tel" name="phone" id="phone" maxLength={3} onChange={handleInput1Change} className="flex flex-1 min-w-20 p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                      <span>-</span>
                      <input type="tel" name="phone" id="phone" maxLength={4} onChange={handleInput2Change} ref={input2Ref} className="flex flex-1 min-w-20 p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                      <span>-</span>
                      <input type="tel" name="phone" id="phone" maxLength={4} ref={input3Ref} className="flex flex-1 min-w-20 p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                    </div>
                  </div>
                  <div className="my-2">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자명<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                    <div className="relative mt-0.5">
                      <input type="tel" name="text" id="phone" className="block w-full p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="사업자명을 입력하세요"/>
                    </div>
                  </div>
                  <div className="my-2">
                    <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자번호<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                    <div className="relative mt-0.5">
                      <input type="tel" name="phone" id="phone" className="block w-full p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder="사업자번호를 입력하세요"/>
                    </div>
                  </div>

                  <div className="my-2">
                    <label className="block text-sm leading-6 text-slate-500 font-bold">주소</label>
                    <div className="relative mt-0.5">
                      <input type="text" name="price" id="adress" className="block w-full p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none  placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ))}
        </div>
      )}
      <div className="flex mt-2 px-4 py-3 gap-2 bg-white">
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
