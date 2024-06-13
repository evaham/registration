'use client'

import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const tabs = [
    { id: 1, name: '일반회원',},
    { id: 2, name: '사업자회원',},
  ];

  // 탭 클릭시 컨텐츠변경
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // 입력완료 버튼 스타일변경
  const [isOn, setIsOn] = useState(false);
  const handleButtonClick = () => {
    setIsOn(!isOn);
  };





  return (
    <div className="">
      <div className="p-4 py-10">
        <p className="text-4xl leading-tight font-bold tracking-tighter text-slate-700">투게더마트</p>
        <p className="text-4xl leading-tight font-bold tracking-tighter text-slate-700"><span className="text-blue-600 italic mr-3">SPEED</span> 회원가입</p>
        <p className="text-slate-500">137-81-39709</p>
      </div>
      <div className="flex font-bold border border-b-0 border-slate-200">
        {tabs.map((tab) => (
          <a key={tab.id} className={`flex-1 py-4 text-center ${activeTab === tab.id ? 'bg-white text-slate-800' : 'bg-slate-200 text-slate-400'}`} onClick={() => handleTabClick(tab.id)}>
            {tab.name}
          </a>
        ))}
      </div>


      {tabs.map((tab) => (
        <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>

          <form style={{display: 1 === tab.id ? 'block' : 'none'}}>
            <div className="p-4 bg-white">
              <p className="flex mt-4 items-center text-pink-500 tracking-tighter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-4 h-4 fill-pink-500 mr-1">
                  <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                </svg>
                필수 입력
              </p>

              <div className="my-4">
                <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">고객명
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-4 h-4 fill-pink-500 ml-1">
                    <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                  </svg>
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="text" name="name" id="name" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="고객명을 입력하세요"/>
                </div>
              </div>
              <div className="my-4">
                <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">휴대폰 번호
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-4 h-4 fill-pink-500 ml-1">
                    <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                  </svg>
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="tel" name="phone" id="phone" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="휴대폰 번호를 입력하세요"/>
                  <div className="absolute inset-y-0 right-0 flex items-center"></div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-4 bg-white">
              <p className="flex my-3 text-slate-600 items-center tracking-tighter">선택 입력</p>
              <div className="my-4">
                <label className="block text-sm leading-6 text-slate-500 font-bold">주소</label>
                <div className="mt-1">
                  <a href="" className="block w-2/4 p-2 border text-center bg-blue-500 text-white rounded-md">우편번호 검색</a>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="text" name="price" id="adress" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder=""/>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="text" id="adressText" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="상세주소를 입력해주세요"/>
                </div>
              </div>
            </div>
          </form>
          <form style={{display: 2 === tab.id ? 'block' : 'none'}}>
            
            <div className="p-4 bg-white">
              <p className="flex mt-4 items-center text-pink-500 tracking-tighter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-4 h-4 fill-pink-500 mr-1">
                  <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                </svg>
                필수 입력
              </p>
              <div className="my-4">
                <label className="flex items-center text-sm leading-6 text-slate-500 font-bold ">고객명
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-4 h-4 fill-pink-500 ml-1">
                    <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                  </svg>
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="text" name="name" id="name" autoFocus className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="고객명을 입력하세요"/>
                </div>
              </div>
              <div className="my-4">
                <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">휴대폰 번호
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-4 h-4 fill-pink-500 ml-1">
                    <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                  </svg>

                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="tel" name="phone" id="phone" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="휴대폰 번호를 입력하세요"/>
                </div>
              </div>
              <div className="my-4">
                <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자상호
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-4 h-4 fill-pink-500 ml-1">
                    <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                  </svg>

                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="tel" name="phone" id="phone" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="사업자 상호를 입력하세요"/>
                </div>
              </div>
              <div className="my-4">
                <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자번호
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-4 h-4 fill-pink-500 ml-1">
                    <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                  </svg>
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="tel" name="phone" id="phone" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="휴대폰 번호를 입력하세요"/>
                </div>
              </div>


            </div>
            <div className="mt-3 p-4 bg-white">
              <p className="flex my-3 text-slate-600 items-center tracking-tighter">선택 입력</p>
              <div className="my-4">
                <label className="block text-sm leading-6 text-slate-500 font-bold">주소</label>
                <div className="mt-1">
                  <a href="" className="block w-2/4 p-2 border text-center bg-blue-500 text-white rounded-md">우편번호 검색</a>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="text" name="price" id="adress" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder=""/>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input type="text" id="adressText" className="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="상세주소를 입력해주세요"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      ))}



      <div className=" mt-3 p-4 bg-white">
        <button onClick={handleButtonClick} className={`block w-full p-3 border text-center rounded-md ${isOn ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`} >회원 가입 하기</button>
      </div>
    </div>
  );
}
