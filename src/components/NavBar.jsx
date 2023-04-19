import React from 'react'

export default function NavBar() {
  return (
        <div className="bg-white shadow p-8  font-Inter">
          <div className="flex justify-between">
           <div className="">
           <h2 className="font-bold text-3xl text-[#000000] justify-center"> New Campaign Run</h2>
           <p className="text-[#B8B9BD] text-sm mt-2">A new campaign launch work for brand new featur in May month </p>
           </div>
          <span className="bg-[#000000] text-[#FFFFFF] font-normal  rounded-xl py-4 px-6 cursor-pointer  tracking-widest">ADD MEMBERS </span>
           </div>

          <div className="flex justify-between mt-16">
          <div className="flex items-center gap-4">
              <img src="Size32.png" alt=""/>
              <p className="text-[#B8B9BD] text-sm "> 8 member</p>
           </div>
 
 {/* Participants View */}
 <div className="flex gap-7 text-[#7D8088] text-sm items-center">
         <div  className="flex gap-2 items-center">
           <svg className="inline-block w-5" width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6562 14.74C15.9964 13.8477 17.014 12.5478 17.5583 11.0326C18.1027 9.51727 18.1449 7.86703 17.6788 6.32587C17.2127 4.78471 16.2631 3.43445 14.9702 2.47478C13.6774 1.5151 12.11 0.996948 10.4999 0.996948C8.88984 0.996948 7.32249 1.5151 6.02965 2.47478C4.73682 3.43445 3.78714 4.78471 3.32105 6.32587C2.85497 7.86703 2.89722 9.51727 3.44156 11.0326C3.9859 12.5478 5.00344 13.8477 6.34369 14.74C3.9193 15.6335 1.84882 17.287 0.44119 19.4537C0.36721 19.5637 0.315823 19.6873 0.290017 19.8172C0.26421 19.9472 0.264499 20.0811 0.290866 20.2109C0.317234 20.3408 0.369154 20.4641 0.443608 20.5738C0.518063 20.6834 0.613566 20.7772 0.724568 20.8496C0.83557 20.922 0.959855 20.9716 1.0902 20.9955C1.22054 21.0195 1.35435 21.0173 1.48383 20.989C1.61332 20.9608 1.73591 20.9071 1.84446 20.8311C1.95302 20.7551 2.04539 20.6583 2.11619 20.5462C3.02418 19.1497 4.26664 18.0021 5.73074 17.2077C7.19484 16.4133 8.8342 15.9972 10.4999 15.9972C12.1657 15.9972 13.805 16.4133 15.2691 17.2077C16.7332 18.0021 17.9757 19.1497 18.8837 20.5462C19.0304 20.7642 19.2569 20.9157 19.5144 20.968C19.7719 21.0203 20.0396 20.9691 20.2597 20.8256C20.4797 20.6821 20.6345 20.4577 20.6904 20.201C20.7464 19.9443 20.6991 19.6758 20.5587 19.4537C19.1511 17.287 17.0806 15.6335 14.6562 14.74ZM4.99994 8.49999C4.99994 7.41219 5.32251 6.34883 5.92686 5.44436C6.5312 4.53988 7.39019 3.83494 8.39518 3.41865C9.40017 3.00237 10.506 2.89345 11.5729 3.10567C12.6398 3.31789 13.6198 3.84171 14.389 4.6109C15.1582 5.38009 15.682 6.3601 15.8943 7.42699C16.1065 8.49389 15.9976 9.59976 15.5813 10.6048C15.165 11.6097 14.46 12.4687 13.5556 13.0731C12.6511 13.6774 11.5877 14 10.4999 14C9.04176 13.9983 7.64377 13.4183 6.61268 12.3873C5.58159 11.3562 5.00159 9.95817 4.99994 8.49999ZM31.2674 20.8375C31.0453 20.9823 30.7747 21.033 30.5153 20.9784C30.2558 20.9238 30.0286 20.7683 29.8837 20.5462C28.9768 19.1489 27.7345 18.0008 26.2701 17.2067C24.8057 16.4126 23.1658 15.9978 21.4999 16C21.2347 16 20.9804 15.8946 20.7928 15.7071C20.6053 15.5196 20.4999 15.2652 20.4999 15C20.4999 14.7348 20.6053 14.4804 20.7928 14.2929C20.9804 14.1053 21.2347 14 21.4999 14C22.3099 13.9992 23.1097 13.8196 23.8422 13.4739C24.5747 13.1282 25.2218 12.625 25.7372 12.0002C26.2527 11.3754 26.6238 10.6445 26.824 9.85971C27.0243 9.07489 27.0487 8.25553 26.8956 7.46018C26.7424 6.66482 26.4155 5.91311 25.9382 5.25874C25.4609 4.60437 24.8449 4.0635 24.1343 3.67478C23.4237 3.28606 22.6361 3.05909 21.8276 3.01007C21.0191 2.96106 20.2098 3.09121 19.4574 3.39124C19.3348 3.44427 19.2027 3.47217 19.0691 3.4733C18.9355 3.47443 18.803 3.44876 18.6794 3.39782C18.5559 3.34687 18.4438 3.27168 18.3498 3.17668C18.2558 3.08168 18.1818 2.96881 18.1322 2.84473C18.0825 2.72065 18.0583 2.58788 18.0608 2.45426C18.0634 2.32065 18.0927 2.1889 18.147 2.06681C18.2013 1.94471 18.2796 1.83474 18.3771 1.7434C18.4747 1.65205 18.5895 1.58119 18.7149 1.53499C20.4368 0.848305 22.3519 0.823594 24.0909 1.46562C25.8298 2.10766 27.2694 3.37094 28.1319 5.01176C28.9944 6.65259 29.2187 8.55469 28.7616 10.3511C28.3044 12.1476 27.1981 13.7111 25.6562 14.74C28.0806 15.6335 30.1511 17.287 31.5587 19.4537C31.7035 19.6759 31.7542 19.9464 31.6996 20.2059C31.645 20.4654 31.4895 20.6926 31.2674 20.8375Z" fill="#7D8088"/></svg>
<p>Participants View</p>
</div>
{/* Board View */}
      <div className="flex gap-2 items-center">
          <svg className="inline-block w-3" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H7C7.53043 24 8.03914 23.7893 8.41421 23.4142C8.78929 23.0391 9 22.5304 9 22V2C9 1.46957 8.78929 0.960859 8.41421 0.585786C8.03914 0.210714 7.53043 0 7 0ZM7 22H2V2H7V22ZM18 0H13C12.4696 0 11.9609 0.210714 11.5858 0.585786C11.2107 0.960859 11 1.46957 11 2V22C11 22.5304 11.2107 23.0391 11.5858 23.4142C11.9609 23.7893 12.4696 24 13 24H18C18.5304 24 19.0391 23.7893 19.4142 23.4142C19.7893 23.0391 20 22.5304 20 22V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM18 22H13V2H18V22Z" fill="#7D8088"/>
</svg>
<p>Board View</p>
</div>
     {/*List view  */}
        <div className="flex gap-2 items-center">
  <svg  className="inline-block w-3" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0H23C23.2652 0 23.5196 0.105357 23.7071 0.292893C23.8946 0.48043 24 0.734784 24 1C24 1.26522 23.8946 1.51957 23.7071 1.70711C23.5196 1.89464 23.2652 2 23 2H8C7.73478 2 7.48043 1.89464 7.29289 1.70711C7.10536 1.51957 7 1.26522 7 1ZM23 8H8C7.73478 8 7.48043 8.10536 7.29289 8.29289C7.10536 8.48043 7 8.73478 7 9C7 9.26522 7.10536 9.51957 7.29289 9.70711C7.48043 9.89464 7.73478 10 8 10H23C23.2652 10 23.5196 9.89464 23.7071 9.70711C23.8946 9.51957 24 9.26522 24 9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8ZM23 16H8C7.73478 16 7.48043 16.1054 7.29289 16.2929C7.10536 16.4804 7 16.7348 7 17C7 17.2652 7.10536 17.5196 7.29289 17.7071C7.48043 17.8946 7.73478 18 8 18H23C23.2652 18 23.5196 17.8946 23.7071 17.7071C23.8946 17.5196 24 17.2652 24 17C24 16.7348 23.8946 16.4804 23.7071 16.2929C23.5196 16.1054 23.2652 16 23 16ZM3 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H3C3.26522 2 3.51957 1.89464 3.70711 1.70711C3.89464 1.51957 4 1.26522 4 1C4 0.734784 3.89464 0.48043 3.70711 0.292893C3.51957 0.105357 3.26522 0 3 0ZM3 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H3C3.26522 10 3.51957 9.89464 3.70711 9.70711C3.89464 9.51957 4 9.26522 4 9C4 8.73478 3.89464 8.48043 3.70711 8.29289C3.51957 8.10536 3.26522 8 3 8ZM3 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H3C3.26522 18 3.51957 17.8946 3.70711 17.7071C3.89464 17.5196 4 17.2652 4 17C4 16.7348 3.89464 16.4804 3.70711 16.2929C3.51957 16.1054 3.26522 16 3 16Z" fill="#7D8088"/></svg>
<p>List View</p>
 </div>
        {/* Power view */}
        <div className="flex gap-2 items-center">
           <svg   className="inline-block w-3" width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.9738 13.7712C22.9359 13.611 22.8591 13.4625 22.75 13.3391C22.641 13.2157 22.5032 13.1211 22.3488 13.0637L15.1475 10.3625L16.98 1.19625C17.0215 0.983272 16.9926 0.76258 16.8977 0.567473C16.8028 0.372365 16.6469 0.213429 16.4538 0.114648C16.2606 0.015866 16.0405 -0.0174009 15.8267 0.0198669C15.613 0.0571348 15.4172 0.162915 15.2688 0.321246L1.26879 15.3212C1.15508 15.4411 1.07283 15.5872 1.02937 15.7465C0.985913 15.9059 0.982607 16.0735 1.01975 16.2345C1.05689 16.3954 1.13332 16.5447 1.24222 16.6689C1.35111 16.7931 1.48908 16.8884 1.64379 16.9462L8.84754 19.6475L7.02004 28.8037C6.97855 29.0167 7.00745 29.2374 7.10238 29.4325C7.19732 29.6276 7.35314 29.7866 7.54632 29.8853C7.73951 29.9841 7.95959 30.0174 8.17334 29.9801C8.3871 29.9429 8.58293 29.8371 8.73129 29.6787L22.7313 14.6787C22.8429 14.5589 22.9234 14.4135 22.9657 14.2552C23.008 14.097 23.0108 13.9308 22.9738 13.7712ZM9.67129 25.75L10.98 19.2025C11.0269 18.9703 10.9898 18.729 10.8753 18.5216C10.7608 18.3142 10.5765 18.1542 10.355 18.07L3.75004 15.5887L14.3275 4.25625L13.02 10.8037C12.9732 11.036 13.0103 11.2773 13.1248 11.4847C13.2392 11.6921 13.4236 11.8521 13.645 11.9362L20.245 14.4112L9.67129 25.75Z" fill="#7D8088"/></svg>
<p>Power View</p>
       </div>
         {/*  Addition*/}
       
          <span><svg className="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8946 23.2652 13 23 13H13V23C13 23.2652 12.8946 23.5196 12.7071 23.7071C12.5196 23.8946 12.2652 24 12 24C11.7348 24 11.4804 23.8946 11.2929 23.7071C11.1054 23.5196 11 23.2652 11 23V13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12C0 11.7348 0.105357 11.4804 0.292893 11.2929C0.48043 11.1054 0.734784 11 1 11H11V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4804 24 11.7348 24 12Z" fill="#7D8088"/>
</svg></span>
</div>
</div>

 </div>
  )
}
