"use client"

import CountUp from "react-countup"

const NumbersSpeakItem = ({ numberDetails }) => {
  const { rupees, title } = numberDetails

  const parseNumber = (str) => {
    const num = parseFloat(str.replace(/[^0-9.]/g, ""))
    return isNaN(num) ? 0 : num
  }

  const getSuffix = () => {
    if (rupees.includes("Bn")) {
      return " billion"
    }
    if (rupees.includes("K")) {
      return "K"
    }
    return ""
  }

  const getCurrencySymbol = () => {
    if (rupees.includes("$")) {
      return "$"
    }
    return ""
  }

  const getFormattedNumber = (value) => {
    const suffix = getSuffix()
    const currency = getCurrencySymbol()
    const plusSign = rupees.includes("+") ? "+" : ""
    return `${currency}${value} ${suffix}`.trim() + plusSign
  }

  return (
    <li className="py-5">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl text-custom-blue px">
          <div className="inline-block w-96 text-center">
            <CountUp
              end={parseNumber(rupees)}
              duration={2}
              formattingFn={getFormattedNumber}
            />
          </div>
        </h1>
        <p className="text-custom-gray text-xl text-center">{title}</p>
      </div>
    </li>
  )
}

export default NumbersSpeakItem
