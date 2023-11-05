// import logoImage from "";

export function Navbar() {
    console.log("Navbar rendered")

    return (
        <>
            <nav className="nav">
                <label>Ol'School Gaming</label>
                {/* <img src={logoImage} alt="Logo" className="logo-img" /> */}
                <div className="tabs">
                    <a href="/account">Account</a>
                    <a href="/">Todos</a>
                </div>
            </nav>
        </>
    )
}
