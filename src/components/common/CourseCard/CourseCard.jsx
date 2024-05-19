import './CourseCard.scss'

function CourseCard() {

    return (
        <div className='course-card-wrapper'>  

            <div className='image-wrapper'>
                <img src="https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5e2b9a72db0da5490226b6b5.f6827192.png&amp;w=384&amp;q=75"></img>  
            </div>
            <div className='course-details-wrapper'>
                <h4>IELTS Speaking Part 1</h4>
                <div className='course-card-meta-wrapper'>

                <p>ANY LEVEL</p>
                <p>8 LESSONS</p>
                </div>
            </div>

        </div>
    )
}

export default CourseCard