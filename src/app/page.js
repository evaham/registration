import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="p-4 py-10">
        <p className="text-4xl leading-tight font-bold tracking-tighter text-slate-700">투게더마트</p>
        <p className="text-4xl leading-tight font-bold tracking-tighter text-slate-700"><span className="text-blue-600 italic mr-3">SPEED</span> 회원가입</p>
        <p className="text-slate-500">137-81-39709</p>
      </div>
      <div className="flex font-bold border border-b-0 border-slate-200">
        <a href="" className="flex-1 py-4 bg-white text-center">일반회원</a>
        <a href="" className="flex-1 py-4 bg-slate-200 text-slate-400 text-center">사업자회원</a>
      </div>


      <div>
        <div className="p-4 bg-white">
          <p className="flex mt-4 text-slate-600 items-center">필수 입력사항</p>
          <div className="my-4">
            <label for="name" class="block text-sm leading-6 text-slate-500 font-bold">고객명</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" name="name" id="name" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="고객명을 입력하세요"/>
            </div>
          </div>
          <div className="my-4">
            <label for="phone" class="block text-sm leading-6 text-slate-500 font-bold">휴대폰번호</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="tel" name="phone" id="phone" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="휴대폰 번호를 입력하세요"/>
              <div class="absolute inset-y-0 right-0 flex items-center"></div>
            </div>
          </div>
        </div>
        <div className="mt-3 p-4 bg-white">
          <p className="flex my-3 text-slate-600 items-center">선택입력사항</p>
          <div className="my-4">
            <label for="" class="block text-sm leading-6 text-slate-500 font-bold">주소</label>
            <div className="mt-1">
              <a href="" className="block w-2/4 p-2 border text-center bg-blue-500 text-white">우편번호 검색</a>
            </div>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" name="price" id="adress" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder=""/>
            </div>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" id="adressText" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="상세주소를 입력해주세요"/>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="p-4 bg-white">
          <p className="flex mt-4 text-slate-600 items-center">필수 입력사항</p>
          <div className="my-4">
            <label for="name" class="block text-sm leading-6 text-slate-500 font-bold">고객명</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" name="name" id="name" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="고객명을 입력하세요"/>
            </div>
          </div>
          <div className="my-4">
            <label for="phone" class="block text-sm leading-6 text-slate-500 font-bold">휴대폰번호</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="tel" name="phone" id="phone" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="휴대폰 번호를 입력하세요"/>
            </div>
          </div>
          <div className="my-4">
            <label for="phone" class="block text-sm leading-6 text-slate-500 font-bold">사업자상호</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="tel" name="phone" id="phone" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="사업자 상호를 입력하세요"/>
            </div>
          </div>
          <div className="my-4">
            <label for="phone" class="block text-sm leading-6 text-slate-500 font-bold">사업자번호</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="tel" name="phone" id="phone" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="휴대폰 번호를 입력하세요"/>
            </div>
          </div>


        </div>
        <div className="mt-3 p-4 bg-white">
          <p className="flex my-3 text-slate-600 items-center">선택입력사항</p>
          <div className="my-4">
            <label for="" class="block text-sm leading-6 text-slate-500 font-bold">주소</label>
            <div className="mt-1">
              <a href="" className="block w-2/4 p-2 border text-center bg-blue-500 text-white">우편번호 검색</a>
            </div>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" name="price" id="adress" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder=""/>
            </div>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" id="adressText" class="block w-full rounded-md border border-slate-300 p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="상세주소를 입력해주세요"/>
            </div>
          </div>
        </div>
      </div>




      <div className="mt-3 p-4 bg-white">
        <a href="#" className="block p-3 border text-center bg-blue-600 text-white">입력완료</a>
      </div>
    </div>
  );
}
