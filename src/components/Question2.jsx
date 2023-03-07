import React, { useEffect, useState } from 'react'
import { MathJax, MathJaxContext } from 'better-react-mathjax'
import { Link } from 'react-router-dom'

const Question2 = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch("https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_901")
            .then((response) => response.json())
            .then((data) => setData(data))
    })

    return (
        <div className='app'>
            {data && <div className='container'>
                <MathJaxContext>
                    <MathJax>
                        <div className='question'>
                            <h3>Question 2 :{data[0].Question}</h3>
                        </div>
                        <div className='details'>
                            <div className='detail-1'>Chapter: {data[0].ChapterID}</div>
                            <div className='detail-1'>Difficulty: {data[0].Difficulty}</div>
                            <div className='detail-1'>ExpectedTime: {data[0].ExpectedTime}</div>
                            <div className='detail-1'>Step1Timer: {data[0].Step1Timer}</div>
                            <div className='detail-1'>Step2Timer: {data[0].Step2Timer}</div>
                            <div className='detail-1'>Step3Timer: {data[0].Step3Timer}</div>
                            <div className='detail-1'>Step4Timer: {data[0].Step4Timer}</div>
                            <div className='detail-1'>Step5Timer: {data[0].Step5Timer}</div>
                        </div>
                    </MathJax>
                </MathJaxContext>
            </div>}

            <div className='btns'>
                <Link to='/'><button>1</button></Link>
                <Link to='/question2'><button className='second'>2</button></Link>
                <Link to='/question3'><button>3</button></Link>
            </div>
        </div>
    )
}

export default Question2