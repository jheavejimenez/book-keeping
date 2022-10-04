import React from 'react'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function OutgoingButton({text}) {
  const [showModal, setShowModal] = React.useState(false);
    
  return (
    <>
    <button
        className={"bg-white text-blue-500 font-bold px-6 py-2 rounded inline-flex items-center"}
        type="button"
        onClick={() => setShowModal(true)}
    >
    <PaperAirplaneIcon className= " w-7 h-7 mr-1 text-blue-500 -rotate-45 "/>{text}
    </button>
     {showModal ? (
      <>
          <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
              <div className="relative w-1/4 my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semi-bold text-black">
                              Send New Files
                          </h3>
                          <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semi-bold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                          >
          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
            
          </span>
                          </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex justify-center">
                          <form>
                              <fieldset className={"mb-5 w-1/3"}>
                                  <label className={"mb-6"} >
                                      <p className={"text-black"}>Recipient</p>
                                      <input name="recipient" className={"border rounded-md border-black text-black w-full"} />
                                  </label>
                                  <label>
                                      <p className={"text-black mt-3"}>Attach File</p>
                                      <input type="file"/>
                                  </label>
                              </fieldset>
                          </form>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                              className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                          >
                              Close
                          </button>
                          <button
                              className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                          >
                              Send Files
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
    </>
  )

    
}

export default OutgoingButton;
