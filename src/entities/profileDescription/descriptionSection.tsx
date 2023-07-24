import s from './description.module.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Checkbox} from "@mui/material";


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

const contactImages = {
    github: <GitHubIcon/>,
    vk: <LinkedInIcon/>,
    facebook: <FacebookIcon/>,
    instagram: <InstagramIcon/>,
    twitter: <TwitterIcon/>,
    website: <LanguageIcon/>,
    youtube: <YouTubeIcon/>,
    mainLink: <TelegramIcon/>
}


const contactNames: ContactNames = {
    github: 'GitHub',
    vk: 'LinkedIn',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    website: 'Website',
    youtube: 'YouTube',
    mainLink: 'Telegram'
}

export const DescriptionSection = ({contacts, lookingForAJobDescription, lookingForAJob}: DescriptionSectionProps) => {

    return (
        <div className={s.section}>
            <div className={s.container}>
                <div className={s.jobInfo}>
                    <div className={s.first}>
                        <div className={s.lfj}>Looking for a job:</div>
                        <div className={s.answer}>
                            <Checkbox checked={lookingForAJob}/>
                        </div>
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
            </div>

            <div className={s.contacts}>
                {Object.keys(contacts).map((key, id) => (
                    <a href={contacts[key] || ''} className={s.contact} key={id}>
                        {/*// @ts-ignore*/}
                        <div>{contactImages[key]}</div>
                        <p>{contactNames[key]}</p>
                        <div className={s.showContact}>  {contacts[key] ? contacts[key] : 'Not specified'}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};