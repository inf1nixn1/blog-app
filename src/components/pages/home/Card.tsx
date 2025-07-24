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
  const edithandler=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
       const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      await axios.put(`https://localhost:3000/users/${user.id}`, data);
      setisOpen(false)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="bg-blue-500 text-white w-fit p-2">
        <img src={user.rasm} alt="" />
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
            <form onSubmit={edithandler} className="flex flex-col gap-2 items-center">
              <input defaultValue={user.name} required type="text" name="name" placeholder="Name" className="p-2 border-1 rounded-md" />
              <input defaultValue={user.age} required type="number" name="age" placeholder="Age" className="p-2 border-1 rounded-md" />
              <input defaultValue={user.tel} required type="tel" name="tel" placeholder="Tel" className="p-2 border-1 rounded-md" />
              <select defaultValue={user.course} required name="course" className="border-1 p-2 rounded-md">
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Mobile">Mobile</option>
                <option value="AI">AI</option>
              </select>  
              <div className="flex items-center w-full gap-2">
                <button onClick={()=>setisOpen(false)} type="button" className="btn p-1.5 rounded-full bg-blue-500 w-1/2 text-white">Cancel</button>
                <button className="btn p-1.5 rounded-full bg-blue-500 w-1/2 text-white">Enter</button>
              </div>
            </form>

          </div>
        </Modal>
      ) : null}
    </>
  )
}

export default Card