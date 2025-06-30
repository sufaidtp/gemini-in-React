import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

const Main = () => {

    const { onSent, recentPrompts, showResult, loading, resultData, input, setInput } = useContext(Context);
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className='main-container'>
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How Can I Help Today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest Beautiful Places see in upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>brefiely summerize the concept:urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activity for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>improve the relablity of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompts}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>

                    </div>
                }

                <div className='main-bottom'>
                    <div className="search-box">
                        <input onChange={(e) => {
                            setInput(e.target.value);
                        }} value={input} type='text' placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => {
                                onSent()
                            }} src={assets.send_icon} alt="" />
                        :null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        You can ask Gemini to write code, create images, and more.
                    </p>
                </div>

            </div>


        </div>
    )
}

export default Main