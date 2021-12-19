const Footer = ({links,data:{copyright,author, texto}}) => {
    return (
        <footer>
            <p>{copyright} - {author} - {texto}</p>
        </footer>
    )
}

export default Footer