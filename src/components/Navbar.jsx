export function Navbar() {
    console.log("Navbar rendered")

    return (
        <>
            <nav className="nav">
                <label>Ol'School Gaming</label>
                <div className="tabs">
                    <a href="/account">Account</a>
                    <a href="/">Todos</a>
                </div>
            </nav>
        </>
    )
}
