import { startCase } from "lodash"

type Inputs = {
  state: string
  handleChange: any
  title: string
}

const Input = ({ state, handleChange, title }: Inputs) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="font-semibold">{startCase(title)}</div>
      <input type="text" name={title} value={state} onChange={handleChange} />
    </div>
  )
}

export default Input
