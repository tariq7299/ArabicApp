import MyButton from '../common/MyButton/MyButton'
import MyTitle from '../common/MyTitle/MyTitle'
import SectionMeta from '../common/SectionMeta/SectionMeta'
import './FreeResourcesSection.scss'

function FreeResourcesSection() {

    return (
        <div className='free-resoureces-section-container section-gap'>
            <div className='free-resources-elements-wrapper'>

                <div className='title-button-meta-wrapper'>
                    <h3>Try our free resources</h3> 
                    <div className='section-meta-wrapper'>
                    <SectionMeta>Get a taste of Arabic App with our most popular tools and guides. No subscription required.</SectionMeta>
                    </div>
                    <MyButton text="Join now" buttonColor="background-color-black" textColor="secondary-font-color"></MyButton>

                </div>

                <img src="https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftry_cambly.3d7c8d26.png&w=640&q=75" alt="Cambly Resources"></img>

            </div>
        </div>
    )
}

export default FreeResourcesSection