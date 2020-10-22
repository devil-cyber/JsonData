import React, { useState } from 'react';
import "./code.css";
function Code() {
    const str1 = "{";
    const str2 = "}";
    const [data, setData] = useState('{}');

    return (
        <>
            <div className='code'>
                <pre>
                    <code className='codeColor' >
                        <span className='fetch'>fetch</span>
                        <span className='bracket'>(</span>
                        <span className='link'>'https://babbaer.herokuapp.com/post/one'</span>
                        <span className='bracket'>)<br /></span>
                        <span className='bracket'>&nbsp;&nbsp;&nbsp;&nbsp;.</span>
                        <span className='fetch'>then</span>
                        <span className='bracket'>(</span>
                        <span className='bracket'>response</span>
                        <span className='arrow'>&nbsp;=>&nbsp;</span>
                        <span className='bracket'>response</span>
                        <span className='bracket'>.</span>
                        <span className='fetch'>json</span>
                        <span className='bracket'>(</span>
                        <span className='bracket'>)</span>
                        <span className='bracket'>)<br /></span>

                        <span className='bracket'>&nbsp;&nbsp;&nbsp;&nbsp;.</span>
                        <span className='fetch'>then</span>
                        <span className='bracket'>(</span>
                        <span className='bracket'>json</span>
                        <span className='arrow'>&nbsp;=>&nbsp;</span>
                        <span className='bracket'>console.</span>
                        <span className='fetch'>log</span>
                        <span className='bracket'>(json)</span>
                        <span className='bracket'>)</span>
                    </code>
                </pre>

            </div>
            <button className='buttonColor' onClick={Api}>Run Script</button>
            <div className='code'>
                <code className='codeColor'>

                    {data === '{}' ? (
                        <span>{data}</span>
                    ) : (
                            <div>
                                <p>{str1}</p>
                                <span>&nbsp;&nbsp;&nbsp;"_id":&nbsp;{data[0]}<br /></span>
                                <span>&nbsp;&nbsp;&nbsp;"id":&nbsp;{data[1]}<br /></span>
                                <span>&nbsp;&nbsp;&nbsp;"userId":&nbsp;"{data[2]}"<br /></span>
                                <span>&nbsp;&nbsp;&nbsp;"title":&nbsp;"{data[3]}"<br /></span>
                                <span>&nbsp;&nbsp;&nbsp;"body":&nbsp;"{data[4]}"<br /></span>
                                <p>{str2}</p>
                            </div>

                        )
                    }

                </code>
            </div>
            <h6>Congrats you've made your first call to JSON Data! 😃 🎉</h6>
        </>
    );
    async function Api() {
        const response = await fetch('https://babbaer.herokuapp.com/post/one')
        const json = await response.json()
        const arr = await [json._id, json.id, json.userId, json.title, json.body];
        await setData(arr);

    }

}

export default Code;