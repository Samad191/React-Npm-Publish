import React, { useState } from 'react';
import './index.css'

export default function ExampleReactNpmModule({ backgroundColor, height }) {

    const [amountA, setAmountA] = useState(0)
    console.log('amount a', amountA);

    const style = {
        background: backgroundColor,
        margin: 'auto',
        width: '40rem',
        minHeight: height,
        border: '3px solid',
        marginTop: '2rem',
    }



    return (
        <div style={style} >
            <h1 style={{
                alignSelf: 'flex-start',
                marginBottom: 'var(--dl-space-space-halfunit)',
                textAlign: 'center'

            }} >Transfer funds :)</h1>
            <br />
            <div style={{
                float: 'left',
            }}>
                <span style={{ fontSize: '1.7rem', fontWeight: '500', paddingLeft: '0.4rem', fontStyle: 'normal' }} >Token A</span>
                <input
                    type="number"
                    // value={amountA}
                    style={{
                        color: 'black',
                        width: 'var(--dl-size-size-xxlarge)',
                        backgroundColor: 'var(--dl-color-gray-900)',
                        width: '18rem',
                        height: '2rem',
                        borderRadius: '5px',
                        marginLeft: '3rem'
                    }}
                    onChange={(e) => {
                        console.log('change')
                        console.log('e', e)
                        // setAmountA(e.target.value)
                    }}
                />
                <button
                    style={{
                        width: 'var(--dl-size-size-large)',
                        height: '36px',
                        fontSize: '24px',
                        backgroundColor: 'var(--dl-color-gray-900)',
                        marginLeft: '2.2rem',
                        borderRadius: '5px',
                        width: '9rem'

                    }}
                    onClick={() => console.log('amount', amountA)}

                >Send</button>
            </div>


        </div>
    )
}