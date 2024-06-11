'use client'

import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const tabs = [
    { id: 1, name: '일반회원', content: (
    <form>
      <div className="p-4 bg-white">
        <p className="flex mt-4 items-center text-blue-500 tracking-tighter">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-6 h-6 fill-blue-500 mr-1">
            <path xmlns="http://www.w3.org/2000/svg" d="M389-235 163-460l84-85 142 142 324-323 84 84-408 407Z"/>  
          </svg>
          필수 입력사항
        </p>

        <div className="my-4">
          <label for="name" class="flex items-center text-sm leading-6 text-slate-500 font-bold">고객명
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-5 h-5 fill-blue-500 ml-1">
              <path xmlns="http://www.w3.org/2000/svg" d="M389-235 163-460l84-85 142 142 324-323 84 84-408 407Z"/>  
            </svg>
            
          </label>
          <div class="relative mt-1 rounded-md shadow-sm">
            <input type="text" name="name" id="name" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="고객명을 입력하세요"/>
          </div>
        </div>
        <div className="my-4">
          <label for="phone" class="flex items-center text-sm leading-6 text-slate-500 font-bold">휴대폰 번호
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-5 h-5 fill-blue-500 ml-1">
              <path xmlns="http://www.w3.org/2000/svg" d="M389-235 163-460l84-85 142 142 324-323 84 84-408 407Z"/>  
            </svg>

          </label>
          <div class="relative mt-1 rounded-md shadow-sm">
            <input type="tel" name="phone" id="phone" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="휴대폰 번호를 입력하세요"/>
            <div class="absolute inset-y-0 right-0 flex items-center"></div>
          </div>
        </div>
      </div>
      <div className="mt-3 p-4 bg-white">
        <p className="flex my-3 text-slate-600 items-center tracking-tighter">선택 입력사항</p>
        <div className="my-4">
          <label for="" class="block text-sm leading-6 text-slate-500 font-bold">주소</label>
          <div className="mt-1">
            <a href="" className="block w-2/4 p-2 border text-center bg-blue-500 text-white rounded-md">우편번호 검색</a>
          </div>
          <div class="relative mt-1 rounded-md shadow-sm">
            <input type="text" name="price" id="adress" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder=""/>
          </div>
          <div class="relative mt-1 rounded-md shadow-sm">
            <input type="text" id="adressText" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="상세주소를 입력해주세요"/>
          </div>
        </div>
      </div>
    </form>
    ) },
    { id: 2, name: '사업자회원', content: (
      <form>
        <div className="p-4 bg-white">
          <p className="flex mt-4 items-center text-blue-500 tracking-tighter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-6 h-6 fill-blue-500 mr-1">
              <path xmlns="http://www.w3.org/2000/svg" d="M389-235 163-460l84-85 142 142 324-323 84 84-408 407Z"/>  
            </svg>
            필수 입력사항
          </p>
          <div className="my-4">
            <label for="name" class="flex items-center text-sm leading-6 text-slate-500 font-bold ">고객명
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-5 h-5 fill-blue-500 ml-1">
                <path xmlns="http://www.w3.org/2000/svg" d="M389-235 163-460l84-85 142 142 324-323 84 84-408 407Z"/>  
              </svg>
            </label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" name="name" id="name" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="고객명을 입력하세요"/>
            </div>
          </div>
          <div className="my-4">
            <label for="phone" class="flex items-center text-sm leading-6 text-slate-500 font-bold">휴대폰 번호
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-5 h-5 fill-blue-500 ml-1">
                <path xmlns="http://www.w3.org/2000/svg" d="M389-235 163-460l84-85 142 142 324-323 84 84-408 407Z"/>  
              </svg>

            </label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="tel" name="phone" id="phone" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="휴대폰 번호를 입력하세요"/>
            </div>
          </div>
          <div className="my-4">
            <label for="phone" class="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자상호
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-5 h-5 fill-blue-500 ml-1">
                <path xmlns="http://www.w3.org/2000/svg" d="M389-235 163-460l84-85 142 142 324-323 84 84-408 407Z"/>  
              </svg>

            </label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="tel" name="phone" id="phone" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="사업자 상호를 입력하세요"/>
            </div>
          </div>
          <div className="my-4">
            <label for="phone" class="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자번호
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-5 h-5 fill-blue-500 ml-1">
                <path xmlns="http://www.w3.org/2000/svg" d="M389-235 163-460l84-85 142 142 324-323 84 84-408 407Z"/>  
              </svg>
            </label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="tel" name="phone" id="phone" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="휴대폰 번호를 입력하세요"/>
            </div>
          </div>


        </div>
        <div className="mt-3 p-4 bg-white">
          <p className="flex my-3 text-slate-600 items-center tracking-tighter">선택 입력사항</p>
          <div className="my-4">
            <label for="" class="block text-sm leading-6 text-slate-500 font-bold">주소</label>
            <div className="mt-1">
              <a href="" className="block w-2/4 p-2 border text-center bg-blue-500 text-white rounded-md">우편번호 검색</a>
            </div>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" name="price" id="adress" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder=""/>
            </div>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" id="adressText" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="상세주소를 입력해주세요"/>
            </div>
          </div>
        </div>
      </form>

    ) },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };



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
          <a key={tab.id} className={`flex-1 py-4 bg-slate-200 text-slate-400 text-center ${activeTab === tab.id ? 'bg-white text-slate-900' : ''}`} onClick={() => handleTabClick(tab.id)}>
            {tab.name}
          </a>
        ))}
      </div>


      {tabs.map((tab) => (
        <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
          {tab.content}
        </div>
      ))}


      <br />


      <div className=" mt-3 p-4 bg-white">
        <button onClick={handleButtonClick} className={`block w-full p-3 border text-center rounded-md ${isOn ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`} >회원 가입 하기</button>
      </div>
    </div>
  );
}
