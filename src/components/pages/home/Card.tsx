import axios from "axios"
import type { TUser } from "./userTypes"
import { useState } from "react"
import Modal from "./Modal"

interface ICardProps {
  user: TUser
}

function Card({ user }: ICardProps) {
  const [isOpen, setisOpen] = useState(false)
  const deletehander = async () => {
    await axios.delete(`http://localhost:3000/users/${user.id}`)
  };
  const openModal = () => {
    setisOpen(true);
  };
  return (
    <>
      <div className="bg-blue-500 text-white w-fit p-2">
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.tel}</h1>
        <h1>{user.course}</h1>
        <button onClick={deletehander} className="bg-red-600 cursor-pointer p-2 rounded-full">Delete</button>
        <button onClick={openModal} className="bg-red-600 cursor-pointer p-2 mx-5 rounded-md">edit</button>
      </div>

      {isOpen ? (
        <Modal>
          <div className="text-center p-5 w-[400[x]">
            <h2>Ozgatirish</h2>
            <form className="flex flex-col gap-2 items-center">
              <input required type="text" name="name" placeholder="Name" className="p-2 border-1 rounded-md" />
              <input required type="number" name="age" placeholder="Age" className="p-2 border-1 rounded-md" />
              <input required type="tel" name="tel" placeholder="Tel" className="p-2 border-1 rounded-md" />
              <select required name="course" className="border-1 p-2 rounded-md">
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Mobile">Mobile</option>
                <option value="AI">AI</option>
              </select>
              <div className="flex">
                <button onClick={()=>setisOpen(false)}  type="button" className="btn bg-blue-500 w-1/2 text-white">Enter</button>
                <button className="btn bg-blue-500 w-1/2 text-white">Cancel</button>
              </div>
            </form>

          </div>
        </Modal>
      ) : null}
    </>
  )
}

export default Card