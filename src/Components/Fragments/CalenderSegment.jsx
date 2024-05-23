import React, { useState } from 'react'
import { generateDate, months } from '../../utils/calender'
import cn from '../../utils/cn';
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion"
import EventDetail from './EventDetail';
import { Tooltip as ReactTooltip } from 'react-tooltip'







const CalenderSegment = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const questEvent = dayjs('2024-06-01')
  const currentDate = dayjs();
  const [selectDate, setSelectDate] = useState(questEvent);
  const [hover, setHover] = useState(false)


  return (
    <div className="flex gap-10 sm:divide-x justify-center xl:w-4/5 lg:mx-auto items-center sm:flex-row flex-col">
      <div className="xl:w-[100%] h-100 mr-9 w-[80%]">

        <div className="border h-32  bg-slate-400">
          <h1 className='title font-semibold text-4xl text-center mt-3 font-sans'>
            Events Schedule
          </h1>
          <div className="functional-info flex justify-between mt-6">
            <h1 className="select-none font-semibold ml-5">
              {months[selectDate.month()]}, {selectDate.year()}
            </h1>
            <div className="flex gap-10 items-center ">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setSelectDate(selectDate.month(selectDate.month() - 1));
                }}
              />
              <h1
                className=" cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setSelectDate(currentDate);
                }}
              >
                Today
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setSelectDate(selectDate.month(selectDate.month() + 1));
                }}
              />
            </div>
          </div>

        </div>
        <div className="grid grid-cols-7 border-t border-x bg-white">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-xl text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" grid grid-cols-7 border bg-white">
          {generateDate(selectDate.month(), selectDate.year()).map(
            ({ date, currentMonth, today, questEvent }, index) => {
              return (
                <div
                  key={index}
                  className="text-center h-14 grid place-content-center text-xl border-t"
                >
                  <h1
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={questEvent}

                    className={cn(
                      currentMonth ? "" : "text-gray-700 text-opacity-50",
                      today ? "bg-orange-600 text-black" : "",

                      questEvent ? "bg-green-600 text-black hover:bg-green-600"
                        : "",
                      "h-10 w-10 text-black rounded-full grid place-content-center hover:bg-blue-400 hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                    <ReactTooltip id='my-tooltip' />

                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>

    </div>
  );
}

export default CalenderSegment