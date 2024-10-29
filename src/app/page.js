'use client'

import { useState,useRef } from 'react';
// import Modal from "./component/modal";

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
  


  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (e) => {
    setActivePage(e)
  }



  // 화면 숨기기
  const [isHidden, setIsHidden] = useState(false);
  const handleHide = () => {
    setIsHidden(true)
  }

  // 입력완료 버튼 스타일변경
  // const [isOn, setIsOn] = useState(false);
  // const handleButtonClick = () => {
  //   setIsOn(!isOn);
  // };
  
  // 현재 창 닫기
  const handleClose = () => {
    window.close(); 
  };

  // 휴대전화 입력 포커스 넘기기
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

  // 사업자번호 입력 포커스 넘기기
  const input5Ref = useRef(null); // 두 번째 input 필드를 참조
  const input6Ref = useRef(null); // 세 번째 input 필드를 참조

  // 첫 번째 입력 필드에서 3자리 입력되면 두 번째 필드로 이동
  const handleInput4Change = (e) => {
    if (e.target.value.length >= 3) {
      input5Ref.current.focus();
    }
  };

  // 두 번째 입력 필드에서 2자리 입력되면 세 번째 필드로 이동
  const handleInput5Change = (e) => {
    if (e.target.value.length >= 2) {
      input6Ref.current.focus();
    }
  };


  const [input1, setInput1] = useState(''); // 첫 번째 필드 상태
  const [input2, setInput2] = useState(''); // 두 번째 필드 상태
  const [input3, setInput3] = useState(''); // 세 번째 필드 상태
  const [input4, setInput4] = useState(''); // 세 번째 필드 상태
  const [input5, setInput5] = useState(''); // 세 번째 필드 상태
  const [input6, setInput6] = useState(''); // 세 번째 필드 상태
  const [input7, setInput7] = useState(''); // 세 번째 필드 상태
  const [input8, setInput8] = useState(''); // 세 번째 필드 상태

  const isTab1Valid = input1.length > 0 && input2.length > 2 && input3.length > 3 && input4.length > 3;
  const isTab2Valid = input1.length > 0 && input2.length > 2 && input3.length > 3 && input4.length > 3 && input5.length > 0 && input6.length > 2 && input7.length > 1 && input8.length > 4;

  const isButtonEnabled = activeTab === 1 ? isTab1Valid : isTab2Valid;

  return (
    <div className="max-w-96 mx-auto">
      <div className="mx-4 py-4">
        <p className="text-4xl leading-tight font-bold tracking-tighter text-emerald-600/95">투게더마트</p>
        <p className="text-4xl leading-tight font-bold tracking-tighter text-slate-600"><span className="text-[#06CC99] italic mr-3">SPEED</span> 회원가입</p>
      </div>

      {/* 에러화면 */}
      {activePage === 1 &&(
        <div className="mt-4 mx-4">
          <div className="flex flex-col h-96 mt-2 px-8 py-4 bg-slate-100 rounded-md text-slate-600">
            <div className="mt-6 text-xl tracking-tighter">
              <img src="image/img_err.png" alt="error" className="w-28" />
            </div>
            <p className="mt-6 text-xl font-bold">죄송합니다.<br />오류가 발생하였습니다.</p>
            <p className="mt-6 text-lg"><b className="text-emerald-600">매장 관리자</b> 또는 <b className="text-emerald-600">담당자</b>에게 <br />확인해주세요 </p>
          </div>

          <div className="flex flex-col h-96 mt-2 px-8 py-4 bg-slate-100 rounded-md text-slate-600">
            <div className="mt-6 text-xl tracking-tighter">
              <img src="image/img_cong.png" alt="error" className="w-28" />
            </div>
            <p className="mt-6 text-xl font-bold">축하합니다.<br />가입이 완료되었습니다.</p>
            <p className="mt-6 text-lg">지금부터 <b className="text-emerald-600">포인트 적립</b> 또는 <b className="text-emerald-600">사용</b>을 <br />할 수 있습니다.</p>
          </div>

        </div>
      )}
      {/* 이용약관 */}
      {activePage === 2 && (
        <div className="mt-4 mx-4">
          <p className="flex items-center text-slate-600 tracking-tighter">
            <svg xmlns="http://www.w3.org/2000/svg" className="flex w-3 h-3 mr-1 items-center fill-[#06CC99]" viewBox="0 -960 960 960">
              <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/>
            </svg>
            이용약관
          </p>
          <div className="overflow-y-scroll flex h-96 mt-2 p-4 bg-slate-100 rounded-md">
            <div className="flex flex-col flex-1 font-sans break-all text-slate-800">
            <b className="text-lg mb-4">회원가입 약관</b>
            <b className="mt-6 mb-4">회원가입 및 개인정보 제공 동의</b>
            고객님의 방문에 감사드립니다.
            <br /><br />
            우리 매장은 개인정보보호법에 따라 고객님의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여   최소한의 개인정보를 수집하고 있으며 다음과 같이 고객님의 동의가 필요합니다.

            <b className="mt-6 mb-4">1. 개인정보 수집 및 이용목적</b>
            ① 회원 가입, 회원 식별, 포인트 적립 등 기본적인 서비스 제공 및 마케팅 활용을 위하여 아래와 같이 개인정보를 수집합니다.
            <br /><br />
            ○ 개인정보 수집 및 활용 주체 : 주식회사 투게더마트 (TEL : 1577-4550)
            <br /><br />
            ○ 수집항목과 이용목적
            <br /><br />

            <table className="table-fix mt-6 leading-tight">
              <colgroup>
                <col className="w-12" />
                <col className="w-24" />
              </colgroup>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-1">구분</td>
                  <td className="border border-slate-300 p-1">수집항목</td>
                  <td className="border border-slate-300 p-1">이용목적</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-1">필수</td>
                  <td className="border border-slate-300 p-1">성명, <br />휴대폰번호</td>
                  <td className="border border-slate-300 p-1">포인트적립/사용, <br/>고객상담, <br/>본인확인</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-1">선택</td>
                  <td className="border border-slate-300 p-1">주소</td>
                  <td className="border border-slate-300 p-1">물품배송</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-1">선택</td>
                  <td className="border border-slate-300 p-1">생년월일, <br />성별</td>
                  <td className="border border-slate-300 p-1">회원관리, <br/>이벤트, <br/>마케팅분석</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-1">선택</td>
                  <td className="border border-slate-300 p-1">사업자명, <br />사업번호</td>
                  <td className="border border-slate-300 p-1">세금계산서 발행, <br/>고객상담</td>
                </tr>
              </tbody>
            </table>
            
            <br />
            ② 회원가입, 개인정보 수집/이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 매장에서 제공하는 서비스(포인트 적립, 사용, 상품 배송, 이벤트 제공, 문의 대응 등)에 제약이 있을 수 있습니다.
            <br /><br />
            ③ 상기 이용목적 이외는 개인정보를 사용하지 않습니다.
            <br /><br />
            ④ 만14세 미만 이용자는 회원가입 및 개인정보 수집을 처리하지 않습니다.
            <br /><br />

            <b className="mt-6 mb-4">2. 개인정보 처리 및 보유기간</b>
            ① 수집한 개인정보의 수집목적이 모두 달성될 때까지 해당 개인정보를 보유합니다.
            <br />
            ② 회원탈퇴 요청 시 고객문의 대응 후 개인정보를 즉시 파기 합니다.
            <br />
            ③ 법률 기관의 요구에 의한 경우 파기기간이 연장될 수 있습니다.
            <br /><br />

            <b className="mt-6 mb-4">3. 개인정보의 3자 제공</b>
            고객의 별도 동의가 있거나 다른 법률에 특별한 규정이 존재하는 경우 이외에는 개인정보를 3자에게 제공하지 않습니다.
            <br /><br />

            <b className="mt-6 mb-4">4. 회원 탈퇴</b>
            회원으로 가입된 고객은 언제든지 방문, 서면 등으로 회원탈퇴를 요청할 수 있습니다.
            <br /><br /><br /><br />


            </div>
          </div>
        </div>
      )}
      {/* 회원가입 입력폼 */}
      {activePage === 3 &&(
        <div className="">
          <div className="flex mx-4 rounded-full border font-bold border-slate-200 overflow-hidden">
            {tabs.map((tab) => (
              <a key={tab.id} id={tab.id} className={`flex-1 py-3 text-center ${activeTab === tab.id ? 'bg-[#06CC99] text-white' : 'bg-slate-100 text-slate-400'}`} onClick={() => handleTabClick(tab.id)}>
                {tab.name}
              </a>
            ))}
          </div>

          <div className="mt-4 my-2">
            <form>
              <div className="mx-4 px-8 py-4 bg-slate-100 rounded-md">
                <div className="mb-2">
                  <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">고객명<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                  <div className="relative mt-1">
                    <input type="text" name="name" value={input1} onChange={(e)=>{setInput1(e.target.value)}} className="block w-full p-1.5 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none text-lg placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                  </div>
                </div>
                <div className="my-2">
                  <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">휴대폰 번호<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                  <div className="relative flex mt-0.5 gap-1 items-center">
                    <input type="tel" name="phone" value={input2} maxLength={3} onChange={(e)=>{setInput2(e.target.value); handleInput1Change(e)}} className="flex-1 min-w-0 px-1.5 py-1 rounded-md border border-slate-300 shadow-sm text-gray-900 text-center outline-none text-lg placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                    <span>-</span>
                    <input type="tel" name="phone" value={input3} maxLength={4} onChange={(e)=>{setInput3(e.target.value);handleInput2Change(e)}} ref={input2Ref} className="flex-1 min-w-0 px-1.5 py-1 rounded-md border border-slate-300 shadow-sm text-gray-900 text-center outline-none text-lg placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                    <span>-</span>
                    <input type="tel" name="phone" value={input4} maxLength={4} ref={input3Ref} onChange={(e)=>{setInput4(e.target.value)}} className="flex-1 min-w-0 px-1.5 py-1 rounded-md border border-slate-300 shadow-sm text-gray-900 text-center outline-none text-lg placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                  </div>
                </div>
                
                {activeTab === 2 &&(
                  <div>
                    <div className="my-2">
                      <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자명<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                      <div className="relative mt-0.5">
                        <input type="text" name="text" value={input5} onChange={(e)=>{setInput5(e.target.value)}} className="block w-full px-1.5 py-1 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none text-lg placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                      </div>
                    </div>
                    <div className="my-2">
                      <label className="flex items-center text-sm leading-6 text-slate-500 font-bold">사업자번호<span className="ml-1 text-xs text-pink-400">(필수)</span></label>
                      <div className="relative flex mt-0.5 gap-1 items-center">
                        <input type="tel" name="number" value={input6} maxLength={3} onChange={(e)=>{setInput6(e.target.value); handleInput4Change(e)}} className="flex-1 min-w-0 px-1.5 py-1 rounded-md border border-slate-300 shadow-sm text-gray-900 text-center outline-none text-lg placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                        <span>-</span>
                        <input type="tel" name="number" value={input7} maxLength={2} onChange={(e)=>{setInput7(e.target.value); handleInput5Change(e)}} ref={input5Ref} className="flex-1 min-w-0 px-1.5 py-1 rounded-md border border-slate-300 shadow-sm text-gray-900 text-center outline-none text-lg placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                        <span>-</span>
                        <input type="tel" name="number" value={input8} maxLength={5} onChange={(e)=>{setInput8(e.target.value)}} ref={input6Ref} className="flex-1 min-w-0 px-1.5 py-1 rounded-md border border-slate-300 shadow-sm text-gray-900 text-center outline-none text-lg placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                      </div>
                    </div>
                  </div>
                )}

                <div className="my-2">
                  <label className="block text-sm leading-6 text-slate-500 font-bold">주소</label>
                  <div className="relative mt-1">
                    <input type="text" name="price" id="adress" className="block w-full px-1.5 py-1 rounded-md border border-slate-300 shadow-sm text-gray-900 outline-none text-lg placeholder:text-gray-400 focus:border-[#06CC99]" placeholder=""/>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {activePage === 1 &&(
        <div className="flex mt-2 px-4 py-3 gap-2 bg-white">
          <button className="block w-full p-3 border border-[#06CC99] rounded-md text-slate-600">취소</button>
          <button onClick={()=>handlePageClick(2)} className="block w-full p-3 border bg-[#06CC99] rounded-md text-white">다시 연결</button>
        </div>
      )}
      {activePage === 2 &&(
        <div className="flex mt-2 px-4 py-3 gap-2 bg-white">
          <button onClick={()=>handlePageClick(1)} className="block w-full p-3 border border-[#06CC99] rounded-md text-slate-600">취소</button>
          <button onClick={()=>handlePageClick(3)} className="block w-full p-3 border bg-[#06CC99] rounded-md text-white">동의하고 회원가입</button>
        </div>
      )}
      {activePage === 3 &&(
        <div className="flex mt-2 px-4 py-3 gap-2 bg-white">
          <button onClick={()=>handlePageClick(2)} className="block w-full p-3 border border-[#06CC99] rounded-md text-slate-600">취소</button>
          <button disabled={!isButtonEnabled} className={`block w-full p-3 border text-center rounded-md ${isButtonEnabled ? 'bg-[#06CC99] text-white' : 'bg-slate-100 text-slate-400'}`} >저장</button>
        </div>
      )}
    </div>
  );
}
