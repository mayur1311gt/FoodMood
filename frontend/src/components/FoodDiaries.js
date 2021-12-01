import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function FoodDiaries() {

    const [quest, setQuest] = useState({
        questionDesc: "",
        questionTitle: "",
        questionTag: "",
    })

    const [allQues, setAllQues] = useState([])
    const [allAns, setAllAns] = useState([])

    // fetch for all questions
    useEffect(() => {
        console.log("useeffect");
        fetch('http://127.0.0.1:8000/api/question/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(resp => resp.json()).then(resp => setAllQues(resp))
        console.log(allQues);

        allQues.map(async(i) => {
            await fetch(`http://127.0.0.1:8000/api/answer/${i.questionId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(resp => resp.json()).then(resp => {
                allAns[i.questionId] = resp
                setAllAns({...allAns,...resp})
            })
            console.log("ans",allAns)
        })
    }, [])

    // add question
    const CreateQues = async () => {
        console.log("clicked");
        let fullQues = {
            questionDesc: quest.questionDesc,
            questionTitle: quest.questionTitle,
            questionTag: quest.questionTag,
            // This is to be done dynamic
            questionOwnerId: 1
        }

        await axios.post('http://127.0.0.1:8000/api/question/', fullQues)
            .then((res) => {
                console.log(res.data)
            })



    }

    const HandleInputQues = (e) => {
        const value = e.target.value;
        setQuest({
            ...quest,
            [e.target.name]: value
        });
    }

    return (
        <div className='diary-container'>
            <div className="container px-5">


                <div className="add-question card my-5">
                    <div className="card-header">
                        <h3>Start a discussion</h3>
                    </div>
                    <div className="card-body one-by-two">

                        <div className="right">
                            <div className="question-desc form-group">
                                <label htmlFor="questionDesc" className='form-label'>Describe</label>
                                <textarea name="questionDesc" id="questionDesc" onChange={HandleInputQues} value={quest.questionDesc} cols="30" rows="8" className='form-control'></textarea>
                            </div>
                        </div>

                        <div className="left">
                            <div className="question-title form-group">
                                <label htmlFor="questionTitle" className='form-label'>Title</label>
                                <input type="text" name="questionTitle" onChange={HandleInputQues} value={quest.questionTitle} id="questionTitle" className='form-control' />
                            </div>
                            <div className="question-tags form-group">
                                <label htmlFor="questionTag" className='form-label'>Tags</label>
                                <input type="text" name="questionTag" onChange={HandleInputQues} value={quest.questionTag} id="questionTag" className='form-control' />
                            </div>
                            <button className="btn btn-primary" onClick={CreateQues}> Submit </button>
                        </div>

                    </div>
                </div>


                <div className="all-questions  card my-5">
                    <div className="card-body">


                        <div className="question card mb-5">
                            <div className="ques1 card-header">
                                <h5>What food items are considered as Super-Food ?</h5>
                                <p >~ Prathmesh W.</p><p>#superfood #healthy</p>
                            </div>
                            <div className="answers card-body">
                                <h6>Replies:</h6><br />
                                <div className="answer ans-1">
                                    <p><i className="fas fa-hand-holding-heart"></i> Dark green leafy vegetables (DGLVs) are an excellent source of nutrients including folate, zinc, calcium, iron, magnesium, vitamin C and fiber.
                                        <br /><span>~ Mayur T.</span> </p>
                                </div>
                                <div className="answer ans-2">
                                    <p><i className="fas fa-hand-holding-heart"></i> Berries are a nutritional powerhouse of vitamins, minerals, fiber and antioxidants <br /><span>~ Atharva S.</span> </p>
                                </div>
                                <div className="answer ans-3">
                                    <p><i className="fas fa-hand-holding-heart"></i> Whole eggs are rich in many nutrients including B vitamins, choline, selenium, vitamin A, iron and phosphorus. They’re also loaded with high-quality protein. <br /><span>~ Vishal T.</span> </p>
                                </div>
                                <div className="answer ans-3">
                                    <textarea placeholder='Add your opinion here' name="questionDesc" id="questionDesc" cols="30" rows="5" className='form-control'></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="question card mb-5">
                            <div className="ques1 card-header">
                                <h5>Let's talk about Peanut Butter.</h5>
                                <p >~ Sanji V.</p><p>#peanut #butter #peanut-butter #breakfast</p>
                            </div>
                            <div className="answers card-body">
                                <h6>Replies:</h6><br />
                                <div className="answer ans-1">
                                    <p>Studies have shown that eating peanut butter can help lower cholesterol, aid in weight loss and prevent type 2 diabetes. Bet you didn't know this either, but peanut butter glows in the dark after it's exposed to intense light!
                                        <br /><span>~ Copper.</span> <i className="fas fa-hand-holding-heart"></i></p>
                                </div>
                                <div className="answer ans-2">
                                    <p>Peanut butter can also be made to make diamonds! How, you ask? Well, simply put, you must recreate the conditions of the lower mantle or Earth for weeks to create a 2-3mm wide diamond. So that’s only about 2,2000 degrees Celsius… On second thought, it may not be a great new business venture, but it’s still an interesting fact.<br /><span>~ Nico Robin.</span> <i className="fas fa-hand-holding-heart"></i></p>
                                </div>
                                <div className="answer ans-3">
                                    <textarea placeholder='Add your opinion here' name="questionDesc" id="questionDesc" cols="30" rows="5" className='form-control'></textarea>
                                </div>
                            </div>
                        </div>

                        {/* ########## iterate through questions from backend */}
                        {
                            allQues.map((item) => {
                                return (
                                    <div className="question card mb-5" key={item['questionId']}>
                                        <div className="ques1 card-header">
                                            <h5>{item['questionTitle']}</h5>
                                            <p >{item['questionOwnerId']}.</p><p>{item['questionTag']}</p>
                                        </div>
                                        <div className="answers card-body">
                                            <h6>Replies:</h6><br />
                                            <p>No replies yet</p>
                                            <div className="answer ans-3">
                                                <textarea placeholder='Add your opinion here' name="questionDesc" id="questionDesc" cols="30" rows="5" className='form-control'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodDiaries
