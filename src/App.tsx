import { useState } from "react"
import "./App.css"
import Input from "./components/Input"

type Data = { [key: string]: string }

const App = () => {
  const [data, setData] = useState<Data>({
    BidsPortfolioManager: "",
    LanguageCode: "",
    Country: "",
    AppliedAmount: "",
    Amount: "",
    Interest: "",
    MonthlyPayment: "",
    County: "",
    City: "",
    Rating: "",
    PrincipalPaymentsMade: "",
    InterestAndPenaltyPaymentsMade: "",
    PrincipalBalance: "",
    InterestAndPenaltyBalance: "",
    PreviousRepaymentsBeforeLoan: "",
  })

  const fields = [
    "BidsPortfolioManager",
    "LanguageCode",
    "Country",
    "AppliedAmount",
    "Amount",
    "Interest",
    "MonthlyPayment",
    "County",
    "City",
    "Rating",
    "PrincipalPaymentsMade",
    "InterestAndPenaltyPaymentsMade",
    "PrincipalBalance",
    "InterestAndPenaltyBalance",
    "PreviousRepaymentsBeforeLoan",
  ]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setData((prevData: Data) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = () => {}

  return (
    <div className="App flex flex-col gap-10 min-h-screen">
      <div className="text-3xl font-bold text-center">Risk Detector</div>
      <div className="text-xl font-semibold text-center">
        Borrower's History Analysis
      </div>
      <div className="max-w-[400px] w-full flex flex-col gap-6">
        {fields.map((field: string) => (
          <Input
            key={field}
            title={field}
            state={data[field]}
            handleChange={handleChange}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
