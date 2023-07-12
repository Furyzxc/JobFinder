import s from './profileInfo.module.css'

// images


import github from '../../assets/contacts/git.png'
import vk from '../../assets/contacts/vk.png'
import facebook from '../../assets/contacts/facebook.png'
import instagram from '../../assets/contacts/insta.png'
import twitter from '../../assets/contacts/twitter.png'
import website from '../../assets/contacts/website.png'
import youtube from '../../assets/contacts/youtube.png'
import mainLink from '../../assets/contacts/mainlink.png'


interface DescriptionSectionProps {
    lookingForAJob: boolean
    lookingForAJobDescription: string | null

    contacts: {
        [key: string]: string | null;
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
}

interface ContactNames {
    [key: string]: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

const contactImages: ContactNames = {
    github, vk, facebook, instagram, twitter, website, youtube, mainLink
}


const contactNames: ContactNames = {
    github: 'GitHub',
    vk: 'VK',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    website: 'Website',
    youtube: 'YouTube',
    mainLink: 'Main Link'
}

export const DescriptionSection = ({contacts, lookingForAJobDescription, lookingForAJob}: DescriptionSectionProps) => {

    return (
        <div className={s.section}>
            <div className={s.jobInfo}>
                <div className={s.first}>
                    <div className={s.lfj}>Looking For A Job:</div>
                    <div className={s.answer}>{lookingForAJob ? 'Yes' : 'No'}</div>
                </div>
                <div className={s.second}>
                    <div className={s.lkfDescription}>
                        Description:
                    </div>
                    <div className={s.text}>
                        {lookingForAJobDescription ? lookingForAJobDescription : 'Currently no description'}
                    </div>
                </div>
            </div>

            <div className={s.contacts}>
                {Object.keys(contacts).map((key, id) => (
                    <a href={contacts[key] || '#'} className={s.contact} key={id}>
                        <img src={contactImages[key]} alt='Icon'/>
                        <p>{contactNames[key]}</p>
                        <div className={s.showContact}>  {contacts[key] ? contacts[key] : 'not specified'}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};