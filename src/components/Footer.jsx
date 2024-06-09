import logo from '/expired_but_continues.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <img className='h-[100px] w-[100] mb-5' src={logo} alt="Logo"></img>
                    <p>CPSSK BATCH 2021<br />Copyright © 2024 - All right reserved</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Developed by Tanvir Kabir</h6>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;