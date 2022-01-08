import React from 'react'



class Footer extends React.Component {

    render() {
        return(
            <footer className="footer">
                <div className="conteiner">
                    <div className="footer_wrapper">
                        <div className="footer_copyright">
                            <div className="footer_copyright_name">© Дмитрий Маленков</div>
                            <p>HTML верстка и разработка сайтов</p>
                        </div>
                        <div className="footer_icons">
                            <p>Мои профили в соцсетях</p>
                            <div className="icons_wrapper">
                                <a href="/#">
                                    instagram
                                </a>
                                <a href="/#">
                                    facebook
                                </a>
                                <a href="/#">
                                    "vk"
                                </a>
                                <a href="/#">
                                    linkedin
                                </a>
                                <a href="/#">
                                    github
                                </a>
                            </div>
                        </div>
                        <div className="footer_contacts">
                            <a href="/#" className="footer_button">
                                Связаться в контакте
                            </a>
                            <p>Напишите мне, чтобы заказать или узнать стоимость верстки вашего проекта</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;