import React from 'react'

const Calendar = () => {
  return (
    <div className="h-screen bg-white">
      <div className="flex h-full">

        
        <aside className="w-64 border-r border-[#e5e5e5] p-4 flex flex-col gap-4">
          <div className="h-10 w-28 bg-[#171717] rounded-md"></div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs text-[#737373]">
            <div>S</div><div>M</div><div>T</div><div>W</div>
            <div>T</div><div>F</div><div>S</div>
          </div>

          <div className="grid grid-cols-7 gap-1">
            <div className="h-6 flex items-center justify-center rounded-full text-xs">2</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">3</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">4</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">5</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">6</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">7</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">8</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">9</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">10</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">11</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">12</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">13</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">14</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">15</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">16</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs bg-[#171717] text-white">17</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">18</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">19</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">20</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">21</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">22</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">23</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">24</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">25</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">26</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">27</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">28</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">29</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">30</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">31</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">1</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">2</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">3</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">4</div>
            <div className="h-6 flex items-center justify-center rounded-full text-xs">5</div>
          </div>

          <div className="h-px bg-[#e5e5e5] my-2"></div>

          <div className="flex flex-col gap-2">
            <div className="h-4 w-20 bg-[#e5e5e5] rounded-md"></div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#a3a3a3] rounded"></div>
              <div className="flex-1 h-4 bg-[#f5f5f5] rounded-md"></div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#a3a3a3] rounded"></div>
              <div className="flex-1 h-4 bg-[#f5f5f5] rounded-md"></div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#a3a3a3] rounded"></div>
              <div className="flex-1 h-4 bg-[#f5f5f5] rounded-md"></div>
            </div>
          </div>
        </aside>


        <section className="flex-1 flex flex-col">
          <div className="h-14 border-b border-[#e5e5e5] flex items-center gap-4 px-4 bg-white">
            <div className="w-8 h-8 bg-[#e5e5e5] rounded-md"></div>
            <div className="w-8 h-8 bg-[#e5e5e5] rounded-md"></div>
            <div className="w-32 h-6 bg-[#e5e5e5] rounded-md shrink-0"></div>
            <div className="flex-1"></div>

            <div className="flex gap-1 bg-[#f5f5f5] w-52 rounded-md p-1">
              <div className="flex-1 h-7 bg-white rounded-md"></div>
              <div className="flex-1 h-7 bg-[#f5f5f5] rounded-md shadow-sm"></div>
              <div className="flex-1 h-7 bg-[#f5f5f5] rounded-md shadow-sm"></div>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="w-16 border-r border-[#e5e5e5] flex flex-col">
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">8:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">9:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">10:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">11:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">12:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">13:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">14:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">15:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">16:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">17:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">18:00</div>
              <div className="flex-1 border-b border-[#f5f5f5] flex items-start justify-end px-2 py-1 text-xs text-[#a3a3a3]">19:00</div>
            </div>

            <div className="flex flex-1">
             
              <div className="flex-1 border-r border-[#e5e5e5] flex flex-col">
                <div className="h-12 border-b border-[#e5e5e5] flex flex-col items-center justify-center text-xs text-[#737373]">
                  <span>Tue</span>
                  <span className="w-6 h-6  rounded-full flex items-center justify-center text-sm">15</span>
                </div>
                
              </div>

              <div className="flex-1 border-r border-[#e5e5e5] flex flex-col">
                <div className="h-12 border-b border-[#e5e5e5] flex flex-col items-center justify-center text-xs text-[#737373]">
                  <span>Wed</span>
                  <span className="w-6 h-6  rounded-full flex justify-center text-sm">16</span>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute left-1 right-1 top-8 h-16 bg-[#e5e5e5] rounded-md"></div>
                </div>
              </div>

              <div className="flex-1 border-r border-[#e5e5e5] flex flex-col">
                <div className="h-12 border-b border-[#e5e5e5] flex flex-col items-center justify-center text-xs text-[#737373]">
                  <span>Thu</span>
                  <span className="w-6 h-6 bg-[#171717] text-white rounded-full flex items-center justify-center text-sm">17</span>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute left-1 right-1 top-24 h-12 bg-[#262626] rounded-md"></div>
                </div>
              </div>

              <div className="flex-1 border-r border-[#e5e5e5] flex flex-col">
                <div className="h-12 border-b border-[#e5e5e5] flex flex-col items-center justify-center text-xs text-[#737373]">
                  <span>Fri</span>
                  <span className="w-6 h-6  rounded-full flex items-center justify-center text-sm">18</span>
                </div>
                
              </div>

              <div className="flex-1 border-r border-[#e5e5e5] flex flex-col">
                <div className="h-12 border-b border-[#e5e5e5] flex flex-col items-center justify-center text-xs text-[#737373]">
                  <span>Sat</span>
                  <span className="w-6 h-6  rounded-full flex items-center justify-center text-sm">19</span>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute left-1 right-1 top-4 h-20 bg-[#d4d4d4] rounded-md"></div>
                </div>
              </div>

              <div className="flex-1 border-r border-[#e5e5e5] flex flex-col">
                <div className="h-12 border-b border-[#e5e5e5] flex flex-col items-center justify-center text-xs text-[#737373]">
                  <span>Sun</span>
                  <span className="w-6 h-6  rounded-full flex items-center justify-center text-sm">20</span>
                </div>
                
              </div>

              <div className="flex-1 border-r border-[#e5e5e5] flex flex-col">
                <div className="h-12 border-b border-[#e5e5e5] flex flex-col items-center justify-center text-xs text-[#737373]">
                  <span>Mon</span>
                  <span className="w-6 h-6  rounded-full flex items-center justify-center text-sm">21</span>
                </div>
                
              </div>
              
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Calendar