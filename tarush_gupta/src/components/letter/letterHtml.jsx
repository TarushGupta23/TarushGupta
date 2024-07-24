import './letter.css'
export default function LetterHtml({idx}) {
    return <section className={idx===8?`letterContainer`:`letterContainer hidden`} id='letterContainer'>
        <strong>Let's have a talk</strong>
        <form action="">
            <div className="email"><input type="mail" placeholder='Email'/></div>
            <div className="name"><input type="text" placeholder='Name'/></div>
            <div className="message"><textarea name="" id="" placeholder='Message'></textarea></div>
            <button>send</button>
        </form>
        <div>To: <i>tarush23.gupta@gmail.com</i></div>
    </section>
}