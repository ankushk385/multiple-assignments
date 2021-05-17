import React from 'react'
import { useTranslation } from "react-i18next";

const Home = () => {

    const {t} = useTranslation();

    return (
        <div className="container">
            <h2>{t('welcome_tag')}</h2>
                  <h5>{t('welcome_msg')}</h5>
                    </div>
    )
}

export default Home
