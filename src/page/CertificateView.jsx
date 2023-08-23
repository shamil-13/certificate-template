import React, { useEffect, useState } from 'react'
import { axiosGet } from '../utils/api'

const CertificateView = () => {

    const [data, setData] = useState([])

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const fetchdData = async () => {
        await axiosGet(`${import.meta.env.VITE_BASE_URL}certificate`)
            .then(res => {
                if (res.status === 200) {
                    setData(res?.data[0])
                } else {
                    alert('No data')
                }
            })
            .catch(err => console.log(err, 'err'))
    }

    useEffect(() => {
        fetchdData()
    }, [])

    return (
        <div className='container'>
            <div className="inner-body">
                <div className="icon">

                </div>
                <h2 className='title'>Certificate</h2>
                <h2 className='sub-title'>of Appreciation</h2>
                <div className='line' style={{ width: '25%' }} />
                <h3 className='sub-title-2'>Proudly Presented to</h3>
                <h2 className='name'>{data?.name} Sarovar</h2>
                <p className="content">For the outstanding completion of {data?.course} on the</p>
                <h3 className='sub-title'>NOLTE FZE LEARNING PLATFORM</h3>
                <div className="box-container">
                    <div className="box">
                        <h3 className='official'>{data?.manager}</h3>
                        <p className="designation">Training Manager</p>
                        <div className='line' />
                        <p className="date">Dubai ,{' '}{day}-{month}-{year}</p>
                    </div>
                    <div className="box">
                        <h3 className='official'>{data?.md}</h3>
                        <p className="designation">Managing Director</p>
                        <div className='line' />
                        <p className="date">Dubai ,{' '}{day}-{month}-{year}</p>
                    </div>
                </div>

                <div className="logo">

                </div>
            </div>

        </div>
    )
}

export default CertificateView